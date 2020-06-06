soundManager.useFlashBlock = true;
// path to directory containing SM2 SWF
soundManager.url = '/swf/soundmanager/';
soundManager.debugMode = false;

jQuery(document).ready(function(){
    DictsInfo.bindEvents();
    WordsList.bindEvents();

    $('#CardEditor').draggable();

    soundManager.onload = function(){
        if($.browser.opera)
            $('#sm2-container').css('visibility', 'hidden');
    }
})

DictsInfo =
{
    messageTimeout: 0,
    L10n: null,

	loadL10n: function(L10n)
	{
		this.L10n = L10n;
	},

    toggleInfo: function()
    {
        if($('#DictDetail').css('display') == 'none')
            $('#DictDetail').css('display','block');
        else
            $('#DictDetail').css('display','none');

        return false;
    },

    onMouseOver: function( star_id )
    {
        var num = star_id.substring(11);
        for(var i = 1; i <= 5; i++)
        {
            if(i <= num)
                $('#DictComplex' + i).removeClass('dictComplexEmpty').addClass('dictComplexFull');
        }

        $('#DictComplexName').html(this.L10n[num]);
    },

    onMouseOut: function( star_id )
    {
        var num = star_id.substring(11);
        for(var i = 1; i <= 5; i++)
        {
            if(i <= num)
                $('#DictComplex' + i).removeClass('dictComplexFull').addClass('dictComplexEmpty');
        }

        $('#DictComplexName').html(this.L10n['estimate']);
    },

    onMouseClick: function( star_id )
    {
        var num = star_id.substring(11);
        var dict_id = $('#DictID').attr('value');

        if(dict_id == undefined || dict_id == null)
        {
            return false;
        }

        AjaxRequest.query(
		{
            'folder' : 'dicts',
            'file' : 'SetDictComplexity',
            'dict_id' : dict_id,
            'cmplx' : num
		},
		function(result, errors)
		{
			if(result['data'] != undefined && result['data'] != null && result['data'] != '0')
            {
                $('.dictStart').unbind('mouseover').unbind('mouseout').unbind('click');
                $('#CurDictComplex').html('<img src="' + PICS_PATH + '/content/common/rating/brate' + result['data'] + '.gif" />');
            }
		})
    },

    bindEvents: function()
    {
        $('.dictStart').bind('mouseover', function(e){
            DictsInfo.onMouseOver(this.id);
        }).bind('mouseout', function(e){
            DictsInfo.onMouseOut(this.id);
        }).bind('click', function(e){
            DictsInfo.onMouseClick(this.id);
        });

        $('#DictName a').bind('click', function(e){
            return DictsInfo.toggleInfo();
        })
    },

    voteForDict: function(dict_id, decision)
    {
        AjaxRequest.query(
        {
            'folder' : 'dicts',
            'file' : 'VoteForDict',
            'dict_id' : dict_id,
            'decision' : decision
        },
        function(result, errors)
        {
            var rater = ge('disc_rating_' + dict_id);
            var rate = new Number(rater.innerHTML);

            if(result['data'] == undefined || result['data'] == null)
            {
                return false;
            }

            if(result['data']['error'] != undefined && result['data']['error'] != null)
            {
                DictsInfo.displayMessage('disc_thumbs_up_' + dict_id, result['data']['error']);
                return false;
            }

            var new_rate;

            if(result['data']['ok'] == 1)
            {
                new_rate = rate + 1;
            }
            else if(result['data']['ok'] == -1)
            {
                new_rate = rate - 1;
            }
            else
            {
                return false;
            }

            if(new_rate > 0)
            {
                rater.innerHTML = '+' + new_rate;
            }
            else if(new_rate <= 0)
            {
                rater.innerHTML = new_rate;
            }

            if(decision > 0)
            {
                ge('disc_thumbs_up_' + dict_id).innerHTML = '<div class="vote_up_a"></div>';
                ge('disc_thumbs_down_' + dict_id).innerHTML = '<div class="vote_down_d"></div>';
            }
            else
            {
                ge('disc_thumbs_up_' + dict_id).innerHTML = '<div class="vote_up_d"></div>';
                ge('disc_thumbs_down_' + dict_id).innerHTML = '<div class="vote_down_a"></div>';
            }
        });

        return false;
    },

    addDictToMe: function( dictID )
    {
        var decision = $('#AddDict' + dictID).hasClass('addToMe') ? 'add' : 'rem';

        if( decision == 'add' )
            $('#AddDict' + dictID).attr('class', 'remFromMe').blur()
        else
            $('#AddDict' + dictID).attr('class', 'addToMe').blur();

        AjaxRequest.query(
        {
            'folder' : 'dicts',
            'file' : 'AddDictToUser',
            'dict_id' : dictID,
            'decision' : decision
        },
        function(result, errors)
        {
            $('#AddDict' + dictID).attr('title', result['data']['title']);
        });

        return false;
    },

    changeFavorite: function(dict_id)
    {
        var favControl = $('#f_c_' + dict_id);
        var decision = null;

        if(favControl.hasClass('empty'))
        {
            decision = 1;
            favControl.attr('class', 'full');
        }
        else
        {
            decision = -1;
            favControl.attr('class', 'empty');
        }

        AjaxRequest.query(
        {
            'folder' : 'dicts',
            'file' : 'ChangeDictFavorite',
            'dict_id' : dict_id,
            'decision' : decision
        },
        function(result, errors)
        {
            favControl.attr('title', result['data']['name']);
        });

        return false;
    },

    displayMessage: function(locatorID, message)
    {
        var isDisplayed = ($('#DictMessenger').css('display') == 'block');

        if(isDisplayed)
        {
            if(this.messageTimeout != null && this.messageTimeout != undefined)
            {
                clearTimeout(this.messageTimeout);
            }
        }

        var locator = ge(locatorID);
        if(locator == undefined || locator == null)
        {
            return false;
        }

        var posX = findPosX(locator);
        var posY = findPosY(locator);

        $('#DictMessenger').css({left:posX + "px", top:posY-25+"px", display:"block"});
        $('#DictMessenger').html(message);
        this.messageTimeout = setTimeout('DictsInfo.hideMessage()', 2000);

        return false;
    },

    hideMessage: function()
    {
        $('#DictMessenger').css('display', 'none');
    }
}

