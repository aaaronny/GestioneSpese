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

function delSpesa(spesa){
	var ps = {};
	ps["idSpesa"] = spesa[0];
    $.ajax({
        type: "DELETE",
        url: "/GestioneSpese/Spese",
	    dataType: 'json',
	    contentType : 'application/json',
        data: JSON.stringify(ps),
        success: function(res){
            alert('CANCELLAZIONE AVVENUTA CON SUCCESSO!');
        },
        failure: function(res) {
            alert('ERRORE!');
        }
    });
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
