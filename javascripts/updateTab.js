setInterval(function() {
	if(quantidadeDePamonhaInfinita >= 1) {
		$(".UpgradeButton_row").show();
	}
}, 1000);

function apertarUpgradeTabButton() {
	$(".UpgradeScreen_row").show();
	$(".GeradorDePamonha_row").show();
}
function fecharUpgradeTabButton() {
	$(".UpgradeScreen_row").hide();
	$(".GeradorDePamonha_row").hide();
}
function comprarGeradorDePamonha(){
	if(quantidadeDePamonhaInfinita >= geradorDePamonha_custo) {
		quantidadeDePamonhaInfinita = quantidadeDePamonhaInfinita - geradorDePamonha_custo;
		geradorDePamonha_quantidade = geradorDePamonha_quantidade + 1;
		geradorDePamonha_custo = geradorDePamonha_custo + 1;
		geradorDePamonha_PorSegundo = 2 ** geradorDePamonha_quantidade ** quantidadeDePamonhaParaAumentar;
		

		document.getElementById("GeradorDePamonha_custo").innerHTML = geradorDePamonha_custo;
		document.getElementById("GeradorDePamonha_quantidade").innerHTML = geradorDePamonha_quantidade;
		document.getElementById("GeradorDePamonha_PorSegundo").innerHTML = geradorDePamonha_PorSegundo;
		document.getElementById("quantidadeDePamonhaInfinita").innerHTML = quantidadeDePamonhaInfinita;
	}
}
setInterval(function() {
	document.getElementById("GeradorDePamonha_custo").innerHTML = geradorDePamonha_custo;
	document.getElementById("GeradorDePamonha_quantidade").innerHTML = geradorDePamonha_quantidade;
	document.getElementById("GeradorDePamonha_PorSegundo").innerHTML = geradorDePamonha_PorSegundo;
},500);
setInterval(function() {
	score = score + geradorDePamonha_PorSegundo;

	document.getElementById("score").innerHTML = score;
}, 1000);
