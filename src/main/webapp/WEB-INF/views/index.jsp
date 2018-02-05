<html>
<head>
<title>Gestione Spese</title>

<script src="/GestioneSpese/resources/js/primeui-all.js"></script>
<script src="/GestioneSpese/resources/js/spesaFrontController.js"></script>
<script src="/GestioneSpese/resources/js/tipospesaFrontController.js"></script>
<script src="/GestioneSpese/resources/js/homeFrontController.js"></script>
<link rel="stylesheet" type="text/css" href="/GestioneSpese/resources/css/theme.css" />
<link rel="stylesheet" type="text/css" href="/GestioneSpese/resources/fo-aw/css/font-awesome.css" />
<link rel="stylesheet" type="text/css" href="/GestioneSpese/resources/css/primeui-all.css" />

</head>

<body>

	<div id="message"></div>

	<div id="confirmDelete" style="display: none;">
		<p style="margin-top: 5px; margin-bottom: 5px;">Confermi la
			cancellazione di questo elemento?</p>
	</div>

	<div id="editorData" style="display: none">
		<h3 id="editorCaption"></h3>
		<div class="ui-grid ui-grid-responsive"
			style="margin-top: 5px; margin-bottom: 5px;">
			<div class="ui-grid-row" id="idRowDiv">
				<div class="ui-grid-col-6">ID</div>
				<div class="ui-grid-col-6">
					<input id="txtIdSpesa" type="text" size="7" disabled="disabled" />
				</div>
			</div>
			<div class="ui-grid-row" style="margin-top: 5px; margin-bottom: 5px;">
				<div class="ui-grid-col-6">Descrizione</div>
				<div class="ui-grid-col-6">
					<input id="txtDescrizione" type="text" />
				</div>
			</div>
			<div class="ui-grid-row" style="margin-top: 5px; margin-bottom: 5px;">
				<div class="ui-grid-col-6">Importo</div>
				<div class="ui-grid-col-6">
					<input id="txtImporto" type="text" size="7" />
				</div>
			</div>
			<div class="ui-grid-row" style="margin-top: 5px; margin-bottom: 5px;">
				<div class="ui-grid-col-6">Data</div>
				<div class="ui-grid-col-6">
					<input id="txtData" type="text" />
				</div>
			</div>
			<div class="ui-grid-row" style="margin-top: 5px; margin-bottom: 5px;">
				<div class="ui-grid-col-6">Tipo Spesa</div>
				<div class="ui-grid-col-6">
					<input id="txtTipospesa" type="text" /> <input id="hddIdTipospesa"
						type="hidden" />
				</div>
			</div>
		</div>
	</div>

	<div id="tblSpese"></div>

</body>
</html>
