function addSpesa(spesa){
	var result;
	var ps = {};
	ps['descrizione'] = spesa.descrizione;
	ps['importo'] = spesa.importo;
	ps['data'] = spesa.data;
	ps['tipospesaBean'] = spesa.tipospesaBean;
	
    $.ajax({
        type: "POST",
        async: false,
        url: "/GestioneSpese/Spese",
	    dataType: 'json',
	    contentType : 'application/json',
        data: JSON.stringify(ps),
        success: function(res){
        	result = true;
        },
        failure: function(res) {
        	result = false;
        }
    });
    return result;
}

function delSpesa(idSpesa){
	var result;
    $.ajax({
        type: "DELETE",
        async: false,
        url: "/GestioneSpese/Spese/"+ idSpesa,
	    dataType: 'json',
	    contentType : 'application/json',
        success: function(res){
        	result = true;
        },
        failure: function(res) {
        	result = false;
        }
    });
    return result;
}

function updateSpesa(spesa){
	var result;
	var ps = {};
	ps['idSpesa'] = spesa.idSpesa;
	ps['descrizione'] = spesa.descrizione;
	ps['importo'] = spesa.importo;
	ps['data'] = spesa.data;
	ps['tipospesaBean'] = spesa.tipospesaBean;
	
    $.ajax({
        type: "PUT",
        async: false,
        url: "/GestioneSpese/Spese",
	    dataType: 'json',
	    contentType : 'application/json',
        data: JSON.stringify(ps),
        success: function(res){
        	result = true;
        },
        failure: function(res) {
        	result = false;
        }
    });
    return result;
}
