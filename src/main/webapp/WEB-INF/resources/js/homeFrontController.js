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

var showMessage = function (msg){
        $('#message').puigrowl('show', msg);
    };    

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
	
	// LOAD COMPONENTS
	$.get('/GestioneSpese/resources/pages/editor.html', function(data){
	    $('body').append(data);
		initEditorComponent();
	});
	$('body').append('<div id="message">');
	
	// BUTTON AGGIUNGI SPESA
	$('#bttAddSpesa').puibutton({
		icon: 'fa-plus',
	    click: function(event) {
	    	showEditor(null);
	    }
	});
	
	// COMPONENTI EDITOR
	
	// COMPONENTE MESSAGGI
	$('#message').puigrowl();
	
	// COMPONENTE TABELLA SPESE
    $('#tblSpese').puidatatable(tblSpeseObj);
    
});