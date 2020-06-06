jQuery(document).ready(function(){
    $('.wslink').click(function(){
        window.location.href = $(this).attr('rel');
        return false;
    });

    $('#LangSelector').click(function(){
        return LangList.showLangMenu();
    })
    $('#LanguagesList div,#LanguagesList a').mouseover(function(){
        LangList.showLangMenu();
    })
    $('#LanguagesList div').mouseout(function(){
        LangList.hideLangMenu();
    });
	
	WsCommon.uncoverEmAddr();
})

WsCommon =
{
	uncoverEmAddr: function()
    {
        $('.milo').each(function(){
            $(this).html($(this).html().replace('[at]', '@'));
        });
    },

    hideTopMessage: function( messageID )
    {
        $('#TopMessage').slideUp(100, function(){
            AjaxRequest.query(
            {
                'folder': 'common/notify',
                'file': 'NotifyMessageCloser',
                'messageID': messageID
            },
            function(result, errors)
            {

            })
        });
        
        return false;
    },

    hideContextMessage: function( messageID, hideElementID )
    {
        AjaxRequest.query(
        {
            'folder': 'common/notify',
            'file': 'NotifyMessageCloser',
            'messageID': messageID
        },
        function(result, errors)
        {

        });

        $(hideElementID).hide();

        return false;
    },
	
	checkEnter: function checkEnter(evt)
    {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.which) ? evt.which : evt.keyCode);

        if(charCode == 13)
        {
            return true;
        }

        return false;
    }
}

LangList =
{
    changeLang: function(locale)
    {
        createCookie('locale', locale, 1500);
        window.location = location.href;
        this.hideLangMenu();
        return false;
    },

    showLangMenu: function()
    {
        var off = $('#LangSelector').offset();
        var w = parseInt($('#LanguagesList').outerWidth(), 10);
        var w2 = parseInt($('#LangSelector').outerWidth(), 10);
        var posX = off.left - w + w2;
        var posY = off.top;
        $('#LanguagesList').css({display:'block', top:posY + 'px', left:posX + 'px'});
        $('#LangSelector').blur();
        return false;
    },

    hideLangMenu: function()
    {
        $('#LanguagesList').css('display', 'none');
        return false;
    }
}

function trim(s)
{
	if(s == null || s == undefined)
	{
		return s;
	}

	return s.replace(/^\s*/, "").replace(/\s*$/, "");
}

function ge(id)
{
	return document.getElementById(id);
}

function checkEnter(evt)
{
	evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.which) ? evt.which : evt.keyCode);
    
    if(charCode == 13)
    {	
    	return true;
    }
    
    return false;
}

function createCookie(name, value, days)
{
    var expires = '';

	if(days)
    {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = '; expires=' + date.toGMTString();
	}
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name)
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name)
{
	createCookie(name,"",-1);
}

function findPosX(obj)
{
	var curleft = 0;
	if(obj.offsetParent)
	while(1)
	{
		curleft += obj.offsetLeft;
		if(!obj.offsetParent)
		break;
		obj = obj.offsetParent;
	}
	else if(obj.x)
	curleft += obj.x;
	return curleft;
}

function findPosY(obj)
{
	var curtop = 0;
	if(obj.offsetParent)
	while(1)
	{
		curtop += obj.offsetTop;
		if(!obj.offsetParent)
		break;
		obj = obj.offsetParent;
	}
	else if(obj.y)
	curtop += obj.y;
	return curtop;
}