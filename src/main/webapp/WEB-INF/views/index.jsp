<html>
<head>
    <title>Gestione Spese</title>

    <script src="/GestioneSpese/resources/js/jquery-latest.js"></script>
    <script src="/GestioneSpese/resources/js/jquery-ui.js"></script>
    <script src="/GestioneSpese/resources/js/primeui.js"></script>
    <script src="/GestioneSpese/resources/js/spesaFrontController.js"></script>
    <script src="/GestioneSpese/resources/js/tipospesaFrontController.js"></script>
    <script src="/GestioneSpese/resources/js/homeFrontController.js"></script>
    <link rel="stylesheet" type="text/css" href="/GestioneSpese/resources/css/theme.css" />
    <link rel="stylesheet" type="text/css" href="/GestioneSpese/resources/fo-aw/css/font-awesome.css" />
    <link rel="stylesheet" type="text/css" href="/GestioneSpese/resources/css/primeui.css" />

</head>

<body>

<div id="message"></div>

<div id="confirmDelete" style="display:none;">
Confermi la cancellazione di questo elemento?
</div>

<div id="editorData" style="display:none">
<h2 id="editorCaption"></h2>
<div class="ui-grid ui-grid-responsive">
    <div class="ui-grid-row">
        <div class="ui-grid-col-6">ID</div>
        <div class="ui-grid-col-6">
			<input id="txtIdSpesa" type="text" />
		</div>
    </div>
</div>
<div class="ui-grid ui-grid-responsive">
	<div class="ui-grid-row">
        <div class="ui-grid-col-6">Descrizione</div>
        <div class="ui-grid-col-6">
			<input id="txtDescrizione" type="text" />
		</div>
    </div>
</div>
<div class="ui-grid ui-grid-responsive">
    <div class="ui-grid-row">
        <div class="ui-grid-col-6">Importo</div>
        <div class="ui-grid-col-6">
			<input id="txtImporto" type="text" />
		</div>
    </div>
</div>
<div class="ui-grid ui-grid-responsive">
    <div class="ui-grid-row">
        <div class="ui-grid-col-6">Data</div>
        <div class="ui-grid-col-6">
			<input id="txtData" type="text" />
		</div>
    </div>
</div>
<div class="ui-grid ui-grid-responsive">
    <div class="ui-grid-row">
        <div class="ui-grid-col-6">Tipo Spesa</div>
        <div class="ui-grid-col-6">
			<input id="txtTipospesa" type="text" />
			<input id="hddIdTipospesa" type="hidden" />
		</div>
    </div>
</div>
</div>

<div id="tblSpese"></div>

</body>    
</html>
