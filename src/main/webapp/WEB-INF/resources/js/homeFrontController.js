$(function() {
    $('#table').puidatatable({
        caption: 'Spese',
        editMode: 'cell',
        paginator: {
            rows: 10
        },
        columns: [
            {field: 'idSpesa', headerText: 'ID', editor: 'input'},
            {field: 'descrizione', headerText: 'Descrizione', editor: 'input'},
            {field: 'importo', headerText: 'Importo', editor: 'input'},
            {field: 'data', headerText: 'Data', editor: 'input'}
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