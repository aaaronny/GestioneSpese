<html>
<head>
<title>Gestione Spese</title>

<script src="/GestioneSpese/resources/js/primeui-all.js"></script>
<script src="/GestioneSpese/resources/js/x-tag-core.min.js"></script>
<script src="/GestioneSpese/resources/js/primeelements.min.js"></script>
<script src="/GestioneSpese/resources/js/editorManager.js"></script>
<script src="/GestioneSpese/resources/js/homeFrontController.js"></script>
<script src="/GestioneSpese/resources/js/spesaFrontController.js"></script>
<script src="/GestioneSpese/resources/js/tipospesaFrontController.js"></script>
<link rel="stylesheet" type="text/css" href="/GestioneSpese/resources/css/theme.css" />
<link rel="stylesheet" type="text/css" href="/GestioneSpese/resources/fo-aw/css/font-awesome.css" />
<link rel="stylesheet" type="text/css" href="/GestioneSpese/resources/css/primeui-all.css" />
<link rel="stylesheet" type="text/css" href="/GestioneSpese/resources/css/genericStyle.css" />

</head>

<body>

	<div id="editorContainer" style="position: absolute;"></div>
	<div id="message"></div>

	<div class="ui-grid ui-grid-responsive"
		style="margin-top: 5px; margin-bottom: 5px;">
		<div class="ui-grid-row" id="idRowDiv">
			<div class="ui-grid-col-1"></div>
			<div class="ui-grid-col-10">
				<h2>Gestione Spese 1.0</h2>
			</div>
			<div class="ui-grid-col-1"></div>
		</div>
		<div class="ui-grid-row" id="idRowDiv">
			<div class="ui-grid-col-1"></div>
			<div class="ui-grid-col-10">
				<div id="tblSpese"></div>
			</div>
			<div class="ui-grid-col-1"></div>
		</div>
		<div class="ui-grid-row" id="idRowDiv">
			<div class="ui-grid-col-1"></div>
			<div class="ui-grid-col-10" style="text-align: right">
				<button style="margin-top:-32; margin-right:15" id="bttAddSpesa" is="p-button" icon="fa-plus" onclick="editorManager.show(null)"></button>
			</div>
			<div class="ui-grid-col-1"></div>
		</div>
	</div>

</body>
</html>
