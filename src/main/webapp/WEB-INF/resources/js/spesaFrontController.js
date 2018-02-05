function addSpesa(spesa){
	var ps = {};
	ps["data"] = spesa[1];
	ps["descrizione"] = spesa[2];
	ps["importo"] = spesa[3];
    $.ajax({
        type: "POST",
        url: "/GestioneSpese/Spese",
	    dataType: 'json',
	    contentType : 'application/json',
        data: JSON.stringify(ps),
        success: function(res){
            alert('INSERIMENTO AVVENUTO CON SUCCESSO!');
        },
        failure: function(res) {
            alert('ERRORE!');
        }
    });
}

function delSpesa(idSpesa){
	var result;
    $.ajax({
        type: "DELETE",
        async: false,
        url: "/GestioneSpese/Spese/"+ idSpesa,
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

function updateSpesa(spesa){
	var ps = {};
	ps["data"] = spesa[1];
	ps["descrizione"] = spesa[2];
	ps["importo"] = spesa[3];
    $.ajax({
        type: "PUT",
        url: "/GestioneSpese/Spese",
	    dataType: 'json',
	    contentType : 'application/json',
        data: JSON.stringify(ps),
        success: function(res){
            alert('MODIFICA AVVENUTA CON SUCCESSO!');
        },
        failure: function(res) {
            alert('ERRORE!');
        }
    });
}
