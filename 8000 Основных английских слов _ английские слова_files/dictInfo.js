jQuery(document).ready(function(){
    DictInfo.bindEvents();
})


DictInfo =
{
	dictID: null,
	dictsIDs: null,
	isLoggedIn: null,
	isLoading: false,
	L10n: null,
	
	loadVars: function( dictID, isLoggedIn )
	{
		this.dictID = dictID;
		this.dictsIDs = new Array(dictID);
		this.isLoggedIn = ( isLoggedIn == '1' );
	},
	
	loadL10n: function( L10n )
	{
		this.L10n = L10n;
	},
	
	isEmpty: function( val )
    {
        return ( val == undefined || val == null || val == '' );
    },

	saveComplexity: function( complexity )
	{
		if( this.isLoading )
			return;

		this.showLoad();

		AjaxRequest.query(
		{
			'folder': 'lessons',
			'file': 'SetLessonComplexity',
			'dicts_ids': this.dictsIDs,
			'complexity': complexity
		},
		function(result, errors)
		{
			DictInfo.hideLoad();
		})
	},

	saveRating: function( vote )
	{
		if( this.isLoading )
			return;

		this.showLoad();

		AjaxRequest.query(
		{
			'folder': 'lessons',
			'file': 'SetLessonRating',
			'dicts_ids': this.dictsIDs,
			'vote': vote
		},
		function(result, errors)
		{
			DictInfo.hideLoad();
		})
	},

	setRating: function( rating )
	{
		$('#LessonUserEstimates .ratingValue').text(rating);
	},

	getRating: function()
	{
		return parseInt($('#LessonUserEstimates .ratingValue').text(), 10);
	},

	incRating: function()
	{
		this.setRating(this.getRating() + 1);
	},

	decRating: function()
	{
		this.setRating(this.getRating() - 1);
	},

	showLoad: function()
	{
		this.isLoading = true;

		$('#LessonUserEstimates .name').removeClass('namePassive').addClass('namePassive');
	},

	hideLoad: function()
	{
		this.isLoading = false;

		$('#LessonUserEstimates .name').removeClass('namePassive');
	},

	onStarOver: function( star )
	{
		if( this.isLoading || !$('#LessonUserEstimates .complexity').hasClass('activeComplexity') )
			return false;

		star.prevAll().removeClass('emptyStar fullStar').addClass('fullStar');
		$('#LessonUserEstimates .complexity .name').text(star.attr('title'));
		return false;
	},

	onStarOut: function()
	{
		if( this.isLoading || !$('#LessonUserEstimates .complexity').hasClass('activeComplexity') )
			return false;

		$('#LessonUserEstimates .star').removeClass('emptyStar fullStar').addClass('emptyStar');
		$('#LessonUserEstimates .complexity .name').text(this.L10n['estim.complexname']);
		return false;
	},

	onClickStar: function( star )
	{
		if( !this.isLoggedIn || this.isLoading ||
				!$('#LessonUserEstimates .complexity').hasClass('activeComplexity') )
			return false;

		var complexity = star.attr('val');
		var title = this.L10n['estim.yourcomplex'].replace('%1', star.attr('title'));
		$('#LessonUserEstimates .complexity').removeClass('activeComplexity');
		star.prevAll().removeClass('emptyStar fullStar').addClass('fullStar');
		star.removeClass('emptyStar fullStar').addClass('fullStar');
		$('#LessonUserEstimates .complexity .name').text(title);
		this.saveComplexity(complexity);

		return false;
	},

	onClickArrow: function( arrow )
	{
		if( !this.isLoggedIn || this.isLoading ||
				!$('#LessonUserEstimates .rating').hasClass('activeRating') )
			return false;

		var vote = null;

		$('#LessonUserEstimates .rating').removeClass('activeRating');
		if( arrow.hasClass('upArrow') )
		{
			vote = '1';
			arrow.removeClass('upArrow upArrowDark upArrowActive').addClass('upArrowActive').attr('title', this.L10n['estim.yourvote']);
			$('#LessonUserEstimates .downArrow').removeClass('downArrow downArrowDark').addClass('downArrowPassive').removeAttr('title');
			this.incRating();
		}
		else if( arrow.hasClass('downArrow') )
		{
			vote = '-1';
			arrow.removeClass('downArrow downArrowDark downArrowActive').addClass('downArrowActive').attr('title', this.L10n['estim.yourvote']);
			$('#LessonUserEstimates .upArrow').removeClass('upArrow upArrowDark').addClass('upArrowPassive').removeAttr('title');
			this.decRating();
		}
		else
			return false;

		this.saveRating(vote);

		return false;
	},
	
	addToMe:
	{
		clickAddToMe: function( link )
		{
			if( DictInfo.isLoading || DictInfo.isEmpty(link) )
				return false;
			
			link.blur();
			var decision = link.hasClass('addToMyDictCont') ? 'add' : 'rem';
			
			DictInfo.addToMe.showLoad(link);

			AjaxRequest.query(
			{
				'folder': 'dicts',
				'file': 'AddDictToUser',
				'dict_id': DictInfo.dictID,
				'decision': decision
			},
			function(result, errors)
			{
				DictInfo.addToMe.hideLoad(link);
				
				if(DictInfo.isEmpty(result) || DictInfo.isEmpty(result['data']))
				{
					DictInfo.addToMe.showError(link, DictInfo.L10n['common.error.system']);
					return;
				}
			
				if(!DictInfo.isEmpty(result['data']['error']))
				{
					DictInfo.addToMe.showError(link, result['data']['error']);
					return;
				}
				
				link.find('span').text(result['data']['title']);
				
				if(decision == 'add')
				{
					link.removeClass('addToMyDictCont inMyDictCont myDictCont errMyDictCont').addClass('inMyDictCont');
					link.find('.myDictIco').removeClass('inMyDict addToMyDict').addClass('inMyDict');
				}
				else
				{
					link.removeClass('addToMyDictCont inMyDictCont myDictCont errMyDictCont').addClass('addToMyDictCont');
					link.find('.myDictIco').removeClass('inMyDict addToMyDict').addClass('addToMyDict');
				}
			});

			return false;
		},
		
		showLoad: function( link )
		{
			DictInfo.isLoading = true;
			this.hideError(link);
			this.hideIcon(link);
			link.removeClass('errMyDictCont myDictCont').addClass('myDictCont');
			link.find('span').text(DictInfo.L10n['addToMe.load']);
		},
		
		hideLoad: function( link )
		{
			link.removeClass('myDictCont');
			this.showIcon(link);
			DictInfo.isLoading = false;
		},
		
		showError: function( link, error )
		{
			this.hideIcon(link);
			link.removeClass('errMyDictCont myDictCont').addClass('errMyDictCont');
			link.find('span').text(error);
			
			setTimeout(function(){
				DictInfo.addToMe.hideError(link);
			}, 3000);
		},
		
		hideError: function( link )
		{
			this.showIcon(link);
			link.removeClass('errMyDictCont');
			
			if( link.hasClass('addToMyDictCont') )
				link.find('span').text(DictInfo.L10n['addToMe.addToMyList'])
			else
				link.find('span').text(DictInfo.L10n['addToMe.inMyList']);
		},
		
		hideIcon: function( link )
		{
			link.find('.myDictIco').css('visibility', 'hidden');
		},
		
		showIcon: function( link )
		{
			link.find('.myDictIco').css('visibility', 'visible');
		},
	
		bindEvents: function()
		{
			$('#DictInfoCont .addToMyDictCont,#DictInfoCont .inMyDictCont').click(function(){
				return DictInfo.addToMe.clickAddToMe( $(this) );
			})
		}
	},

	bindEvents: function()
	{
		if( this.isEmpty(this.dictID) )
			return;
		
		this.addToMe.bindEvents();
		
		$('#LessonUserEstimates .star').mouseover(function(){
			return DictInfo.onStarOver($(this));
		}).mouseout(function(){
			return DictInfo.onStarOut();
		}).click(function(){
			return DictInfo.onClickStar($(this));
		});

		$('#LessonUserEstimates .arrow').click(function(){
			return DictInfo.onClickArrow($(this));
		});
	}
}
