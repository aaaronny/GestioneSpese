function getAllTipospesa() {
	var result;
	$.ajax({
		type : "GET",
        async: false,
		url : '/GestioneSpese/Tipospese',
		dataType : "json",
		success : function(res){
			result = res;
		}
	});
	return result;
}

function addTipospesa(tipospesa){
	var ps = {};
	ps["data"] = tipospesa[1];
	ps["descrizione"] = tipospesa[2];
	ps["importo"] = tipospesa[3];
    $.ajax({
        type: "POST",
        url: "/GestioneSpese/Tipospese",
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

function delTipospesa(idTipospesa){
	var result;
	var ps = {};
	ps["idTipospesa"] = idTipospesa;
    $.ajax({
        type: "DELETE",
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

function updateTipospesa(tipospesa){
	var ps = {};
	ps["data"] = tipospesa[1];
	ps["descrizione"] = tipospesa[2];
	ps["importo"] = tipospesa[3];
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
