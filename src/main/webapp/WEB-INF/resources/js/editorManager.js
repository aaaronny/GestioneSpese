function initEditorComponent(){
	$('p-datepicker').children('input').puiinputtext();
	$('#txtIdSpesa').puiinputtext();
	$('#txtDescrizione').puiinputtext();
	$('#txtImporto').puispinner({step: 0.1});
    $('#txtTipospesa').puidropdown({
        data: getAllTipospesa().map(function(d) { return {value: d.idTipospesa, label: d.descrizione}; }),
        filter: true
    });
};

function sendSpeseData(func){
	alert((func==null));
	var spesa = {
			idSpesa: $('#txtIdSpesa').val(),
			descrizione: $('#txtDescrizione').val(),
			importo: $('#txtImporto').val(),
			data: document.getElementById('txtData').getElementsByTagName('input')[0].value,
			tipospesaBean: {idTipospesa: $('#txtTipospesa').val()}
	}
	return (func == null) ? addSpesa(spesa) : updateSpesa(spesa);
}

function resetSpeseData(){
	$('#txtIdSpesa').val('');
	$('#txtDescrizione').val('');
	$('#txtImporto').val(0);
	document.getElementById('txtData').getElementsByTagName('input')[0].value = '';
}

var showEditor = function (data){
	var settings;
	if(data == null){
		settings = {okMsg: ADD_OK, failMsg: ADD_FAIL, caption: 'Aggiungi elemento', dialogTitle: 'Aggiungi elemento' };
		$('#txtIdSpesa').val("auto");
	} else {
		alert('lo becca');
		settings = {okMsg: UPDATE_OK, failMsg: UPDATE_FAIL, caption: 'Modifica elemento', dialogTitle: 'Modifica elemento - ID: ' + data.idSpesa };
		$('#txtIdSpesa').val(data.idSpesa);
		$('#txtDescrizione').val(data.descrizione);
		$('#txtImporto').val(data.importo * 1);
		document.getElementById('txtData').getElementsByTagName('input')[0].value = data.data;
		if (data.tipospesaBean != null)
			$('#txtTipospesa').puidropdown('selectValue', data.tipospesaBean.idTipospesa);
	}
	
	$('#editorCaption').text(settings.caption);
	$('#editorData').puidialog({
		location : 'center',
		width : 540,
		height : 260,
		title : settings.dialogTitle,
		resizable : false,
		closeOnEscape : true,
		modal : true,
		closable : false,
		buttons : [ {
			text : 'Salva',
			icon : 'fa-save',
			click : function() {
				$('#editorData').puidialog('hide');
				resetSpeseData();
				if (sendSpeseData(data)) {
					showMessage(settings.okMsg);
					$('#tblSpese').puidatatable('reload');
				} else {
					showMessage(settings.failMsg);
				}
			}
		}, {
			text : 'Annulla',
			icon : 'fa-close',
			click : function() {
				$('#editorData').puidialog('hide');
				resetSpeseData();
			}
		} ]
	});
	$('#editorData').puidialog('show');
}