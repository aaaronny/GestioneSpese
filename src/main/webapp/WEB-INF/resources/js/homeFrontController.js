var DELETE_OK = [{severity: 'info', summary: 'Gestione Spese', detail: 'Cancellazione record avvenuta con successo!'}];
var DELETE_FAIL = [{severity: 'error', summary: 'Gestione Spese', detail: 'Errore cancellazione record!'}];
var ADD_OK = [{severity: 'info', summary: 'Gestione Spese', detail: 'Aggiunta record avvenuta con successo!'}];
var ADD_FAIL = [{severity: 'error', summary: 'Gestione Spese', detail: 'Errore aggiunta record!'}];
var UPDATE_OK = [{severity: 'info', summary: 'Gestione Spese', detail: 'Modifica record avvenuta con successo!'}];
var UPDATE_FAIL = [{severity: 'error', summary: 'Gestione Spese', detail: 'Errore modifica record!'}];

var tblSpeseObj = {
        caption: 'Spese',
        paginator: {
            rows: 5
        },
        columns: [
            {field: 'idSpesa', headerText: 'ID', headerStyle: 'width: 8%'},
            {field: 'descrizione', headerText: 'Descrizione'},
            {field: 'importo', headerText: 'Importo', content: function(localData){ return localData.importo + ' euro';}},
            {field: 'data', headerText: 'Data'},
            {headerText: 'Tipo Spesa',content: function(localData) {
        		var tipospesa = localData.tipospesaBean;
        		return (tipospesa != null) ? tipospesa.descrizione : 'N.D.';
        	}},
            {headerStyle:"width:5%",bodyStyle: 'text-align:center', headerText: '-', content: function(localData) {
            	return $('<button type="button"></button>').puibutton({ icon: 'fa-pencil', click: function(event){ showEditor(localData); } });
            }},
            {headerStyle:"width:5%",bodyStyle: 'text-align:center', headerText: '-', content: function(localData) {
            	return $('<button type="button"></button>').puibutton({ icon: 'fa-trash', click: function(event){ showConfirmDelete(localData.idSpesa); } });
            }}
        ],
        datasource: function(callback) {
            $.ajax({
                type: "GET",
                url: '/GestioneSpese/Spese',
                dataType: "json",
                context: this,
                success: function(response) {
                    callback.call(this, response);
                }
            });
        }
    };

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

var showMessage = function (msg){
        $('#message').puigrowl('show', msg);
    };
    
var showEditor = function (data){
	var settings;
	if(data == null){
		settings = {okMsg: ADD_OK, failMsg: ADD_FAIL, caption: 'Aggiungi elemento', dialogTitle: 'Aggiungi elemento' };
		$('#txtIdSpesa').val("auto");
	} else {
		settings = {okMsg: UPDATE_OK, failMsg: UPDATE_FAIL, caption: 'Modifica elemento', dialogTitle: 'Modifica elemento - ID: ' + data.idSpesa };
		$('#txtIdSpesa').val(data.idSpesa);
		$('#txtDescrizione').val(data.descrizione);
		$('#txtImporto').val(data.importo * 1);
		$('#txtData').val(data.data);
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

var showConfirmDelete = function (data){
	 $('#confirmDelete').puidialog({
		 location: 'center',
		 width: 450,
		 height:50,
		 title: 'Elimina elemento - ID: ' + data,
		 resizable: false,
		 closeOnEscape: true,
		 modal: true,
		 closable: false,
         buttons: [{
                 text: 'Si',
                 icon: 'fa-check',
                 click: function() {
                	 $('#confirmDelete').puidialog('hide');
                	 if (delSpesa(data)){
                		 showMessage(DELETE_OK);
                		 $('#tblSpese').puidatatable('reload');
                	 } else {
                		 showMessage(DELETE_FAIL);
                	 }
                 }
             },
             {
                 text: 'No',
                 icon: 'fa-close',
                 click: function() {
                	 $('#confirmDelete').puidialog('hide');
                 }
             }
         ]
     });
	 $('#confirmDelete').puidialog('show');
}

$(function() {

	// BUTTON AGGIUNGI SPESA
	$('#bttAddSpesa').puibutton({
		icon: 'fa-plus',
	    click: function(event) {
	    	showEditor(null);
	    }
	});
	
	// COMPONENTI EDITOR
	initEditorComponent();
	
	// COMPONENTE MESSAGGI
	$('#message').puigrowl();
	
	// COMPONENTE TABELLA SPESE
    $('#tblSpese').puidatatable(tblSpeseObj);
});