jQuery(document).ready(function(){
    Help.bindEvents();
})

Help =
{
    L10n: null,
    sections: null,
    questions: new Array(),

    loadL10n: function( l10n )
    {
        this.L10n = l10n;
    },

    toggle: function()
    {
        $('#Help').slideToggle('fast', function(){
            if( Help.isShown() )
                Help.showSections()
            else
                Help.hideSections();
        });

        return false;
    },

    isShown: function()
    {
        return $('#Help').css('display') == 'block';
    },

    showSections: function()
    {
        this.releaseSections();
        if( this.sections == null )
        {
            this.initSections();
            return;
        }

        if( this.sections.length == 0 )
        {
            this.showHelpWindow(null);
            return;
        }

        var j = 1;
        var size = 0;
        var lastSectionID = null;

        for(var i in this.sections)
        {
            var parent = $('#' + this.sections[i]['el']);
            var displayID = (this.isEmpty(this.sections[i]['del']) ? this.sections[i]['el'] : this.sections[i]['del']);
            var display = $('#' + displayID);

            if( parent.length <= 0 )
               continue;

            if( !parent.is(':visible') )
            {
               $('#HelpSect' + i + ',#HelpNum' + i).hide();
               continue;
            }

            var h = parseInt(this.sections[i]['h'], 10);

            if( h == 0 )
                h = parseInt(display.height(),10) - 2 * parseInt(this.sections[i]['mt'], 10);

            var off = display.offset();

            $('#HelpSect' + i).css({
                top: off.top + 'px',
                left: off.left + 'px',
                height: h + 'px'
            }).slideDown('fast');

            $('#HelpNum' + i).show().html(j++);
            size++;
            lastSectionID = i;
        }

        if(size == 1)
            this.showQuestions(lastSectionID);
    },

    hideSections: function()
    {
        $('.helpSect').hide();
        this.closeHelpWindow();
    },

    initSections: function()
    {
        var elementsIDs = this.getElementsIDs();
        
        jQuery('<img/>', {
            src: PICS_PATH + '/content/progress.gif'
        }).appendTo('#Help .sects');

        AjaxRequest.query(
        {
            'folder' : 'common/help',
            'file' : 'GetSections',
            'elements_ids': elementsIDs
        },
        function(result, errors)
        {
            if( Help.isEmpty( result['data'] ) || Help.isEmpty( result['data']['sections'] ) || result['data']['sections'].length == 0 )
            {
                Help.sections = new Array();
                Help.hideLoader();
                Help.L10n['empty'] = result['data']['empty'];
                Help.showHelpWindow(null);
                return;
            }

            Help.sections = result['data']['sections'];
            $('#Help .sects').html('');

            var j = 1;

            for(var i in Help.sections)
            {
                var dispID = ( Help.isEmpty(Help.sections[i]['del']) ? Help.sections[i]['el'] : Help.sections[i]['del'] );
                var off = $('#' + dispID).offset();
                var h = parseInt(Help.sections[i]['h'], 10);

                if( h == 0 )
                    h = parseInt($('#' + dispID).height(),10) - 2 * parseInt(Help.sections[i]['mt'], 10);

                jQuery('<a/>', {
                    id: 'HelpSect' + i,
                    onClick: 'return Help.showQuestions(' + i + ')',
                    onMouseOver: 'return Help.overSection(' + i + ')',
                    onMouseOut: 'return Help.outSection(' + i + ')',
                    href: '#'
                }).addClass('helpSect').css({
                    top: off.top + 'px',
                    left: off.left + 'px',
                    width: Help.sections[i]['w'] + 'px',
                    height: h + 'px',
                    marginTop: Help.sections[i]['mt'] + 'px',
                    marginLeft: Help.sections[i]['ml'] + 'px',
                    display: 'none'
                }).insertAfter('#Help');

                jQuery('<a/>', {
                    id: 'HelpNum' + i,
                    onClick: 'return Help.showQuestions(' + i + ')',
                    onMouseOver: 'return Help.overNumber(' + i + ')',
                    onMouseOut: 'return Help.outNumber(' + i + ')',
                    href: '#'
                }).addClass('helpNum').html(j++).appendTo('#Help .sects');
            }

            Help.showSections();
        });
    },

    overNumber: function( sectionID )
    {
        $('#HelpSect' + sectionID).addClass('helpSectO');
        return false;
    },

    outNumber: function( sectionID )
    {
        $('#HelpSect' + sectionID).removeClass('helpSectO');
        return false;
    },

    overSection: function( sectionID )
    {
        if(!$('#HelpNum' + sectionID).hasClass('helpNumA'))
            $('#HelpNum' + sectionID).addClass('helpNumO');
        return false;
    },

    outSection: function( sectionID )
    {
        $('#HelpNum' + sectionID).removeClass('helpNumO');
        return false;
    },

    showQuestions: function( sectionID )
    {
        this.releaseSections();
        for(var i in this.questions)
        {
            if( i == sectionID )
            {
                this.activateSection(i);
                this.showHelpWindow(this.questions[i]);
                return false;
            }
        }

        this.initQuestions(sectionID);

        return false;
    },

    releaseSections: function()
    {
        $('.helpSect').removeClass('helpSectA');
        $('.helpNum').removeClass('helpNumA').removeClass('helpNumO');
    },

    activateSection: function( sectionID )
    {
        $('#HelpSect' + sectionID).addClass('helpSectA');
        $('#HelpNum' + sectionID).addClass('helpNumA');
    },

    initQuestions: function( sectionID )
    {
        this.activateSection(sectionID);
        $('#HelpContent').html('');
        this.adjustHelpWindow();
        jQuery('<div/>').css('text-align', 'center').html('<img src="' +  PICS_PATH + '/content/loading.gif" />').appendTo('#HelpContent');

        AjaxRequest.query(
        {
            'folder': 'common/help',
            'file': 'GetQuestions',
            'section_id': sectionID
        },
        function(result, errors)
        {
            if( Help.isEmpty( result['data']['questions'] ) )
            {
                Help.questions[sectionID] = new Array();
                Help.L10n['empty'] = result['data']['empty'];
            }
            else
            {
                Help.questions[sectionID] = result['data']['questions'];
            }

            Help.showQuestions(sectionID);
        });
    },

    showHelpWindow: function( questions )
    {
        $('#HelpContent').html('');

        if( this.isEmpty( questions ) || questions.length == 0 )
        {
            $('#HelpContent').html(this.L10n['empty']);
        }
        else
            for(var i in questions)
            {
                jQuery('<div/>').addClass('helpQ').html(questions[i]['q']).appendTo('#HelpContent');
                jQuery('<div/>').addClass('helpA').html(questions[i]['a']).appendTo('#HelpContent');
            }

        this.adjustHelpWindow();
    },

    adjustHelpWindow: function()
    {
        var x = this.getDocWidth();
        var y = this.getScrollHeight();
        var winW = parseInt($('#HelpWindow').width(), 10);
        var winH = this.getDocHeight();

        $('#HelpWindow').css({
            top: (y + 70) + 'px',
            left: Math.round((x - winW) / 2) + 'px',
            display: 'block'
        });

        $('#HelpContent').css('height', (winH - 220) + 'px');
    },

    isHelpWindowShown: function()
    {
        return $('#HelpWindow').css('display') == 'block';
    },

    closeHelpWindow: function()
    {
        $('#HelpWindow').hide();
        this.releaseSections();
        return false;
    },

    getElementsIDs: function()
    {
        var IDs = new Array();

        $('.help').each(function()
        {
            if( !Help.isEmpty(this.id) )
                IDs.push(this.id);
        });

        return IDs;
    },

    getDocWidth: function()
    {
        if($.browser.opera)
            return document.documentElement.clientWidth;
        else
            return $(window).width();
    },

    getDocHeight: function()
    {
        if($.browser.opera)
            return document.documentElement.clientHeight;
        else
            return $(window).height();
    },

    getScrollHeight: function()
    {
        return $(window).scrollTop();
    },

    hideLoader: function()
    {
        $('#Help .sects').html('');
    },

    isEmpty: function( data )
    {
        return data == undefined || data == null || data == '';
    },

    onResizeWindow: function()
    {
        if( !this.isShown() )
            return;

        this.showSections();

        if( this.isHelpWindowShown() )
            this.adjustHelpWindow();
    },

    onKeyDown: function(e)
    {
        if( this.isEmpty( e ) )
            return false;

        if(e.keyCode == 27)
            if( this.isHelpWindowShown() )
            {
                this.closeHelpWindow();

                if(this.isShown() && this.sections.length == 0)
                    this.toggle();
                return false;
            }
            else if( this.isShown() )
            {
                this.toggle();
                return false;
            }

        return true;
    },

    bindEvents: function()
    {
        if($('#TopMenu').length == 0)
            return;
        
        //$('#HelpWindow').draggable();

        $('#HelpDragger a').click(function(e){
            return Help.closeHelpWindow();
        });

        $('#HelpUserQuestion').focus(function(e)
        {
            if($(this).val() == Help.L10n['input'])
                $(this).val('').css('color', '#000')
        }).blur(function(e)
        {
            if(Help.isEmpty($(this).val()))
                $(this).val(Help.L10n['input']).css('color', '#999')
        }).css('color', '#999').val(this.L10n['input']);

        $('#HelpQuestionSubmit').click(function(e){
            Help.sender.sendNew();
            return false;
        });

        $(document).keydown(function(e){
            return Help.onKeyDown(e);
        });

        $(window).bind('resize', function(e){
            return Help.onResizeWindow();
        })
    },

    sender:
    {
        sendNew: function()
        {
            if(this.isLoading())
                return;

            var question = trim($('#HelpUserQuestion').val());
            var sectionID = $('.helpSectA').attr('id');

            if(!Help.isEmpty(sectionID))
                sectionID = sectionID.replace('HelpSect', '');

            if(Help.isEmpty(question) || question == Help.L10n['input'])
                return;

            this.showLoad();

            AjaxRequest.query(
            {
                'folder': 'common/help',
                'file': 'SendQuestion',
                'section_id': sectionID,
                'question':  question
            },
            function(result, errors)
            {
                Help.sender.hideLoad();

                if( !Help.isEmpty( result['data']['answer'] ) )
                {
                    Help.sender.showMessage(result['data']['answer']);
                }
            });
        },

        showLoad: function()
        {
            $('#HelpQuestionSubmit,#HelpUserQuestion').attr('disabled', 'disabled');
            $('#HelpSendLoad').css('visibility', 'visible');
        },

        isLoading: function()
        {
            if(Help.isEmpty($('#HelpSendLoad').html()))
                jQuery('<img/>',{src: PICS_PATH + '/content/progress.gif'}).appendTo('#HelpSendLoad');
            return $('#HelpSendLoad').css('visibility') == 'visible';
        },

        hideLoad: function()
        {
            $('#HelpQuestionSubmit,#HelpUserQuestion').removeAttr('disabled');
            $('#HelpSendLoad').css('visibility', 'hidden');
        },

        showMessage: function(message)
        {
            $('#HelpUserQuestion').css({
                backgroundColor: '#FFFFC2',
                borderColor: '#FFFFC2',
                fontWeight: 'bold',
                color: '#66A159'
            }).val(message);

            setTimeout('Help.sender.resetInput()', 2000);
        },

        resetInput: function()
        {
            $('#HelpUserQuestion').css({
                backgroundColor: '#ffffff',
                borderColor: '#dddddd',
                fontWeight: 'normal',
                color: '#000000'
            }).val('').focus();
        }
    }
}