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
            	return $('<button type="button"></button>').puibutton({ icon: 'fa-pencil', click: function(event){ editorManager.show(localData); } });
            }},
            {headerStyle:"width:5%",bodyStyle: 'text-align:center', headerText: '-', content: function(localData) {
            	return $('<button type="button"></button>').puibutton({ icon: 'fa-trash', click: function(event){ editorManager.showDelete(localData.idSpesa); } });
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

$(function() {
	
	// LOAD EDITOR
	 $.get('/GestioneSpese/resources/pages/editor.html', function(data) {
		$('#editorContainer').html('<div style="position: absolute;">' + data + '</div>');
		editorManager.init();
	});
	
	// COMPONENTE MESSAGGI
	$('#message').puigrowl();
	
	// COMPONENTE TABELLA SPESE
    $('#tblSpese').puidatatable(tblSpeseObj);
    
});