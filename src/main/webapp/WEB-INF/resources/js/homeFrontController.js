var DELETE_OK = [{severity: 'info', summary: 'Gestione Spese', detail: 'Cancellazione record avvenuta con successo!'}];
var DELETE_FAIL = [{severity: 'error', summary: 'Gestione Spese', detail: 'Errore cancellazione record!'}];

var showMessage = function (msg){
        $('#message').puigrowl('show', msg);
    };

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
	// COMPONENTE MESSAGGI
	$('#message').puigrowl();
	
	// COMPONENTE TABELLA SPESE
    $('#tblSpese').puidatatable({
        caption: 'Spese',
        paginator: {
            rows: 10
        },
        columns: [
            {field: 'idSpesa', headerText: 'ID', headerStyle: 'width: 8%'},
            {field: 'descrizione', headerText: 'Descrizione'},
            {field: 'importo', headerText: 'Importo', content: function(localData){ return localData.importo + ' euro';s}},
            {field: 'data', headerText: 'Data'},
            {headerText: 'Tipo Spesa',content: function(localData) {
        		var tipospesa = localData.tipospesaBean;
        		return (tipospesa != null) ? tipospesa.descrizione : 'N.D.';
        	}},
            {headerStyle:"width:10%",bodyStyle: 'text-align:center', headerText: '-', content: function(localData) {
                return $('<button type="button"></button>').puibutton({
                    icon: 'fa-trash',
                    click: function(event){
                    	showConfirmDelete(localData.idSpesa);
                    }
                });
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
    });
});