WordsList =
{
    dictID: null,
    srcLang: null,
    destLang: null,
    isAuthor: false,
	isAutoTrans: false,
	isPhraseEditable: true,
    isPhoneticsShown: false,
    isPhoneticsEditable: false,
    isLoggedIn: false,
    isDataLoading: false,
    isPremium: false,
    L10n: null,
    pageNum: 1,
    cellWidths: {'h_word': 0, 'h_phon': 0, 'h_trans': 0, 'd_word': 0, 'd_phon': 0, 'd_trans': 0},

	loadL10n: function(L10n)
	{
		this.L10n = L10n;
	},

    loadVars: function(dictID, isLoggedIn, isAuthor, isAutoTrans, isPhoneticsShown, srcLang,
        destLang, isPhraseEditable, isPhoneticsEditable, isPremium)
    {
        this.dictID = dictID;
        this.isLoggedIn = isLoggedIn;
        this.isAuthor = isAuthor;
		this.isAutoTrans = isAutoTrans;
		this.isPhraseEditable = isPhraseEditable;
        this.isPhoneticsShown = isPhoneticsShown;
        this.isPhoneticsEditable = isPhoneticsEditable;
        this.srcLang = srcLang;
        this.destLang = destLang;
        this.isPremium = (isPremium == '1');
    },

    clearWords: function()
    {
        $('.wrow, .wrow1').remove();
        this.removeMoreButtons();
    },

    reloadWords: function()
    {
        this.pageNum = 1;
        $('#EmptyRow').remove();
        this.clearWords();
        this.loadWords();
    },

    loadWords: function()
    {
        if( this.isLoading() )
        {
            return;
        }

        this.isDataLoading = true;

        this.hideCellEditor();
        this.hideCommonError();
        this.hideCommonMessage();
        this.hideStatusesList();

        var params = new Array();
        params['class'] = "dicts/DictWords";
        params['template'] = "dicts/DictWords.tpl";
        params['dictID'] = this.dictID;
        params['pageNum'] = this.pageNum;

        var compObj = new RsComponent(params);

        if(this.pageNum == 1)
            this.passivateSelectionControls();

        var handler =
        {
            handle: function()
            {
                setTimeout('WordsList.releaseScroll()', 200);
                WordsList.removeMoreButtons();
            },

            postHandle: function()
            {
                WordsList.adjustCellsWidth();
                WordsList.adjustAllCellsHeight();

                if(WordsList.pageNum == 1)
                    $('#FirstRowLoad').remove();
            }
        }

        if(this.pageNum == 1)
            compObj.appendDataToTable('WordsTable', 'FirstCellLoad', handler);
        else
            compObj.appendDataToTable('WordsTable', 'ShowMoreLink', handler);
    },

    loadNextWords: function()
    {
        if($('.NoMoreDicts').val() == 1)
        {
            this.removeMoreButtons();
            return false;
        }

        this.pageNum++;
        this.loadWords();
        return false;
    },

    releaseScroll: function()
    {
        this.isDataLoading = false;
    },

    removeMoreButtons: function()
    {
        $('.more').remove();
    },

    passivateSelectionControls: function()
    {
        $('#WordDel,#WordChangeStats,#WordReset,#WordMove,#WordMoveMore').removeClass('blueButton').addClass('greyButton');
    },

    activateSelectionControls: function()
    {
        $('#WordDel,#WordChangeStats,#WordReset,#WordMove,#WordMoveMore').removeClass('greyButton').addClass('blueButton');
    },

    getTranslation: function( phraseID )
    {
        return $('#Tran' + phraseID).html();
    },

    saveCellEditorContent: function()
    {
        if($('#CellEditor').css('display') == 'none')
        {
            return;
        }

        var cellID = this.getCurrentCellID();
        var val = $('#CellEditor').val();
        val = this.encodeHTML(val);
        var phrase_id = this.getPhraseIDbyVal(cellID);

        if(this.isTranslationEdited())
        {
            this.setCellValue(val, cellID);
            if(this.updateTranslation(phrase_id, val) == false)
            {
                this.restoreRowData();
            }
        }
        else if(this.isPhonetixEdited())
        {
            if(val != null && trim(val) != '')
            {
                val = val.replace('[','').replace(']','');
                val = '[ ' + trim(val) + ' ]';
            }

            this.setCellValue(val, cellID);
            if(this.updatePhonetix(phrase_id, val) == false)
            {
                this.restoreRowData();
            }
        }
        else if(this.isWordEdited())
        {
            this.setCellValue(val, cellID);
            if(this.translateToCell(phrase_id, val) == false)
            {
                this.restoreRowData();
            }
        }
        else
        {
            this.hideCellEditor();
        }
    },

    setCellValue: function(val, cellID)
    {
        var oldHeight = parseInt($('#' + cellID).height(),10);
        this.resetCellsHeight(cellID);
        $('#' + cellID).html(val == null || val == '' ? '&nbsp;' : val);

        this.hideCellEditor();
        this.adjustCellsHeight(oldHeight, cellID);
    },

    setActiveCellValue: function(val, cellID)
    {
        var oldHeight = $('#' + cellID).height();
        this.resetCellsHeight(cellID);
        $('#' + cellID).html(val == null || val == '' ? '&nbsp;' : val);

        if(this.isWordEdited())
            this.highlightTranslation('transparent');
        this.adjustCellsHeight(oldHeight, cellID);
    },

    onClickMassStatus: function()
    {
        if(this.getSelected().length == 0)
            return false;
        
        if(this.isMassStatusShown())
            this.hideMassStatus()
        else
            this.showMassStatus();
        
        return false;
    },

    showMassStatus: function()
    {
        $('#MassStatusEditor').show();
    },

    isMassStatusShown: function()
    {
        return $('#MassStatusEditor').css('display') == 'block';
    },

    hideMassStatus: function()
    {
        $('#MassStatusEditor').hide();
    },

    playSound: function( wordID, soundURL )
    {
        if( soundURL == null || soundURL == '' )
            return;

        var sound = soundManager.getSoundById( 'Snd' + wordID );

        if( sound == null )
        {
            if( !soundManager.canPlayURL( soundURL ) )
                return;

            sound = soundManager.createSound({
                id: 'Snd' + wordID,
                url: soundURL
            });

            if( sound == null )
            {
                return;
            }
        }

		sound.play();
    },

    showCardEditor: function()
    {
        this.hideError();
        WordsList.hideAllLists();
        
        var coos = $('#WordNew').offset();
        var cardX = coos.left + 150;
        var cardY = coos.top + 5;
        var cellH = $('#WordNew').height() + 7;

        if( WordsList.trans.enabled )
            $('#EditorAutoTrans').attr('checked', true)
        else
            $('#EditorAutoTrans').attr('checked', false);
        $('#CardEditorNewWord,#CardEditorTranslation').removeAttr('disabled');
        $('#CardEditor').css({left:cardX + "px", top:cardY + cellH + "px", display:"block"});
        $('#CardEditorNewWord').focus();

        return false;
    },
    
    hideCellEditor: function()
    {
        if(this.isWordEdited())
            this.highlightTranslation('transparent');
        
        $('#CellEditor').val('');
        $('#CellEditor').css('display', 'none');
    },

    restoreRowData: function()
    {
        this.restoreRowData2(this.getPhraseID(), $('#CurrentWord').attr('value'),
            $('#CurrentPhon').attr('value'), $('#CurrentTran').attr('value'));
    },

    restoreRowData2: function(phrase_id, phrase, phon, trans)
    {
        $('#Word' + phrase_id).html(phrase);
        $('#Phon' + phrase_id).html(phon);
        $('#Tran' + phrase_id).html(trans);
    },

    storeRowData: function()
    {
        var word = $('#Word' + this.getPhraseID()).html();
        var phon = $('#Phon' + this.getPhraseID()).html();
        var tran = $('#Tran' + this.getPhraseID()).html();
        var snd = $('#Sound' + this.getPhraseID()).html();

        $('#CurrentWord').val(word);
        $('#CurrentPhon').val(phon);
        $('#CurrentTran').val(tran);
        $('#CurrentSound').val(snd);
    },

    onKeyUpCellEditorEvent: function(event)
    {
        if(event.keyCode == 27)
        {
            if(this.isWordEdited())
            {
                this.restoreRowData();
            }
            
            return this.hideCellEditor();
        }

        if(event.keyCode == 13)
        {
            return this.saveCellEditorContent();
        }

        if(this.isWordEdited())
        {
            return false;
        }
    },

    onKeyDownCellEditorEvent: function(event)
    {
        if(event.keyCode == 27 || event.keyCode == 13)
        {
            return false;
        }

        this.resizeCellEditor();
    },

    onKeyUpCardEditorWordEvent: function(event)
    {
        if(event.keyCode == 27)
        {
            return this.hideCardEditor();
        }
        else if(event.keyCode == 13)
        {
            if(this.isEmpty($('#CardEditorTranslation').val()))
            {
                $('#CardEditorTranslation').focus();
                return false;
            }

            return this.saveCard('WordsTable');
        }
		else if( WordsList.trans.enabled )
		{
			return WordsList.trans.triggerShowTrans();
		}
    },

    tts:
    {
        generateSounds: function()
        {
            if( WordsList.isLoading() )
                return;

            WordsList.tts.showLoader();

            AjaxRequest.query(
                {
                    'folder': 'dicts',
                    'file': 'GenerateSounds',
                    'dict_id': WordsList.dictID
                },
                function(result, errors)
                {
                    WordsList.tts.hideLoader();

                    if(WordsList.isEmpty(result) || WordsList.isEmpty(result['data']))
                    {
                        WordsList.showError(result['data']['error']);
                        return;
                    }

                    if(!WordsList.isEmpty(result['data']['error']))
                    {
                        WordsList.showError(result['data']['error']);
                        return;
                    }

                    if(!WordsList.isEmpty(result['data']['sounds']))
                    {
                        WordsList.tts.setSounds(result['data']['sounds']);
                    }

                    if(!WordsList.isEmpty(result['data']['message']))
                    {
                        WordsList.showMessage(result['data']['message'], 4000);
                    }
                });
        },

        setSounds: function(sounds)
        {
            for(var phrase_id in sounds)
            {
                if($('#Sound' + phrase_id).length == 0)
                {
                    continue;
                }

                $('#Sound' + phrase_id).removeClass('sndoff', 'sndon').addClass('sndon');
                $('#Sound' + phrase_id).attr('onclick', "WordsList.playSound(" + phrase_id + ", '" + sounds[phrase_id] + "')");
            }
        },

        showLoader: function()
        {
            $('#WordTTS').attr('disabled', 'disabled').removeClass('greyButton', 'blueButton').addClass('greyButton');
            WordsList.showLoader();
            WordsList.showCommonLoader();
        },

        hideLoader: function()
        {
            $('#WordTTS').removeAttr('disabled').removeClass('greyButton', 'blueButton').addClass('blueButton');
            WordsList.hideLoader();
            WordsList.hideCommonLoader();
        },

        bindEvents: function()
        {
            $('#WordTTS').click(function(){
                if(confirm('Generate sounds for this dictionary?')) {
                    WordsList.tts.generateSounds();
                }

                return false;
            });
        }
    },
	
	trans:
	{
		transTime: 800,
		minWordLength: 1,
		transSep: ';',
		curWord: null,
		enabled: true,
	
		triggerShowTrans: function()
		{
			if( WordsList.isLoading() || !WordsList.isAutoTrans)
			{
				return true;
			}
			
			var word = this.getWord();
			
			if( word.length < this.minWordLength )
			{
				WordsList.trans.hideTrans();
				return true;
			}
			
			setTimeout( "WordsList.trans.showTransTimedOut('" + word + "')", this.transTime );
			return true;
		},
		
		showTransTimedOut: function( timedOutWord )
		{
			var curWord = this.getWord();
			
			if( curWord != timedOutWord )
			{
				// word was changed too quick
				return;
			}
			
			this.showTransList(curWord);
		},
		
		showTransList: function( word )
		{
			if( WordsList.isLoading() || word == this.curWord )
				return;
			
			this.curWord = word;
			this.showLoad();
			
			AjaxRequest.query(
            {
                'folder': 'dicts/video',
                'file': 'TranslateWord',
                'word': word,
				'learnLang': WordsList.srcLang,
				'transLang': WordsList.destLang
            },
            function(result, errors)
            {
                WordsList.trans.hideLoad();
				
				if(WordsList.isEmpty(result) || WordsList.isEmpty(result['data']))
                {
					WordsList.trans.hideTrans();
                    return;
                }

                if(!WordsList.isEmpty(result['data']['error']))
                {
					WordsList.trans.hideTrans();
                    return;
                }
				
				WordsList.trans.displayTrans(result['data']['trans'])
            });
		},
		
		displayTrans: function( transList )
		{
			WordsList.trans.hideTrans();
			
			if( WordsList.isEmpty(transList) )
			{
				WordsList.trans.hideTrans();
				return;
			}
			
			for( var i in transList )
			{
				$('#CardEditorTransList' ).append(
					jQuery('<a/>').attr('href', '#').text(transList[i])
				)
			}
			
			if( $('#CardEditorTransList a').length == 0 )
			{
				WordsList.trans.hideTrans();
				return;
			}
			
			$('#CardEditorTransList a').click(function(){
				WordsList.trans.addTrans($(this).text());
				return false;
			});
			
			$('#CardEditorTransList').show();
		},
		
		addTrans: function( trans )
		{
			trans = jQuery.trim(trans);
			
			if( WordsList.isEmpty(trans) )
				return;
			
			this.removeTrans(trans);
			
			var oldVal = jQuery.trim( $('#CardEditorTranslation').val() );
			
			if( WordsList.isEmpty(oldVal) )
				oldVal = trans
			else
				oldVal += this.transSep + ' ' + trans;
			
			$('#CardEditorTranslation').val(oldVal);
		},
		
		removeTrans: function( trans )
		{
			if( WordsList.isEmpty(trans) )
				return;
			
			var oldVal = jQuery.trim( $('#CardEditorTranslation').val() );
			oldVal = oldVal.replace(new RegExp(this.transSep + ' ' + trans, 'gi'), '');
			oldVal = oldVal.replace(new RegExp(this.transSep + trans, 'gi'), '');
			oldVal = oldVal.replace(new RegExp(', ' + trans, 'gi'), '');
			oldVal = oldVal.replace(new RegExp(',' + trans, 'gi'), '');
			
			if( oldVal.indexOf(trans + this.transSep) == 0)
				oldVal = oldVal.replace(new RegExp(trans + this.transSep, 'gi'), '');
			
			if( oldVal.indexOf(trans + ',') == 0)
				oldVal = oldVal.replace(new RegExp(trans + ',', 'gi'), '');
			
			oldVal = jQuery.trim( oldVal );
			
			if( oldVal == trans )
				oldVal = '';
			
			$('#CardEditorTranslation').val(oldVal);
		},
		
		hideTrans: function()
		{
			$('#CardEditorTransList').hide();
			$('#CardEditorTransList a').unbind('click');
			$('#CardEditorTransList a').remove();
		},
		
		isTransShown: function()
		{
			return $('#CardEditorTransList').css('display') == 'block';
		},
		
		showLoad: function()
		{
			WordsList.isDataLoading = true;
			$('#CardEditor .butt').removeClass('blueButt grayButt').addClass('grayButt');
			this.hideTrans();
		},
		
		hideLoad: function()
		{
			WordsList.isDataLoading = false;
			$('#CardEditor .butt').removeClass('blueButt grayButt').addClass('blueButt');
		},
		
		getWord: function()
		{
			return jQuery.trim( $('#CardEditorNewWord').val() );
		},
		
		onClickAutoTrans: function()
		{
			if( WordsList.isChecked('#EditorAutoTrans') )
			{
				this.enabled = true;
				this.triggerShowTrans();
			}
			else
			{
				this.enabled = false;
				this.hideTrans();
			}

			return true;
		}
	},

    clearCardEditor: function()
    {
        $('#CardEditorNewWord,#CardEditorTranslation,#CardEditorTranscription').val('');
    },

    hideCardEditor: function()
    {
        this.importer.hide();
        this.clearCardEditor();
        $('#CardEditor').css('display','none');
		this.trans.hideTrans();
        return false;
    },
	
	hideCardEditorByClick: function()
    {
        if( this.isLoading() )
			return false
		else
			return this.hideCardEditor();
    },

    isWordEdited: function()
    {
        var cellID = this.getCurrentCellID();
		
		if(this.isEmpty(cellID))
			return false;

        if(cellID.indexOf('Word') != -1)
        {
            return true;
        }

        return false;
    },

    isTranslationEdited: function()
    {
        var cellID = this.getCurrentCellID();
		
		if(this.isEmpty(cellID))
			return false;

        if(cellID.indexOf('Tran') != -1)
        {
            return true;
        }

        return false;
    },

    isPhonetixEdited: function()
    {
        var cellID = this.getCurrentCellID();
		
		if(this.isEmpty(cellID))
			return false;

        if(cellID.indexOf('Phon') != -1)
        {
            return true;
        }

        return false;
    },

    getPhraseID: function()
    {
        var cell_id = this.getCurrentCellID();
        return cell_id.substr(4);
    },

    getPhraseIDbyVal: function( val )
    {
        if( val == null || val == undefined )
            return 0;

        return val.substr(4);
    },

    resizeCellEditor: function()
    {
        var curVal = $('#CellEditor').val();
        var curPos = ge('CellEditorRuler').offsetWidth;
        var editObj = $('#CellEditor');
        var delta = 20;
        $('#CellEditorRuler').text(curVal == '' ? '&nbsp;' : curVal);

        if(curPos + delta >= editObj.width())
        {
            if($.browser.mozilla)
            {
                editObj.css('visibility', 'hidden');
                editObj.css('width', editObj.width() + delta);
                editObj.css('visibility', 'visible');
            }
            else
            {
                editObj.css('width', editObj.width() + delta);
            }

            return;
        }

        var initCellSize = $('#CurrentCellSize').attr('value');

        if(curPos + 2*delta < editObj.width() && curPos > initCellSize)
        {
            if($.browser.mozilla)
            {
                editObj.css('visibility', 'hidden');
                editObj.css('width', editObj.width() - delta);
                editObj.css('visibility', 'visible');
            }
            else
            {
                editObj.css('width', editObj.width() - delta);
            }

            return;
        }
    },

    changeStatusEvent: function( status_val_id )
    {
        var status_id = status_val_id.substr(5);
        var phrase_id = this.getPhraseID();

        this.changeCellStatus(phrase_id, status_id);
        this.hideStatusesList();
        return false;
    },

    changeMassStatusEvent: function( status_val_id )
    {
        var status_id = status_val_id.substr(5);
        var phrases_ids = this.getSelected();

        this.setMassStatus(status_id, phrases_ids, true);
        this.hideStatusesList();
        return false;
    },

    setMassStatusCells: function( status_id, phrases_ids, progr )
    {
        var newStatus = this.L10n[status_id];

        for(var i in phrases_ids)
        {
            var newProg = progr[this.dictID + '_' + phrases_ids[i]];

            if( !this.isEmpty( newProg ) )
                $('#Wrow' + phrases_ids[i] + ' .cpoint div').attr('class', 'progress' + newProg);

            if( $('#Stat' + phrases_ids[i]).html() != newStatus)
            {
                $('#Stat' + phrases_ids[i]).html(newStatus);
                $('#Stat' + phrases_ids[i]).attr('class', 'listable status' + status_id);
            }
        }
    },

    changeCellStatus: function( phrase_id, status_id )
    {
        var phrases_ids = new Array(phrase_id);
        this.setMassStatus(status_id, phrases_ids, false);
    },

    hideStatusesList: function()
    {
        $('#StatusEditorCont,#MassStatusEditor').css('display','none');
    },

    onClickStatusEvent: function( cellID )
    {
        if(!this.isLoggedIn)
            return false;

        var coos = $('#' + cellID).offset();
        var cardX = coos.left - 3;
        var cardY = coos.top;
        var cellH = $('#' + cellID).height() - 17;
        var cellVal = $('#' + cellID).html();
        this.rememberCurrentCellID(cellID);
        this.initStatusesList(cellVal);

        $('#StatusEditorCont').css({left:cardX + "px", top:(cardY + cellH) + "px", display:"block"});
        return false;
    },

    onClickCellEvent: function( cellID )
    {
        if(!this.isLoggedIn)
            return false;
        
        var coos = $('#' + cellID).offset();
        var cardX = coos.left - 2;
        var cardY = coos.top - 2;
        var cellW = $('#' + cellID).width() + 2;
        var cellH = $('#' + cellID).height() + 4;
        var cellVal = $('#' + cellID).html();
        this.rememberCurrentCellID(cellID);
        $('#CurrentCellSize').attr('value', cellW);
        this.storeRowData();

        if(cellVal == '&nbsp;')
        {
            cellVal = '';
        }
        
        cellVal = this.decodeHTML(cellVal);

        if(this.isPhonetixEdited())
        {
            $('#CellEditor').addClass('phn');
        }
        else
        {
            $('#CellEditor').removeClass('phn');
        }
        $('#CellEditor').val(cellVal);
        $('#CellEditor').css({left:cardX + "px", top:cardY + "px", width:cellW + "px", height:cellH + "px", display:"block"});
        $('#CellEditor').focus();
        this.moveCursorToEnd('CellEditor');

        return false;
    },

    isChecked: function( optID )
    {
        return $(optID).is(':checked') === true || $(optID).attr('checked') === true;
    },

    rememberCurrentCellID: function( cell_id )
    {
        $('#CurrentCellID').attr('value', cell_id);
    },

    getCurrentCellID: function()
    {
        return $('#CurrentCellID').attr('value');
    },

    highlightTranslation: function(color)
    {
        $('#Tran' + this.getPhraseID()).css({backgroundColor:color, borderColor:color});
    },

    onClickCheck: function( cellID )
    {
        if(this.isChecked('#' + cellID))
            this.activateSelectionControls()
        else if(this.getSelected().length == 0)
            this.passivateSelectionControls();

        if($('#' + cellID).attr('checked'))
        {
            $('#Wrow' + this.getPhraseIDbyVal(cellID)).addClass('wrows');
        }
        else
        {
            $('#Wrow' + this.getPhraseIDbyVal(cellID)).removeClass('wrows');
        }
    },

    onClickAllCheckboxEvent: function()
    {
        if(this.isChecked('#CheckAllWords'))
        {
            this.activateSelectionControls();
            
            $('.checkable').attr('checked', true);
            $('.wrow, .wrow1').addClass('wrows');
        }
        else
        {
            this.passivateSelectionControls();
            $('.checkable').attr('checked', false);
            $('.wrow, .wrow1').removeClass('wrows');
        }
    },

    onMouseOverCellEvent: function( cell_id )
    {
        if(!this.isLoggedIn)
            return;
        
        $('#' + cell_id).css('border-color','#6399cc');
    },

    onMouseOutCellEvent: function( cell_id )
    {
        if(!this.isLoggedIn)
            return;
        
        $('#' + cell_id).css('border-color',$('#' + cell_id).css('background-color'));
    },

    resetCellsHeight: function( cell_id )
    {
        var cells = $('#' + cell_id).parent('td').parent('tr').children('td').
            children('.editable, .listable, .static');

        var oldW = new Array();
        cells.each(function(){
            oldW[this.id] = parseInt($(this).width(),10);
        });

        cells.removeAttr('style');
        cells.each(function(){
            $(this).css('width', oldW[this.id] + 'px');
        });
    },

    adjustCellsHeight: function( oldHeight, cell_id )
    {
        var newHeight = $('#' + cell_id).parent('td').height();
        newHeight -= 2 * parseInt($('#' + cell_id).css('borderTopWidth'), 10);
        newHeight -= 2* parseInt($('#' + cell_id).css('padding-top'), 10);

        var cells = $('#' + cell_id).parent('td').parent('tr').children('td').
            children('.editable, .listable, .static');

        if(Math.abs(oldHeight - newHeight) > 3)
        {
            cells.css('height', newHeight + "px");
        }
        else
        {
            cells.css('height', oldHeight + "px");
        }

        cells.filter('.editable, .listable').css('cursor', 'pointer');
    },

    adjustAllCellsHeight: function()
    {
        var ids = new Array();
        var i = 0;

        $('.listable').each(function()
        {
            ids[i++] = WordsList.getPhraseIDbyVal($(this).attr('id'));
        });

        for(var j = 0; j < ids.length; j++)
        {
            var newHeight = $('#Word' + ids[j]).parent('td').height();
            newHeight -= 2*parseInt($('#Word' + ids[j]).css('borderTopWidth'), 10);
            newHeight -= 2*parseInt($('#Word' + ids[j]).css('padding-top'), 10);

            $('#Word' + ids[j]).css('height', newHeight + "px");
            $('#Phon' + ids[j]).css('height', newHeight + "px");
            $('#Tran' + ids[j]).css('height', newHeight + "px");
            $('#Stat' + ids[j]).css('height', newHeight + "px");
        }
    },

    adjustCellsWidth: function()
    {
        if(this.isLoggedIn)
        {
            $('.editable, .listable').css('cursor', 'pointer');
        }

        // $('.word').css('width', WordsList.cellWidths.d_word + 'px');
        // $('.trans').css('width', WordsList.cellWidths.d_trans + 'px');
        // $('.phn').css('width', WordsList.cellWidths.d_phon + 'px');

        $('#WordsTableHead .hword').css('width', WordsList.cellWidths.h_word + 'px');
        $('#WordsTableHead .htrans').css('width', WordsList.cellWidths.h_trans + 'px');
        $('#WordsTableHead .hphn').css('width', WordsList.cellWidths.h_phon + 'px');
    },

    translateToCell: function(phrase_id, phrase)
    {        
        var oldPhrase = $('#CurrentWord').val();

        if(oldPhrase == phrase)
        {
            return false;
        }

        var trans = this.getTranslation(phrase_id);
        return WordsList.updatePhrase(phrase_id, phrase, trans);
    },

    moveCursorToEnd: function( textarea_id )
    {
        var editObj = ge(textarea_id);
        var selStart = editObj.value.length;

        if(editObj.setSelectionRange)
        {
            editObj.focus();
            editObj.setSelectionRange(selStart, selStart);
            return false;

        }
        else if(editObj.createTextRange)
        {
            var range = editObj.createTextRange();
            range.collapse(true);
            range.moveEnd('character', selStart);
            range.moveStart('character', selStart);
            range.select();
        }

        return false;
    },

    initStatusesList: function(current_status)
    {
        var current_stat_id = 1;
        var stat_ids = new Array(1, 3, 4);

        for(var i in this.L10n)
        {
            if(current_status == this.L10n[i])
            {
                current_stat_id = i;
                break;
            }
        }

        stat_ids = new Array(1, 3, 4);

        $('#StatusEditor a').css('display', 'none');
        $('#StatusEditor a').removeAttr('class');
        $('#Sedit' + current_stat_id).attr('class','selected');

        for(i in stat_ids)
        {
            $('#Sedit' + stat_ids[i]).css('display', 'block');
        }

        return false;
    },

    encodeHTML: function(string)
    {
        if(string == undefined || string == null || string == '')
        {
            return string;
        }

        string = string.replace(/&/g,'&amp;');
        string = string.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\'/g,'&apos;').replace(/"/g,'&quot;');

        return string;
    },

    decodeHTML: function(string)
    {
        if(string == undefined || string == null || string == '')
        {
            return string;
        }
        
        string = string.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&apos;/g,'\'').replace(/&quot;/g,'"').replace(/&nbsp;/g,' ');
        string = trim(string.replace(/&amp;/g,'&'));
        return string;
    },

    saveCard: function(targetID)
    {
        if(this.isLoading())
            return false;

        if(this.isLoggedIn == false)
        {
            this.showCommonError(this.L10n['login']);
            return false;
        }

        var dict_id = this.dictID;
        var phrase = $('#CardEditorNewWord').attr('value');
        var transl = $('#CardEditorTranslation').val();
        var transcr = null;
        var phrase_id = this.getPhraseIdByPhrase(phrase);

        if(this.isPhoneticsEditable)
            transcr = $('#CardEditorTranscription').val();

        if(dict_id == undefined || dict_id == null || dict_id == '')
        {
            return false;
        }

        if(transl == null || transl == '' || trim(transl) == '')
            return false;

        if(transcr == '' || transcr == undefined)
        {
            transcr = null;
        }

        this.showLoader();

        AjaxRequest.query(
		{
		'folder' : 'dicts',
		'file' : 'AddNewWord',
		'dict_id' : dict_id,
        'learnLang': this.srcLang,
        'phrase' : phrase,
		'transl' : transl,
        'transcr' : transcr
		},
		function(result, errors)
		{
            if(result['data'] == undefined || result['data'] == null)
            {
                WordsList.hideLoader();
                return false;
            }

            var message = result['data']['error'];
			if(message != undefined && message != null && message != '')
            {
                WordsList.showError(message);
                WordsList.hideLoader();
                return false;
            }
            else
            {
                $('#EmptyRow').remove();

                if(phrase_id != null)
                {
                    $('#Tran' + phrase_id).html(result['data']['transl']);
                    WordsList.flashRow(phrase_id);
                }
                else
                {
                    $('#WordsTableCont').scrollTop(0);
                    var newPhraseID = result['data']['phrase_id'];
                    var newSound = result['data']['sound'];
                    var newPhrase = result['data']['phrase'];
                    var newTransl = result['data']['transl'];

                    var cell = '<tr class="wrow' + (WordsList.isAuthor ? '0' : '1') + '" id="Wrow' + newPhraseID + '">' +
                    '<td class="check"><input class="checkable" type="checkbox" id="Chec' + newPhraseID + '" /></td>' +
                    '<td class="csound"><span id="Sound' + newPhraseID + '" ' + (  WordsList.isEmpty( newSound ) ? 'class="sndoff"' : 'class="sndon" onclick="WordsList.playSound(' + newPhraseID + ', \'' + newSound + '\')"') + '></span></td>' +
                    '<td class="cword ' +  WordsList.srcLang + '"><div class="editable word" id="Word' + newPhraseID + '">' + newPhrase + '</div></td>' +
                    (WordsList.isPhoneticsShown ?
                    '<td><div class="' + ( WordsList.isEmpty( result['data']['transcr'] ) ? 'editable' : 'static') + ' phn" id="Phon' + newPhraseID + '">' + result['data']['transcr'] + '</div></td>' : ''
                    ) +
                    '<td><div class="editable trans" id="Tran' + newPhraseID + '">' + newTransl + '</div></td>' +
                    '<td class="cpoint"><div class="progress0" title="0%"></div></td>' +
                    '<td class="cstat"><div class="listable stat status1" id="Stat' + newPhraseID + '">' + WordsList.L10n['1'] + '</div></td>' +
                    '</tr>';

                    $('#FirstRow').after(cell)

                    $('#Wrow' + newPhraseID + ' .checkable').attr('onclick', "return WordsList.onClickCheck('Chec" + newPhraseID + "')");
                    $('#Wrow' + newPhraseID + ' .word').attr('onclick', "return WordsList.onClickCellEvent('Word" + newPhraseID + "')")
                        .attr('onmouseover', "return WordsList.onMouseOverCellEvent('Word" + newPhraseID + "')")
                        .attr('onmouseout', "return WordsList.onMouseOutCellEvent('Word" + newPhraseID + "')");

                    $('#Wrow' + newPhraseID + ' .trans').attr('onclick', "return WordsList.onClickCellEvent('Tran" + newPhraseID + "')")
                        .attr('onmouseover', "return WordsList.onMouseOverCellEvent('Tran" + newPhraseID + "')")
                        .attr('onmouseout', "return WordsList.onMouseOutCellEvent('Tran" + newPhraseID + "')");

                    $('#Wrow' + newPhraseID + ' .listable').attr('onclick', "return WordsList.onClickStatusEvent('Stat" + newPhraseID + "')")
                        .attr('onmouseover', "return WordsList.onMouseOverCellEvent('Stat" + newPhraseID + "')")
                        .attr('onmouseout', "return WordsList.onMouseOutCellEvent('Stat" + newPhraseID + "')");

                    if(WordsList.isPhoneticsShown && WordsList.isEmpty( result['data']['transcr'] ))
                    {
                        $('#Wrow' + newPhraseID + ' .phn').attr('onclick', "return WordsList.onClickCellEvent('Phon" + newPhraseID + "')")
                            .attr('onmouseover', "return WordsList.onMouseOverCellEvent('Phon" + newPhraseID + "')")
                            .attr('onmouseout', "return WordsList.onMouseOutCellEvent('Phon" + newPhraseID + "')");
                    }

                    var cellID = 'Word' + newPhraseID;
                    var oldHeight = $('#' + cellID).height();
                    WordsList.flashRow(newPhraseID);
                    WordsList.resetCellsHeight(cellID);
                    WordsList.adjustCellsWidth();
                    WordsList.adjustCellsHeight(oldHeight, cellID);
                }

                WordsList.clearCardEditor();
                WordsList.hideLoader();
            }
		});

        return false;
    },

    deleteCards: function()
    {
        if(this.isLoading())
            return false;

        if(this.isLoggedIn == false)
        {
            this.showCommonError(this.L10n['login']);
            return false;
        }

        var phrasesIDs = this.getSelected();

        if(phrasesIDs.length == 0)
        {
            return false;
        }

        if(!confirm(this.L10n['delete']))
            return false;

        this.showCommonLoader();

        AjaxRequest.query(
		{
		'folder' : 'dicts',
		'file' : 'DeleteMultiWords',
		'dict_id' : this.dictID,
        'phrases_ids' : phrasesIDs
		},
		function(result, errors)
		{
            if(result['data'] == undefined || result['data'] == null)
            {
                WordsList.hideCommonLoader();
                return;
            }

            var message = result['data']['error'];
            var delIDs = result['data']['dels'];
            $('#CheckAllWords').attr('checked', false);
            WordsList.hideCommonLoader();

			if(message != undefined && message != null && message != '')
            {
                WordsList.showCommonError(message);
            }

            if(delIDs != undefined && delIDs != null)
            {
                WordsList.removeRows( delIDs );
            }
		});

        return false;
    },

    setMassStatus: function( status_id, phrases_ids, showLoader )
    {
        if(this.isLoading())
            return false;

        if(this.isLoggedIn == false)
        {
            this.showCommonError(this.L10n['login']);
            return false;
        }

        var dict_id = this.dictID;

        if(dict_id == null || phrases_ids == null || phrases_ids.length == 0)
        {
            return false;
        }

        if( showLoader )
            this.showCommonLoader();

        AjaxRequest.query(
		{
		'folder' : 'dicts',
		'file' : 'ChangeMultiStatus',
		'dict_id' : dict_id,
        'phrases_ids' : phrases_ids,
        'status_id' : status_id
		},
		function(result, errors)
		{
            if(result['data'] == undefined || result['data'] == null)
            {
                WordsList.restoreRowData();
                WordsList.hideCommonLoader();
                return false;
            }

            var message = result['data']['error'];
            var progr = result['data']['progr'];
            WordsList.hideCommonLoader();

			if(!WordsList.isEmpty(message))
            {
                WordsList.showCommonError(message);
                return false;
            }
            else
            {
                WordsList.setMassStatusCells( status_id, phrases_ids, progr );
                return true;
            }
		});

        return true;
    },

    resetCards: function()
    {
        if(this.isLoading())
            return;

        if(this.isLoggedIn == false)
        {
            this.showCommonError(this.L10n['login']);
            return;
        }

        var dict_id = this.dictID;
        var phrases_ids = this.getSelected();

        if(dict_id == null || phrases_ids == null || phrases_ids.length == 0)
        {
            return;
        }

        if(!confirm(this.L10n['reset']))
            return;

        this.showCommonLoader();

        AjaxRequest.query(
		{
		'folder' : 'dicts',
		'file' : 'ResetCardsProgress',
		'dict_id' : dict_id,
        'phrases_ids' : phrases_ids
		},
		function(result, errors)
		{
            WordsList.hideCommonLoader();

            if(WordsList.isEmpty(result) || WordsList.isEmpty(result['data']))
            {
                WordsList.showCommonError('System error.');
                return;
            }

            if(!WordsList.isEmpty(result['data']['error']))
            {
                WordsList.showCommonError(result['data']['error']);
                return;
            }

            for(var i in phrases_ids)
            {
                $('#Wrow' + phrases_ids[i] + ' .cpoint div').removeAttr('class').addClass('progress0').attr('title', '0%');
                $('#Wrow' + phrases_ids[i] + ' .cstat div').removeAttr('class').addClass('listable').addClass('stat').addClass('status1').html(WordsList.L10n['1']);
            }
		});
    },

    updateTranslation: function(phrase_id, transl)
    {
        var dict_id = this.dictID;

        if(transl == null || trim(transl) == '')
        {
            return false;
        }

        var oldTransl = $('#CurrentTran').val();

        transl = this.decodeHTML(transl);
        oldTransl = this.decodeHTML(oldTransl);

        if(oldTransl == transl)
        {
            return false
        }

        AjaxRequest.query(
		{
		'folder' : 'dicts',
		'file' : 'UpdateTranslation',
		'dict_id' : dict_id,
        'phrase_id' : phrase_id,
        'transl' : transl
		},
		function(result, errors)
		{
            if(result['data'] == undefined || result['data'] == null)
            {
                WordsList.restoreRowData();
                return false;
            }

            var message = result['data']['error'];

			if(message != undefined && message != null && message != '')
            {
                WordsList.restoreRowData();
                WordsList.showCommonError(message);
                return false;
            }
            else
            {
                if(transl != result['data']['newtrans'])
                {
                    WordsList.setCellValue(result['data']['newtrans'], 'Tran' + phrase_id);
                }

                return true;
            }
		});

        return true;
    },

    updatePhonetix: function(phrase_id, phonetix)
    {
        var dict_id = this.dictID;

        if(phonetix == null || trim(phonetix) == '')
        {
            return false;
        }

        var oldPhon = $('#CurrentPhon').val();

        phonetix = this.decodeHTML(phonetix);
        oldPhon = this.decodeHTML(oldPhon);

        if(oldPhon == phonetix)
        {
            return false;
        }

        AjaxRequest.query(
		{
		'folder' : 'dicts',
		'file' : 'UpdatePhonetix',
		'dict_id' : dict_id,
        'phrase_id' : phrase_id,
        'phonetix' : phonetix
		},
		function(result, errors)
		{
            if(result['data'] == undefined || result['data'] == null)
            {
                WordsList.restoreRowData();
                return false;
            }

            var message = result['data']['error'];

			if(message != undefined && message != null && message != '')
            {
                WordsList.restoreRowData();
                WordsList.showCommonError(message);
                return false;
            }
            else
            {
                WordsList.setPhonetixCellValue(phonetix, result['data']['newphon'], phrase_id);
                return true;
            }
		});

        return true;
    },

    updatePhrase: function(phrase_id, phrase, transl)
    {
        var dict_id = this.dictID;

        if(phrase == null || trim(phrase) == '')
        {
            return false;
        }

        var oldPhrase = $('#CurrentWord').val();
        var oldTrans = $('#CurrentTran').val();
        var oldPhon = $('#CurrentPhon').val();
        var phon = $('#Phon' + phrase_id).html();
        var status = $('#Stat' + phrase_id).html();
        var status_id = this.getStatusIdByStatus(status);

        phrase = this.decodeHTML(phrase);
        oldPhrase = this.decodeHTML(oldPhrase);
        transl = this.decodeHTML(transl);

        if(oldPhrase == phrase || status_id == null || transl == null)
        {
            return false;
        }

        AjaxRequest.query(
		{
		'folder' : 'dicts',
		'file' : 'UpdatePhrase',
		'dict_id' : dict_id,
        'phrase_id' : phrase_id,
        'transl': transl,
        'status_id' : status_id,
        'phrase' : phrase
		},
		function(result, errors)
		{
            oldPhrase = WordsList.encodeHTML(oldPhrase);

            if(result['data'] == undefined || result['data'] == null)
            {
                WordsList.restoreRowData2(phrase_id, oldPhrase, oldPhon, oldTrans);
                return false;
            }

            var message = result['data']['error'];

			if(message != undefined && message != null && message != '')
            {
                WordsList.restoreRowData2(phrase_id, oldPhrase, oldPhon, oldTrans);
                WordsList.showCommonError(message);
                return false;
            }
            else
            {
                var newID = result['data']['newphraseid'];
                var newPhrase = result['data']['newphrase'];
                var newPhon = result['data']['newphon'];
                var newTran = result['data']['newtransl'];
                var newSound = result['data']['newsound'];

                if(newID = phrase_id)
                {
                    //WordsList.setPhraseCellValue(newPhrase, newID);
                }
                else
                {
                    $('#Wrow' + newID).remove();

                    WordsList.changeID(phrase_id, newID);

                    if (phrase != newPhrase) {
                        WordsList.setActiveCellValue(newPhrase, 'Word' + newID);
                    }

                    WordsList.setActiveCellValue(newTran, 'Tran' + newID);

                    if (newPhon != null && WordsList.isPhoneticsShown) {
                        WordsList.setPhonetixCellValue(phon, newPhon, newID);
                    }

                    WordsList.setSoundCellValue(newSound, newID);
                }

                return true;
            }
		});

        return true;
    },

    removeRows: function( phrases_ids )
    {
        for(var i in phrases_ids)
        {
            $('#Wrow' + phrases_ids[i]).remove();
        }

        return false;
    },

    setSoundCellValue: function(newSound, phrase_id)
    {
        if(newSound == '-')
            newSound = null;

    	var html = '<span id="Sound' + phrase_id + '" ' + (this.isEmpty(newSound) ? 'class="sndoff"' : 'class="sndon" onclick="WordsList.playSound(' + phrase_id + ', \'' + newSound + '\')"') + '></span>';
    	
    	$('#Wrow' + phrase_id + ' .csound').html(html);
    },

    setPhraseCellValue: function(newPhrase, phrase_id)
    {
        $('#Word' + phrase_id).html(newPhrase);
    },

    isEmpty: function( val )
    {
        return ( val == undefined || val == null || val == '' );
    },
    
    setPhonetixCellValue: function(oldValue, newValue, phrase_id)
    {
        //$('#Phon' + phrase_id).removeClass('editable').addClass('static');
        //$('#Phon' + phrase_id).removeAttr('onclick').removeAttr('onmouseout').removeAttr('onmouseover');
        //$('#Phon' + phrase_id).css('border-color', 'transparent');

        if(newValue == '-')
        {
            newValue = null;
        }

        if(oldValue != newValue)
        {
            this.setActiveCellValue(newValue, 'Phon' + phrase_id);
        }
    },

    changeID: function( oldID, newID )
    {
        $('#Word' + oldID).attr('id', 'Word' + newID);
        $('#Tran' + oldID).attr('id', 'Tran' + newID);
        $('#Stat' + oldID).attr('id', 'Stat' + newID);
        $('#Wrow' + oldID).attr('id', 'Wrow' + newID);
        $('#Chec' + oldID).attr('id', 'Chec' + newID);

        var curCelVal = this.getCurrentCellID();

        if(curCelVal != null)
            $('#CurrentCellID').val(curCelVal.replace(oldID, newID));

        if(this.isPhoneticsShown)
        {
            $('#Phon' + oldID).attr('id', 'Phon' + newID);
        }
        
        $('#Sound' + oldID).attr('id', 'Sound' + newID);

        $('#Wrow' + newID + ' span,#Wrow' + newID + ' div,#Wrow' + newID + ' input').each(function(){
            if(!WordsList.isEmpty($(this).attr('onclick')))
                $(this).attr('onclick', $(this).attr('onclick').replace(oldID, newID))

            if(!WordsList.isEmpty($(this).attr('onmouseover')))
                $(this).attr('onmouseover', $(this).attr('onmouseover').replace(oldID, newID))

            if(!WordsList.isEmpty($(this).attr('onmouseout')))
                $(this).attr('onmouseout', $(this).attr('onmouseout').replace(oldID, newID))
        })
    },

    getStatusIdByStatus: function( status )
    {
        for(var i = 1; i <= 4; i++)
        {
            if( status == this.L10n[i] )
            {
                return i;
            }
        }

        return null;
    },

    getSelected: function()
    {
        var phrasesIDs = new Array();
        var i = 0;

        $('.checkable').each(function()
        {
            if($(this).attr('checked'))
            {
                var phraseID = WordsList.getPhraseIDbyVal($(this).attr('id'));
                phrasesIDs[i++] = phraseID;
            }
        });

        return phrasesIDs;
    },

    getPhraseIdByPhrase: function( phrase )
    {
        if( phrase == null )
        {
            return null;
        }

        phrase = trim(phrase);

        var phrase_id = null;

        $('.word').each(function()
        {
            if($(this).html() != null && $(this).html().toLowerCase() == phrase.toLowerCase())
            {
                phrase_id = WordsList.getPhraseIDbyVal($(this).attr('id'));
            }
        });

        return phrase_id;
    },

    flashRow: function( phrase_id )
    {
        $('#Wrow' + phrase_id).css('background-color', 'lightyellow');
        setTimeout("WordsList.hideFlashRow('" + phrase_id + "')", 2000);

        return false;
    },

    hideFlashRow: function( phrase_id )
    {
        $('#Wrow' + phrase_id).css('background-color', '');
    },

    showMessage: function( message, time )
    {
        this.displayOutput('greenOutput', message, 'WordsTableHead');

        if(time != null)
            setTimeout('WordsList.hideMessage()', time);
    },

    hideMessage: function()
    {
        this.hideCommonError();
    },

    showCommonLoader: function()
    {
        this.displayOutput('greenOutput', '<img src="' + PICS_PATH + '/content/progress.gif" /> ' + this.L10n['load'], 'WordsTableHead');
        this.isDataLoading = true;
    },

    showLoader: function()
    {
        $('#CardEditorNewWord,#CardEditorTranslation,#CardEditorTranscription').attr('disabled', 'disabled');
		$('#CardEditor .butt').removeClass('blueButt grayButt').addClass('grayButt');
        $('#CardEditorLoader').css('visibility', 'hidden');
        this.isDataLoading = true;
    },

    hideCommonLoader: function()
    {
        this.hideCommonError();
        this.isDataLoading = false;
    },

    hideLoader: function()
    {
        $('#CardEditorNewWord,#CardEditorTranslation,#CardEditorTranscription').removeAttr('disabled');
		$('#CardEditor .butt').removeClass('blueButt grayButt').addClass('blueButt');
        $('#CardEditorLoader').css('visibility', 'hidden');
        $('#CardEditorNewWord').focus();
        this.isDataLoading = false;
    },

    isLoading: function()
    {
        return this.isDataLoading;
    },

    showCommonMessage: function(message, targetID)
    {
        this.displayOutput('greenOutput', message, targetID);
        setTimeout("WordsList.hideCommonError()", 3000);
    },

    hideCommonMessage: function()
    {
        this.hideCommonError();
    },

    showCommonError: function(error)
    {
        this.displayOutput('redOutput', error, 'WordsTableHead');
        setTimeout("WordsList.hideCommonError()", 3000);
    },

    hideCommonError: function()
    {
        $('#OutputBox').html('');
        $('#OutputBox').css("display", "none");
    },

    showError: function(message)
    {
        $('#CardEditorMessage').html(message);
        $('#CardEditorMessage').css('display', 'block');
    },

    hideError: function()
    {
        $('#CardEditorMessage').css('display', 'none');
    },

    displayOutput: function( cssClass, content, targetID )
    {
        if(targetID == null)
        {
            return;
        }

        var coos = $('#' + targetID).offset();
        var wordsX = coos.left;
        var wordsY = coos.top;
        var targetW = $('#' + targetID).width();

        $('#OutputBox').html( content );
        $('#OutputBox').removeAttr('class').addClass(cssClass);
        $('#OutputBox').css({width: targetW + "px", left:wordsX + "px",
            top:wordsY + "px", display:"block"});
    },

    getDocHeight: function()
    {
        if($.browser.opera)
            return document.documentElement.clientHeight;
        else
            return $(window).height();
    },

    getDocFullHeight: function()
    {
        if($.browser.opera)
            return window.innerHeight;
        else
            return $(document).height();
    },

    getScrollHeight: function()
    {
        return $(window).scrollTop();
    },

    onResizeWindow: function()
    {
        // var y = this.getDocFullHeight();
        // var wordsy = y - $('#WordsTableCont').offset().top - 55;

        // $('#WordsTableCont').css('height', wordsy + 'px');
        return false;
    },

    onScrollWords: function()
    {
        var pointerY = $('#WordsTableCont').scrollTop();
        var boxH = parseInt($('#WordsTableCont').css('height'),10);
        var dataH = $('#WordsTable').height();

        this.hideStatusesList();

        if(dataH <= boxH + pointerY + 50 && !this.isDataLoading)
        {
            this.loadNextWords();
        }
    },

    onKeyDown: function(e)
    {
        if( this.isEmpty( e ) )
            return false;

        if(e.keyCode == 27)
        {
            this.hideAllLists();

            return false;
        }

        return true;
    },

    hideAllLists: function()
    {
        WordsList.importer.hideAddControls();
        WordsList.importer.hide();
        WordsList.mover.hideMoveControls();
        WordsList.mover.hide();
        this.hideStatusesList();
        this.hideCardEditor();
    },
	
	log: function( text )
	{
		$('#Log').append( text + '<br/ >' );
	},
	
	logArray: function( list )
	{
		var text = '';
		
		for( var i in list )
			text += '[' + i + '] =>' + list[i] + '<br />'
		
		this.log(text);
	},

    importer:
    {
        sep1: null,
        sep2: null,
        words: null,
        trans: null,
        parseError: null,
        isParsing: false,
        previewRowNum: 1,
        maxWords: 100,

        seps:
        {
            tab: '\t',
            comma: ',',
            newline: '\n',
            semicolon: ';'
        },

        errors:
        {
            empty: 'data empty',
            format: 'format error',
            limit: 'words limit',
            noerror: 'no errors'
        },

        init: function()
        {
            this.sep1 = this.seps.tab;
            this.sep2 = this.seps.newline;

            this.showSep1(this.sep1);
            this.showSep2(this.sep2);

            this.resetPreview();
        },

        wordsCount: function()
        {
            var j = 0;

            for(var i in this.words)
                j++;

            return j;
        },

        makeImport: function()
        {
            if(this.isLoading() || this.isParsing || this.wordsCount() == 0)
                return;

            if(this.parseError == this.errors.empty)
                return;

            if(this.parseError == this.errors.format)
            {
                this.showError(WordsList.L10n['import.check.error']);
                return;
            }

            this.showLoad();

            AjaxRequest.query(
            {
                'folder': 'dicts',
                'file': 'AddWordsMulti',
                'dict_id': WordsList.dictID,
                'learnLang': WordsList.srcLang,
                'words': this.words,
                'trans': this.trans
            },
            function(result, errors)
            {
                WordsList.importer.hideLoad();

                if(WordsList.isEmpty(result) || WordsList.isEmpty(result['data']))
                {
                    WordsList.importer.hide();
                    WordsList.reloadWords();
                    WordsList.showCommonError('System error.');
                    return;
                }

                if(!WordsList.isEmpty(result['data']['error']))
                {
                    WordsList.importer.hide();
                    WordsList.reloadWords();
                    WordsList.showCommonError(result['data']['error']);
                    return;
                }

                if(!WordsList.isEmpty(result['data']['limitError']))
                {
                    WordsList.importer.showErrorStatic(result['data']['limitError']);
                    return;
                }

                WordsList.importer.hide();
                WordsList.reloadWords();
                WordsList.showMessage(result['data']['message'], 4000);
            })
        },

        parse: function()
        {
            if(this.isParsing)
            {
                return;
            }

            this.showLoadParsing();
            var data = this.getData();
            this.words = new Array();
            this.trans = new Array();

            if(WordsList.isEmpty(data))
            {
                this.hideLoadParsing();
                this.showPreview(this.errors.empty);
                return;
            }

            var pairs = data.split(this.sep2);
            var pair = null;
            var j = 0;
            var hasError = false;

            for(var i in pairs)
            {
                pair = pairs[i].split(this.sep1);

                if(pair.length == 2)
                {
                    this.words[j] = jQuery.trim(pair[0]);
                    this.trans[j] = jQuery.trim(pair[1]);
                }
                else
                {
                    hasError = true;
                    this.words[j] = jQuery.trim(pairs[i]);
                    this.trans[j] = jQuery.trim(null);
                }

                j++

                if( j >= this.maxWords + 5)
                {
                    this.addPreviewRow(null, null, false);
                    break;
                }
            }

            var error = this.errors.noerror;

            if(hasError)
                error = this.errors.format;
            else if(j > this.maxWords)
                error = this.errors.limit;

            this.showPreview(error);
            this.hideLoadParsing();
        },

        showLoadParsing: function()
        {
            this.isParsing = true;
            $('#SepWordOtherInput,#SepTransOtherInput,.sepWord,.sepTrans').attr('disabled', 'disabled');
            $('#ImportChecker').removeClass('checkError').addClass('checkOk').css('visibility','visible').text(WordsList.L10n['load']);
        },

        hideLoadParsing: function()
        {
            this.isParsing = false;
            $('#SepWordOtherInput,#SepTransOtherInput,.sepWord,.sepTrans').removeAttr('disabled');
        },

        showPreview: function( error )
        {
            this.resetPreview();
            var hasError = false;
            
            for(var i in this.words)
            {
                hasError = false;

                if(WordsList.isEmpty(this.words[i]) && WordsList.isEmpty(this.trans[i]))
                    hasError = true;
                
                this.addPreviewRow(this.words[i], this.trans[i], hasError);
            }

            this.setParsed(error);
        },

        setParsed: function( error )
        {
            if(error == this.errors.empty)
            {
                $('#ImportChecker').css('visibility','hidden');
                this.parseError = error;
                return;
            }

            $('#ImportChecker').css('visibility','visible');

            if( WordsList.isEmpty(error) || error == this.errors.noerror)
                $('#ImportChecker').removeClass('checkError').addClass('checkOk').text(WordsList.L10n['import.check.ok']);
            else
            {
                $('#ImportChecker').removeClass('checkOk').addClass('checkError');

                var mes = WordsList.L10n['import.check.error'];
                
                if(error ==  this.errors.limit)
                    mes = WordsList.L10n['import.check.limit'].replace('%s', this.maxWords);

                $('#ImportChecker').text(mes);
            }
            
            this.parseError = error;
        },

        resetPreview: function()
        {
            $('#ImportChecker').text('').css('visibility','hidden');
            $('#ImportPreview .prevdata').remove();
            this.previewRowNum = 1;
            this.addPreviewRow(null, null, false);
            this.addPreviewRow(null, null, false);
            this.addPreviewRow(null, null, false);
            this.addPreviewRow(null, null, false);
            this.addPreviewRow(null, null, false);
            this.addPreviewRow(null, null, false);
            this.previewRowNum = 1;
        },

        addPreviewRow: function( word, trans, markError )
        {
            if($('#Prev' + this.previewRowNum).length == 0)
            {
                var html = '<tr id="Prev' + this.previewRowNum + '" class="prevdata"><td><div class="prevNum">' + this.previewRowNum + '</div></td><td><div class="prevWord">...</div></td><td><div class="prevTrans">...</div></td></tr>';
                $('#ImportPreview table').append( html );
            }

            if(WordsList.isEmpty(word))
                $('#Prev' + this.previewRowNum + ' .prevWord').text('...')
            else
                $('#Prev' + this.previewRowNum + ' .prevWord').text(word);

            if(WordsList.isEmpty(trans))
            {
                $('#Prev' + this.previewRowNum + ' .prevTrans').text('...')

                if(!WordsList.isEmpty(word))
                    $('#Prev' + this.previewRowNum + ' td').addClass('error');
            }
            else
                $('#Prev' + this.previewRowNum + ' .prevTrans').text(trans);

            if(markError || this.previewRowNum > this.maxWords)
                $('#Prev' + this.previewRowNum + ' td').addClass('error');

            this.previewRowNum++;
        },

        getData: function()
        {
            return jQuery.trim($('#ImportArea').val());
        },

        clearData: function()
        {
            $('#ImportArea').val('');
            this.resetPreview();
        },

        showSep1: function( sep )
        {
            $('.sepWord').attr('checked', false);

            if(sep == this.seps.tab)
                $('#SepWordTab').attr('checked', true)
            else if(sep == this.seps.comma)
                $('#SepWordComma').attr('checked', true)
            else
            {
                $('#SepWordOther').attr('checked', true);
                $('#SepWordOtherInput').text(sep);
            }
        },

        showSep2: function( sep )
        {
            $('.sepTrans').attr('checked', false);

            if(sep == this.seps.newline)
                $('#SepTransNewLine').attr('checked', true)
            else if(sep == this.seps.semicolon)
                $('#SepTransSemicolon').attr('checked', true)
            else
            {
                $('#SepTransOther').attr('checked', true);
                $('#SepTransOtherInput').text(sep);
            }
        },

        toggleAddControls: function()
        {
            if($('#WordNewList').css('display') == 'block')
                this.hideAddControls()
            else
                this.showAddControls();
            
            return false;
        },

        showAddControls: function()
        {
            var coo = $('#WordNew').offset();

            $('#WordNewList').css({
                left: coo.left + 'px',
                display: 'block'
            });
            $('#WordNewMore').addClass('dblueButton').removeClass('blueButton');
        },

        hideAddControls: function()
        {
            $('#WordNewList').hide();
            $('#WordNewMore').addClass('blueButton').removeClass('dblueButton');
        },

        show: function()
        {
            WordsList.hideAllLists();
            this.hideError();
            
            var coos = $('#WordsTableHead').offset();

            $('#CardImporter').css({
                top: coos.top - 3 + 'px',
                left: coos.left + 'px',
                display: 'block'
            });

            return false;
        },

        hide: function()
        {
            this.clearData();
            $('#CardImporter').hide();
        },

        isLoading: function()
        {
            return $('#ImportLoader').css('visibility') == 'visible';
        },

        showLoad: function()
        {
            this.hideError();
            $('#ImportLoader').css('visibility', 'visible');
        },

        hideLoad: function()
        {
            $('#ImportLoader').css('visibility', 'hidden');
        },

        showError: function( error )
        {
            this.showErrorStatic(error);
            setTimeout('WordsList.importer.hideError()', 4000);
        },

        showErrorStatic: function( error )
        {
            $('#ImportError').html(error).show();
        },

        hideError: function()
        {
            $('#ImportError').html('').hide();
        },

        onClickSep1: function( sid )
        {
            var sep = null;

            if(sid == 'SepWordTab')
                sep = this.seps.tab
            else if(sid == 'SepWordComma')
                sep = this.seps.comma
            else
                sep = this.prepareSep('#SepWordOtherInput');

            this.sep1 = sep;
            this.parse();
        },

        onClickSep2: function( sid )
        {
            var sep = null;

            if(sid == 'SepTransNewLine')
                sep = this.seps.newline
            else if(sid == 'SepTransSemicolon')
                sep = this.seps.semicolon
            else
                sep = this.prepareSep('#SepTransOtherInput');

            this.sep2 = sep;
            this.parse();
        },

        onKeyUpImporter: function( event )
        {
            this.parse();

            return true;
        },

        prepareSep: function( sepID )
        {
            var customSep = $(sepID).val();

            if(WordsList.isEmpty(customSep))
                return '';

            customSep = customSep.replace(/\\t/g,this.seps.tab);
            customSep = customSep.replace(/\\n/g,this.seps.newline);
            return customSep;
        },

        bindEvents: function()
        {
            this.init();

            $('.sepWord').click(function(e){
                WordsList.importer.onClickSep1(this.id);
                return true;
            }),

            $('.sepTrans').click(function(e){
                WordsList.importer.onClickSep2(this.id);
                return true;
            }),

            $('#WordNewMore').click(function(e){
                $(this).blur();
                return WordsList.importer.toggleAddControls();
            }),

            $('#WordNewImport').click(function(e){
                return WordsList.importer.show();
            }),

            $('#ImportBut').click(function(e){
                WordsList.importer.makeImport();
                return false;
            }),
            
            $('#ImportClose').click(function(e){
                WordsList.importer.hide();
                return false;
            }),

            $('#WordNewCont').mouseleave(function(e){
                WordsList.importer.hideAddControls();
                return false;
            }),

            $('#ImportArea').keyup(function(e){
                return WordsList.importer.onKeyUpImporter(e);
            }),

            $('#SepWordOtherInput').keyup(function(e){
                if(WordsList.isChecked('#SepWordOther'))
                {
                    WordsList.importer.sep1 = WordsList.importer.prepareSep('#SepWordOtherInput');
                    WordsList.importer.parse();
                }

                return true;
            }),

            $('#SepTransOtherInput').keyup(function(e){
                if(WordsList.isChecked('#SepTransOther'))
                {
                    WordsList.importer.sep2 = WordsList.importer.prepareSep('#SepTransOtherInput');
                    WordsList.importer.parse();
                }

                return true;
            })
        }
    },

    mover:
    {
        dictID: null,
        dictsPageNum: 0,
        dictsLoad: false,
        previewLoad: false,
        isMove: true,
        previewRowNum: 1,
        maxWords: 50,

        setDict: function( dictID, dictName )
        {
            if(this.dictsLoad)
                return;

            $('#DictsSelectList a').removeClass('selected');

            if(WordsList.isEmpty(dictID) || WordsList.isEmpty(dictName))
            {
                this.dictID = null;
                $('#DictsSelector .dictCont').text(WordsList.L10n['move.dicts.no']);
                return;
            }

            this.dictID = dictID;
            $('#DictsSelector .dictCont').html(dictName);
            $('#FdictItem' + dictID).addClass('selected');
            this.hideDictsList();
        },

        makeCopy: function()
        {
            if(this.isLoading() || this.previewLoad)
                return;

            if(this.dictID == null)
            {
                this.showError(WordsList.L10n['move.check.nodict']);
                return;
            }

            var wordsNo = this.getWordsNumber();

            if(wordsNo == 0)
            {
                this.showError(WordsList.L10n['move.check.nowords']);
                return;
            }
            else if(wordsNo > this.maxWords)
            {
                this.showError(WordsList.L10n['move.check.limit'].replace('%s', this.maxWords));
                return;
            }

            this.showLoad();

            AjaxRequest.query(
            {
                'folder': 'dicts',
                'file': 'MoveWords',
                'fromDictID': WordsList.dictID,
                'toDictID': this.dictID,
                'wordsIDs': this.getWordsIDs(),
                'isMove': (this.isMove ? '1' : '0')
            },
            function(result, errors)
            {
                WordsList.mover.hideLoad();

                if(WordsList.isEmpty(result) || WordsList.isEmpty(result['data']))
                {
                    WordsList.showCommonError('System error.');
                    WordsList.mover.hide();
                    return;
                }

                if(!WordsList.isEmpty(result['data']['errorDict']))
                {
                    WordsList.mover.showError(result['data']['errorDict']);
                    return
                }

                WordsList.mover.hide();
                if(!WordsList.isEmpty(result['data']['error']))
                {
                    WordsList.showCommonError(result['data']['error']);
                }
                else
                {
                    $('#CheckAllWords').attr('checked', false);
                    WordsList.showMessage(result['data']['message'], 4000);
                }

                if(!WordsList.isEmpty(result['data']['dels']))
                {
                    WordsList.removeRows( result['data']['dels'] );
                }
            });
        },

        isLoading: function()
        {
            return $('#MoveLoader').css('visibility') == 'visible';
        },

        showLoad: function()
        {
            this.hideError();
            $('#MoveLoader').css('visibility', 'visible');
        },

        hideLoad: function()
        {
            $('#MoveLoader').css('visibility', 'hidden');
        },

        showError: function( error )
        {
            this.showErrorStatic(error, false);
            setTimeout('WordsList.mover.hideError()', 5000);
        },

        showErrorStatic: function( error, isSlide )
        {
            $('#MoveError').html(error);

            if(!isSlide)
                $('#MoveError').show();
            else
                $('#MoveError').slideDown(300);
        },

        showPremiumLimitError: function()
        {
            this.showErrorStatic($('#CardsOperationsLimit').html(), true);
        },

        hideError: function()
        {
            $('#MoveError').html('').hide();
        },

        show: function()
        {
            WordsList.hideAllLists();
            this.hideError();

            var coos = $('#WordsTableHead').offset();

            $('#CardMover').css({
                top: coos.top - 3 + 'px',
                left: coos.left + 'px',
                display: 'block'
            });

            this.initPreview();

            if(!WordsList.isPremium)
            {
                this.passivate();
                setTimeout('WordsList.mover.showPremiumLimitError()', 400);
            }

            return false;
        },

        passivate: function()
        {
            $('#DictsSelector').addClass('greyDropList').removeClass('greenDropList');
            $('#MoveBut,#CopyBut').addClass('greyButton').removeClass('blueButton');
        },

        initPreview: function()
        {
            this.previewLoad = true;
            this.resetPreview();
            var wordsIDs = WordsList.getSelected();

            if(wordsIDs.length == 0)
            {
                $('#MoveChecker').removeClass('checkOk').addClass('checkError').text(WordsList.L10n['move.check.nowords']).css('visibility','visible');
                this.previewLoad = false;
                return;
            }

            $('#MoveChecker').text('').css('visibility','hidden');

            for(var i in wordsIDs)
            {
                this.addPreviewRow(wordsIDs[i], $('#Word' + wordsIDs[i]).text(), $('#Tran' + wordsIDs[i]).text(), false);
            }

            if(wordsIDs.length > this.maxWords)
            {
                $('#MoveChecker').removeClass('checkOk').addClass('checkError').text(WordsList.L10n['move.check.limit'].replace('%s', this.maxWords)).css('visibility','visible');
            }

            this.previewLoad = false;
        },

        initMove: function()
        {
            this.isMove = true;
            $('#MoveBut').show();
            $('#CopyBut').hide();
        },

        initCopy: function()
        {
            this.isMove = false;
            $('#CopyBut').show();
            $('#MoveBut').hide();
        },

        hide: function()
        {
            this.resetMove();
            $('#CardMover').hide();
            this.hideDictsList();
        },

        resetPreview: function()
        {
            $('#MoveChecker').text('').css('visibility','hidden');
            $('#MovePreview .prevdata').remove();
            this.previewRowNum = 1;
            this.addPreviewRow(null, null, null, false);
            this.addPreviewRow(null, null, null, false);
            this.addPreviewRow(null, null, null, false);
            this.addPreviewRow(null, null, null, false);
            this.addPreviewRow(null, null, null, false);
            this.addPreviewRow(null, null, null, false);
            this.previewRowNum = 1;
        },

        remRow: function( wordID )
        {
            if(WordsList.isEmpty(wordID))
                return false;

            $('#MovePreview .preword' + wordID).remove();
            this.reindexRows();

            return false;
        },

        getWordsIDs: function()
        {
            var ids = new Array();
            var i = 0;
            var className = null;

            $('#MovePreview .premovew').each(function(){
                className = $(this).attr('class').replace('prevdata','').replace('premovew','').replace('preword','');
                className = jQuery.trim(className);
                ids[i++] = className;
            });

            return ids;
        },

        getWordsNumber: function()
        {
            return $('#MovePreview .premovew').length;
        },

        reindexRows: function()
        {
            var wordsNo = this.getWordsNumber();

            if(wordsNo == 0)
                $('#MoveChecker').removeClass('checkOk').addClass('checkError').text(WordsList.L10n['move.check.nowords']).css('visibility','visible')
            else if(wordsNo > this.maxWords)
                $('#MoveChecker').removeClass('checkOk').addClass('checkError').text(WordsList.L10n['move.check.limit'].replace('%s', this.maxWords)).css('visibility','visible');
            else
                $('#MoveChecker').text('').css('visibility','hidden');

            this.previewRowNum = 1;

            $('#MovePreview .prevNum').each(function(){
                $(this).text(WordsList.mover.previewRowNum++);
            });
        },

        addPreviewRow: function( wordID, word, trans, markError )
        {
            if($('#MovPrev' + this.previewRowNum).length == 0)
            {
                var html = '<tr id="MovPrev' + this.previewRowNum + '" class="prevdata' + (WordsList.isEmpty(wordID) ? '' : ' premovew preword' + wordID) + '"><td><div class="prevNum">' + this.previewRowNum + '</div></td><td><div class="prevWord">...</div></td><td><div class="prevTrans2">...</div></td></tr>';
                $('#MovePreview table').append( html );
            }

            if(!WordsList.isEmpty(wordID) && !$('#MovPrev' + this.previewRowNum).hasClass('preword' + wordID))
                $('#MovPrev' + this.previewRowNum).addClass('premovew').addClass('preword' + wordID)
            else if(WordsList.isEmpty(wordID))
                $('#MovPrev' + this.previewRowNum).removeAttr('class').addClass('prevdata');

            if(WordsList.isEmpty(word))
                $('#MovPrev' + this.previewRowNum + ' .prevWord').text('...')
            else
                $('#MovPrev' + this.previewRowNum + ' .prevWord').text(word);

            if(WordsList.isEmpty(trans))
            {
                $('#MovPrev' + this.previewRowNum + ' .prevTrans2').text('...')

                if(!WordsList.isEmpty(word))
                    $('#MovPrev' + this.previewRowNum + ' td').addClass('error');
            }
            else
            {
                $('#MovPrev' + this.previewRowNum + ' .prevTrans2').text(trans);
                jQuery('<a/>',{href:'#'}).addClass('rowRemover').attr('onclick', 'return WordsList.mover.remRow(' + wordID + ')').text('X').insertAfter('#MovPrev' + this.previewRowNum + ' .prevTrans2');
            }

            if(markError || this.previewRowNum > this.maxWords)
                $('#MovPrev' + this.previewRowNum + ' td').addClass('error');

            this.previewRowNum++;
        },

        toggleMoveControls: function()
        {
            if($('#WordMoveList').css('display') == 'block')
                this.hideMoveControls()
            else
                this.showMoveControls();

            return false;
        },

        showMoveControls: function()
        {
            var coo = $('#WordMove').offset();

            $('#WordMoveList').css({
                left: coo.left + 'px',
                display: 'block'
            });
            $('#WordMoveMore').addClass('dblueButton').removeClass('blueButton');
        },

        hideMoveControls: function()
        {
            if($('#WordMoveMore').hasClass('greyButton'))
                return;
            
            $('#WordMoveList').hide();
            $('#WordMoveMore').addClass('blueButton').removeClass('dblueButton');
        },

        showNextDicts: function()
        {
            if(this.dictsLoad)
                return false;

            if(!this.hasMoreDicts())
                return false;

            this.dictsPageNum++;
            this.showDictsLoad();

            AjaxRequest.query(
            {
                'folder' : 'dicts',
                'file' : 'LoadDictsMoveList',
                'labelID': null,
                'langCode': WordsList.srcLang,
                'pageNum': this.dictsPageNum
            },
            function(result, errors)
            {
                WordsList.mover.removeDictNextControl();
                WordsList.mover.hideDictsLoad();

                if(WordsList.mover.isDictsListEmpty())
                    WordsList.mover.resetMove();

                if(WordsList.isEmpty(result) || WordsList.isEmpty(result['data']))
                {
                    WordsList.mover.showError('System error');
                    return;
                }

                if(!WordsList.isEmpty(result['data']['error']))
                {
                    WordsList.mover.showError(result['data']['error']);
                    return;
                }

                var dicts = result['data']['dicts'];
                var isFinish = result['data']['finish'];

                for(var i in dicts)
                    if(i != WordsList.dictID)
                        WordsList.mover.addDict(i, dicts[i]);

                if(isFinish == '0')
                    WordsList.mover.addDictNextControl()
                else if(WordsList.mover.isDictsListEmpty())
                    WordsList.mover.addNoDictsItem();
            });

            return false;
        },

        resetMove: function()
        {
            $('#LoadFirstDicts,#NoDictsItem').remove();
        },

        showDictsLoad: function()
        {
            this.dictsLoad = true;
            $('#DictsSelectList a').addClass('load');
        },

        hideDictsLoad: function()
        {
            this.dictsLoad = false;
            $('#DictsSelectList a').removeClass('load');
        },

        hasMoreDicts: function()
        {
            return $('#NoMoreStatDicts').length == 0;
        },

        addNoDictsItem: function()
        {
            var nodict = jQuery('<div/>',{
                id: 'NoDictsItem'
            }).html(WordsList.L10n['move.dicts.empty']);

            nodict.appendTo($('#DictsSelectList'));
        },

        addDictNextControl: function()
        {
            var dict = jQuery('<a/>',{
                id: 'ShowMoreDicts',
                href: '#'
            }).html('\u25bc\u25bc\u25bc');

            dict.attr('onclick', "return WordsList.mover.showNextDicts()");
            dict.appendTo($('#DictsSelectList'));
        },

        removeDictNextControl: function()
        {
            $('#ShowMoreDicts').remove();
        },

        addDict: function( dictID, dictName )
        {
            var dict = jQuery('<a/>',{
                id: 'FdictItem' + dictID,
                href: '#'
            }).html(dictName);

            dict.attr('onclick', "return WordsList.mover.clickDict('" + dictID + "')");

            if(WordsList.mover.dictID == dictID)
                dict.addClass('selected');

            dict.appendTo($('#DictsSelectList'));
        },

        showDictsList: function()
        {
            if(this.isDictsListShown())
            {
                this.hideDictsList();
                return;
            }

            if(this.isDictsListEmpty() && $('#NoDictsItem').length == 0)
            {
                var loadItem = jQuery('<div/>',{
                        id: 'LoadFirstDicts'
                }).html(WordsList.L10n['load']);
                loadItem.appendTo($('#DictsSelectList'));
                this.showNextDicts();
            }

            $('#DictsSelector').addClass('dgreenDropList').removeClass('greenDropList');
            $('#DictsSelectList').css('display','block');
        },

        isDictsListShown: function()
        {
            return $('#DictsSelectList').css('display') == 'block';
        },

        hideDictsList: function()
        {
            $('#DictsSelector').addClass('greenDropList').removeClass('dgreenDropList');
            $('#DictsSelectList').css('display','none');
        },

        clickDict: function( dictID )
        {
            var name = $('#FdictItem' + dictID).html();
            this.setDict(dictID, name);
            return false;
        },

        onClickDictsList: function()
        {
            this.showDictsList();
            return false;
        },

        resetDictsList: function()
        {
            this.dictID = null;
            this.clearDictsList();
        },

        clearDictsList: function()
        {
            this.dictsPageNum = 1;
            $('#DictsSelectList a').remove();
        },

        isDictsListEmpty: function()
        {
            return $('#DictsSelectList a').length == 0;
        },

        bindEvents: function()
        {
            $('#DictsSelector').click(function(e){
                $(this).blur();

                if(!WordsList.isPremium)
                    return false;
                return WordsList.mover.onClickDictsList();
            }),

            $('#WordMoveMore').click(function(e){
                $(this).blur();
                if(WordsList.getSelected().length == 0)
                    return false;

                return WordsList.mover.toggleMoveControls();
            }),

            $('#WordMoveCont').mouseleave(function(e){
                WordsList.mover.hideMoveControls();
                return false;
            }),

            $('#MoveBut,#CopyBut').click(function(e){
                if(!WordsList.isPremium)
                    return false;

                WordsList.mover.makeCopy();
                return false;
            }),

            $('#MoveClose').click(function(e){
                WordsList.mover.hide();
                return false;
            }),

            $('#WordMove').click(function(e){
                $(this).blur();
                if(WordsList.getSelected().length == 0)
                    return false;

                WordsList.mover.initMove();
                return WordsList.mover.show();
            }),

            $('#WordMove2').click(function(e){
                WordsList.mover.initMove();
                return WordsList.mover.show();
            }),

            $('#WordCopy').click(function(e){
                WordsList.mover.initCopy();
                return WordsList.mover.show();
            })
        }
    },

    initAutoResizer: function()
    {
        setInterval(function(){
            if($('#YanAdSidebar').length > 0)
            {
                WordsList.onResizeWindow();
            }
        }, 1000);
    },

    bindEvents: function()
    {
		if( $('#WordsTableCont').length == 0 )
			return;
		
        this.adjustCellsWidth();
        this.importer.bindEvents();
        this.mover.bindEvents();
        this.tts.bindEvents();

        $(window).resize(function(e){
            return WordsList.onResizeWindow();
        });

        $(document).keydown(function(e){
            return WordsList.onKeyDown(e);
        });

        $('#WordsTableCont').scroll(function(e){
            WordsList.hideCellEditor();
            WordsList.onScrollWords();
        });
		
		if(this.isAutoTrans)
			$('#CardEditorAutoTrans').show()
		else
			$('#CardEditorAutoTrans').hide();

        if(!this.isLoggedIn)
        {
            this.loadWords();
            this.onResizeWindow();
            return false;
        }

        $('#CheckAllWords').click(function(e){
            return WordsList.onClickAllCheckboxEvent();
        }),

        $('#StatusEditorCont').mouseleave(function(e){
            return WordsList.hideStatusesList();
        }),

        $('#StatusEditor a').click(function(e){
            return WordsList.changeStatusEvent(this.id);
        }),

        $('#WordChangeStatsCont').mouseleave(function(e){
            return WordsList.hideStatusesList();
        }),

        $('#WordChangeStats').click(function(e){
            return WordsList.onClickMassStatus();
        }),

        $('#MassStatusEditor a').click(function(e){
            return WordsList.changeMassStatusEvent(this.id);
        }),

        $('#CellEditor').blur(function(e){
            return WordsList.saveCellEditorContent();
        }),

        $('#CellEditor').keyup(function(e){
            return WordsList.onKeyUpCellEditorEvent(e);
        }),

        $('#CellEditor').keydown(function(e){
            return WordsList.onKeyDownCellEditorEvent(e);
        }),

        $('#WordDel').click(function(e){
            return WordsList.deleteCards();
        }),

        $('#WordNew,#WordNew2').click(function(e){
            return WordsList.showCardEditor();
        }),
        
        $('#WordReset').click(function(e){
            WordsList.resetCards();
            return false;
        }),

        $('#CardEditorNewWord').keyup(function(e){
            return WordsList.onKeyUpCardEditorWordEvent(e);
        }),

        $('#CardEditorTranslation,#CardEditorTranscription').keypress(function(e){
            if(e.keyCode == 27)
            {
                return WordsList.hideCardEditor();
            }
            else if(e.keyCode == 13)
            {
                return WordsList.saveCard('WordsTable');
            }

            return true;
        }),

        this.loadWords();
        this.onResizeWindow();
        this.initAutoResizer();

        return true;
    }
}