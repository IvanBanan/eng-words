function AjaxRequest()
{
	var t = this;
	t.path = '/ajax/ajax_handler.php';
	t.caching = false;
}

AjaxRequest.query = function(params, func, doCache)
{
	var ajax = new this();
	var doNotCache;
	if (doCache == undefined){
		doNotCache = (ajax.caching) ? false : true;
	}
	else{
		doNotCache =  (doCache) ? false : true;
	}
	
	params['curURL'] = document.location.href;
	if(params['RsAjaxComponent'] != 1)
	{
		params['RsAjaxComponent'] = 0;
	}
	
	JsHttpRequest.query(ajax.path, params, func, doNotCache);
}

function RsComponent(compParams, destinationId)
{
    $('#' + destinationId).html(
        jQuery('<div/>').css('text-align', 'center').append(jQuery('<img/>',{
            src: PICS_PATH + '/content/loading.gif'
    })));
	
	compParams['RsAjaxComponent'] = 1;
	AjaxRequest.query(compParams, 
		function(result, errors)
		{
			if(result != undefined && result['data'] != undefined &&
                    result['data'] != null && result['data'] != '')
                $('#' + destinationId).html(result['data']);
			else
                $('#' + destinationId).html('System error.');
		}
	);	
}

function RsComponent(compParams)
{
	this.params = compParams;
	this.data = '';
	
	RsComponent.prototype.isDataFull = function()
	{
		if(this.data == '')
		{
			return false;
		}
		else
		{
			return true;
		}
	}

    RsComponent.prototype.passDataToId = function(destinationId)
	{
        this.passDataToId(destinationId, null);
    }
	
	RsComponent.prototype.passDataToId = function(destinationId, handler)
	{
		if(this.isDataFull())
		{
            $('#' + destinationId).html(this.data)
		}
		else
		{
            $('#' + destinationId).html(
                jQuery('<div/>').css('text-align', 'center').append(jQuery('<img/>',{
                    src: PICS_PATH + '/content/loading.gif'
            })));
		
			this.params['RsAjaxComponent'] = 1;
			AjaxRequest.query(this.params, 
				function(result, errors)
				{
                    if(handler != null)
                        handler.handle();
					if(result['data'] != 'undefined' && result['data'] != '')
					{
						this.data = result['data'];
                        $('#' + destinationId).html(result['data'])

                        if(handler != null)
                            handler.postHandle();
					}
					else
					{
                        $('#' + destinationId).html('System error.');
					}
				}
			);
		}
	}

    RsComponent.prototype.appendDataToId = function(destinationId, handler)
	{
        jQuery('<div/>',
        {id: 'Load' + destinationId}).css('text-align', 'center').append(jQuery('<img/>',{
            src: PICS_PATH + '/content/loading.gif'
        })).appendTo('#' + destinationId);

		this.params['RsAjaxComponent'] = 1;
		AjaxRequest.query(this.params,
			function(result, errors)
			{
                $('#Load' + destinationId).remove();

                if(handler != null)
                    handler.handle();
				if(result['data'] != 'undefined' && result['data'] != '')
				{
					this.data = result['data'];
                    $('#' + destinationId).append(result['data']);
                    
                    if(handler != null)
                        handler.postHandle();
				}
				else
				{
                    $('#' + destinationId).append('System error.');
				}
			}
		);
	}
	
	RsComponent.prototype.appendAfter = function(target, handler)
	{
		var loadID = 'AjaxLoad' + Math.floor(Math.random()*1001);
		
		target.after(
			jQuery('<div/>').attr('id', loadID).css('text-align', 'center').append(
				jQuery('<img/>').attr('src', PICS_PATH + '/content/loading.gif'))
		);

		this.params['RsAjaxComponent'] = 1;
		AjaxRequest.query(this.params,
			function(result, errors)
			{
                $('#' + loadID).remove();

                if(handler != null)
                    handler.handle();
				if(result['data'] != 'undefined' && result['data'] != '')
				{
					this.data = result['data'];
                    target.after(result['data']);
                    
                    if(handler != null)
                        handler.postHandle();
				}
				else
				{
                    target.after('System error.');
				}
			}
		);
	}

    RsComponent.prototype.appendDataToTable = function(tableID, loadID, handler)
	{
        $('#' + loadID).html(jQuery('<div/>',
        {id: 'Load' + tableID}).css('text-align', 'center').append(jQuery('<img/>',{
            src: PICS_PATH + '/content/loading.gif'
        })));

        var fullTableID = tableID;

        if($('#' + tableID + ' tbody').length > 0)
            fullTableID = tableID + ' tbody';

		this.params['RsAjaxComponent'] = 1;
		AjaxRequest.query(this.params,
			function(result, errors)
			{
                $('#Load' + tableID).remove();

                if(handler != null)
                    handler.handle();
				if(result['data'] != 'undefined' && result['data'] != '')
				{
					this.data = result['data'];
                    $('#' + fullTableID).append(result['data']);

                    if(handler != null)
                        handler.postHandle();
				}
				else
				{
                    $('#' + fullTableID).append('System error.');
				}
			}
		);
	}

    RsComponent.prototype.appendHiddenDataToId = function(destinationId, handler)
	{
		this.params['RsAjaxComponent'] = 1;
		AjaxRequest.query(this.params,
			function(result, errors)
			{
                $('#Load' + destinationId).remove();

                if(handler != null)
                    handler.handle();
				if(result['data'] != 'undefined' && result['data'] != '')
				{
					this.data = result['data'];
                    $('#' + destinationId).append(result['data']);

                    if(handler != null)
                        handler.postHandle();
				}
				else
				{
                    $('#' + destinationId).append('System error.');
				}
			}
		);
	}

    RsComponent.prototype.prependHiddenDataToId = function(destinationId, handler)
	{
		this.params['RsAjaxComponent'] = 1;
		AjaxRequest.query(this.params,
			function(result, errors)
			{
                $('#Load' + destinationId).remove();

                if(handler != null)
                    handler.handle();
				if(result['data'] != 'undefined' && result['data'] != '')
				{
					this.data = result['data'];
                    $('#' + destinationId).prepend(result['data']);

                    if(handler != null)
                        handler.postHandle();
				}
				else
				{
                    $('#' + destinationId).prepend('System error.');
				}
			}
		);
	}
	
	RsComponent.prototype.passDataToFunc = function(funcName, arg1, arg2, arg3, arg4, arg5, arg6)
	{
		if(this.isDataFull())
		{
			document.getElementById(destinationId).innerHTML = this.data;
			return funcName(this.data);
		}
		else
		{
			this.params['RsAjaxComponent'] = 1;
			AjaxRequest.query(this.params, 
				function(result, errors)
				{
					if(result != undefined && result['data'] != undefined &&
                        result['data'] != null && result['data'] != '')
					{
						this.data = result['data'];
						var theFunc = funcName;
						//return theFunc.call(this.data);
						return window[funcName](this.data, arg1, arg2, arg3, arg4, arg5, arg6);
					}
					else
					{
						alert('System error.');
                        return null;
					}
				}
			);
		}
	}
}
	