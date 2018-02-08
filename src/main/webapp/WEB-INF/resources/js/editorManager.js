var editorManager = {

	settings : null,
	
	idElementToDelete : 0,

	init : function() {
		$('p-datepicker').children('input').puiinputtext();
		$('#txtIdSpesa').puiinputtext();
		$('#txtDescrizione').puiinputtext();
		$('#txtImporto').puispinner({
			step : 0.1
		});
		$('#txtTipospesa').puidropdown({
			data : getAllTipospesa().map(function(d) {
				return {
					value : d.idTipospesa,
					label : d.descrizione
				};
			}),
			filter : true
		});
	},

	show : function(data) {
		if (data == null) {
			this.settings = {
				newElement : true,
				okMsg : ADD_OK,
				failMsg : ADD_FAIL,
				caption : 'Aggiungi elemento',
				dialogTitle : 'Aggiungi elemento'
			};
			$('#txtIdSpesa').val("auto");
		} else {
			this.settings = {
				newElement : false,
				okMsg : UPDATE_OK,
				failMsg : UPDATE_FAIL,
				caption : 'Modifica elemento',
				dialogTitle : 'Modifica elemento - ID: ' + data.idSpesa
			};
			$('#txtIdSpesa').val(data.idSpesa);
			$('#txtDescrizione').val(data.descrizione);
			$('#txtImporto').val(data.importo * 1);
			document.getElementById('txtData').getElementsByTagName('input')[0].value = data.data;
			if (data.tipospesaBean != null)
				$('#txtTipospesa').puidropdown('selectValue',
						data.tipospesaBean.idTipospesa);
		}

		$('#editorCaption').text(this.settings.caption);
		$('#editorData').find($('.ui-dialog-title')).text(
				this.settings.dialogTitle);
		document.getElementById('editorData').show();
	},

	save : function() {
		document.getElementById('editorData').hide();
		if (this.sendData()) {
			showMessage(this.settings.okMsg);
			$('#tblSpese').puidatatable('reload');
		} else {
			showMessage(this.settings.failMsg);
		}
		this.resetData();
	},

	cancel : function(dialog) {
		document.getElementById(dialog).hide();
		this.resetData();
	},

	resetData : function() {
		$('#txtIdSpesa').val('');
		$('#txtDescrizione').val('');
		$('#txtImporto').val(0);
		document.getElementById('txtData').getElementsByTagName('input')[0].value = '';
	},

	sendData : function() {
		var spesa = {
			idSpesa : $('#txtIdSpesa').val(),
			descrizione : $('#txtDescrizione').val(),
			importo : $('#txtImporto').val(),
			data : document.getElementById('txtData').getElementsByTagName(
					'input')[0].value,
			tipospesaBean : {
				idTipospesa : $('#txtTipospesa').val()
			}
		}
		return (this.settings.newElement) ? addSpesa(spesa)
				: updateSpesa(spesa);
	},

	showDelete : function(data) {
		this.idElementToDelete = data;
		$('#confirmDelete').find($('.ui-dialog-title')).text('Elimina elemento - ID: ' + data);
		document.getElementById('confirmDelete').show();
	},

	del : function() {
		document.getElementById('confirmDelete').hide();
		if (delSpesa(this.idElementToDelete)) {
			showMessage(DELETE_OK);
			$('#tblSpese').puidatatable('reload');
		} else {
			showMessage(DELETE_FAIL);
		}
	},

}