var DELETE_OK = [{severity: 'info', summary: 'Gestione Spese', detail: 'Cancellazione record avvenuta con successo!'}];
var DELETE_FAIL = [{severity: 'error', summary: 'Gestione Spese', detail: 'Errore cancellazione record!'}];

var tblSpeseObj = {
        caption: 'Spese',
        paginator: {
            rows: 1
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

var initEditorComponent = function(){
	$('#txtIdSpesa').puiinputtext();
	$('#txtDescrizione').puiinputtext();
	$('#txtImporto').puiinputtext();
	$('#txtData').puiinputtext();
    $('#txtTipospesa').puiautocomplete({
        completeSource: getAllTipospesa().map(function(d) { return d.descrizione + ' - ' + d.idTipospesa; }),
        dropdown: true,
        select: function(event, item){
        	var label = $('#txtTipospesa').val();
        	var splitted = label.split(' - ');
        	$('#hddIdTipospesa').val(splitted[splitted.length - 1]);
        	alert($('#hddIdTipospesa').val());
        }
    });
};

var showMessage = function (msg){
        $('#message').puigrowl('show', msg);
    };

var showEditor = function (object){
	var settings;
	if(object == null){
		settings = {okMsg: 0, failMsg: 0, caption: 'Aggiungi elemento'};
	} else {
		settings = {okMsg: 0, failMsg: 0, caption: 'Modifica elemento'};
	}
	$('#editorCaption').text(settings.caption);
   	 $('#editorData').puidialog({
   		 location: 'center',
   		 width: 540,
   		 height:300,
   		 title: ' ',
   		 resizable: false,
   		 closeOnEscape: true,
   		 modal: true,
   		 closable: false,
         buttons: [{
                    text: 'Salva',
                    icon: 'fa-check',
                    click: function() {
                   	 $('#editorData').puidialog('hide');
                   	 if (delSpesa(data)){
                   		 showMessage(DELETE_OK);
                   		 $('#tblSpese').puidatatable('reload');
                   	 } else {
                   		 showMessage(DELETE_FAIL);
                   	 }
                    }
                },
                {
                    text: 'Annulla',
                    icon: 'fa-close',
                    click: function() {
                   	 $('#editorData').puidialog('hide');
                    }
                }
            ]
        });
   	 $('#editorData').puidialog('show');
   }    

var showConfirmDelete = function (data){
	 $('#confirmDelete').puidialog({
		 location: 'center',
		 width: 450,
		 height:50,
		 title: ' ',
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
	
	// COMPONENTI EDITOR
	initEditorComponent();
	
	// COMPONENTE MESSAGGI
	$('#message').puigrowl();
	
	// COMPONENTE TABELLA SPESE
    $('#tblSpese').puidatatable(tblSpeseObj);
});