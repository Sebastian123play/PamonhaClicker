var score = 0;
var quantidadeDeDinheiro = 50;

var quantidadeDePamonhaParaAumentar = 1;
var custoParaDuplicarPamonhaGain = 30;


var geradorDeDinheiro_custo = 30;
var geradorDeDinheiro_quantidade = 0;

var pamonhaLoja_custo = 1000000;
var pamonhaLoja_quantidade = 0;

var pamonhaVendida = 0;
var quantidadeDePamonhaInfinita = 0;
			
var geradorDePamonha_custo = 1;
var geradorDePamonha_quantidade = 0;
var geradorDePamonha_PorSegundo = 0;

function addScore(quantidadeDePamonhaParaAumentar) {
	if(quantidadeDeDinheiro > 1) {
		score = score+quantidadeDePamonhaParaAumentar;
		quantidadeDeDinheiro = quantidadeDeDinheiro - 2;
		document.getElementById("score").innerHTML = score;
		document.getElementById("quantidadeDeDinheiro").innerHTML = quantidadeDeDinheiro;
	}else{
		alert("Você não tem dinheiro suficiente");
	}
				
}
function saveGame() {
	var gameFile = {
		score: score,
		quantidadeDeDinheiro: quantidadeDeDinheiro,
		quantidadeDePamonhaParaAumentar: quantidadeDePamonhaParaAumentar,
		custoParaDuplicarPamonhaGain: custoParaDuplicarPamonhaGain,
		geradorDeDinheiro_custo: geradorDeDinheiro_custo,
		geradorDeDinheiro_quantidade: geradorDeDinheiro_quantidade,
		pamonhaLoja_custo: pamonhaLoja_custo,
		pamonhaLoja_quantidade: pamonhaLoja_quantidade,
		pamonhaVendida: pamonhaVendida,
		quantidadeDePamonhaInfinita: quantidadeDePamonhaInfinita,
		geradorDePamonha_quantidade: geradorDePamonha_quantidade,
		geradorDePamonha_custo: geradorDePamonha_custo,
		geradorDePamonha_PorSegundo: geradorDePamonha_PorSegundo
	}
	localStorage.setItem("gameFile", JSON.stringify(gameFile));
}
function loadGame() {
	var savedGame = JSON.parse(localStorage.getItem("gameFile"));
	if(typeof savedGame.score !== "undefined") score = savedGame.score;
	if(typeof savedGame.quantidadeDeDinheiro !== "undefined") quantidadeDeDinheiro = savedGame.quantidadeDeDinheiro;
	if(typeof savedGame.quantidadeDePamonhaParaAumentar !== "undefined") quantidadeDePamonhaParaAumentar = savedGame.quantidadeDePamonhaParaAumentar;
	if(typeof savedGame.custoParaDuplicarPamonhaGain !== "undefined") custoParaDuplicarPamonhaGain = savedGame.custoParaDuplicarPamonhaGain;
	if(typeof savedGame.geradorDeDinheiro_custo !== "undefined") geradorDeDinheiro_custo = savedGame.geradorDeDinheiro_custo;
	if(typeof savedGame.geradorDeDinheiro_quantidade !== "undefined") geradorDeDinheiro_quantidade = savedGame.geradorDeDinheiro_quantidade;
	if(typeof savedGame.pamonhaLoja_custo !== "undefined") pamonhaLoja_custo = savedGame.pamonhaLoja_custo;
	if(typeof savedGame.pamonhaLoja_quantidade !== "undefined") pamonhaLoja_quantidade = savedGame.pamonhaLoja_quantidade;
	if(typeof savedGame.pamonhaVendida !== "undefined") pamonhaVendida = savedGame.pamonhaVendida;
	if(typeof savedGame.quantidadeDePamonhaInfinita !== "undefined") quantidadeDePamonhaInfinita = savedGame.quantidadeDePamonhaInfinita;
	if(typeof savedGame.geradorDePamonha_custo !== "undefined") geradorDePamonha_custo = savedGame.geradorDePamonha_custo;
	if(typeof savedGame.geradorDePamonha_quantidade !== "undefined") geradorDePamonha_quantidade = savedGame.geradorDePamonha_quantidade;
	if(typeof savedGame.geradorDePamonha_PorSegundo !== "undefined") geradorDePamonha_PorSegundo = savedGame.geradorDePamonha_PorSegundo;
}
function addDinheiro(quantidade) {
	quantidadeDeDinheiro = quantidadeDeDinheiro + 1;
			
			
	document.getElementById("quantidadeDeDinheiro").innerHTML = quantidadeDeDinheiro;
}
function doublePamonhaGain() {
	if(quantidadeDeDinheiro >= custoParaDuplicarPamonhaGain) {
		quantidadeDeDinheiro = quantidadeDeDinheiro - custoParaDuplicarPamonhaGain;
		quantidadeDePamonhaParaAumentar = quantidadeDePamonhaParaAumentar * 2;
		custoParaDuplicarPamonhaGain = Math.round(custoParaDuplicarPamonhaGain * 1.15);
		document.getElementById("quantidadeDeDinheiro").innerHTML = quantidadeDeDinheiro;
		document.getElementById("custoParaDuplicarPamonhaGain").innerHTML = custoParaDuplicarPamonhaGain;
		document.getElementById("multiplicadorDePamonha").innerHTML = quantidadeDePamonhaParaAumentar;
	}
}
function comprarGeradorDeDinheiro() {
	if(quantidadeDeDinheiro >= geradorDeDinheiro_custo) {
		quantidadeDeDinheiro = quantidadeDeDinheiro - geradorDeDinheiro_custo;
		geradorDeDinheiro_quantidade = geradorDeDinheiro_quantidade + 1;
		geradorDeDinheiro_custo = Math.round(geradorDeDinheiro_custo * 1.15);
		
		document.getElementById("quantidadeDeDinheiro").innerHTML = quantidadeDeDinheiro;
		document.getElementById("geradorDeDinheiro_custo").innerHTML = geradorDeDinheiro_custo;
		document.getElementById("geradorDeDinheiro_quantidade").innerHTML = geradorDeDinheiro_quantidade;
	}else{
		alert("Você não tem dinheiro suficiente");
				}
			
}
window.onload = function() {
	loadGame();
	document.getElementById("score").innerHTML = score;
	document.getElementById("quantidadeDeDinheiro").innerHTML = quantidadeDeDinheiro;
	document.getElementById("pamonhaVendida").innerHTML = pamonhaVendida;

	document.getElementById("custoParaDuplicarPamonhaGain").innerHTML = custoParaDuplicarPamonhaGain;
	document.getElementById("multiplicadorDePamonha").innerHTML = quantidadeDePamonhaParaAumentar;
	document.getElementById("geradorDeDinheiro_custo").innerHTML = geradorDeDinheiro_custo;
	document.getElementById("geradorDeDinheiro_quantidade").innerHTML = geradorDeDinheiro_quantidade;
	document.getElementById("pamonhaLoja_custo").innerHTML = pamonhaLoja_custo;
	document.getElementById("pamonhaLoja_quantidade").innerHTML = pamonhaLoja_quantidade;
	document.getElementById("GeradorDePamonha_custo").innerHTML = geradorDePamonha_custo;
	document.getElementById("GeradorDePamonha_quantidade").innerHTML = geradorDePamonha_quantidade;
	document.getElementById("GeradorDePamonha_PorSegundo").innerHTML = geradorDePamonha_PorSegundo;
	if(quantidadeDePamonhaInfinita >= 1) {
		document.getElementById("quantidadeDePamonhaInfinita_texto").innerHTML = 'Quantidade de pamonhas infinitas: ';
		document.getElementById("quantidadeDePamonhaInfinita").innerHTML = quantidadeDePamonhaInfinita;
	}
				
};
setInterval(function() {
	quantidadeDeDinheiro = quantidadeDeDinheiro + geradorDeDinheiro_quantidade;
	document.getElementById("quantidadeDeDinheiro").innerHTML = quantidadeDeDinheiro;
}, 1000); //1000ms = 1 segundo;
			
function pamonhaLoja() {
	if(score >=pamonhaLoja_custo) {
		score = score - pamonhaLoja_custo;
		pamonhaLoja_quantidade = pamonhaLoja_quantidade + 1;
		pamonhaLoja_custo = Math.round(pamonhaLoja_custo * 2);
					
		document.getElementById("score").innerHTML = score;
		document.getElementById("pamonhaLoja_custo").innerHTML = pamonhaLoja_custo;
		document.getElementById("pamonhaLoja_quantidade").innerHTML = pamonhaLoja_quantidade;
	}
}
setInterval(function() {
	if(score >= 1) {
		pamonhaVendida = pamonhaVendida + pamonhaLoja_quantidade;
		score = score - pamonhaLoja_quantidade;
	}
	document.getElementById("pamonhaVendida").innerHTML = pamonhaVendida;
	document.getElementById("score").innerHTML = score;
}, 1000);
			
function pamonhaInfinita() {
	if(pamonhaVendida >= 10000) {
		quantidadeDePamonhaInfinita = quantidadeDePamonhaInfinita + 1;
		score = 0;
		quantidadeDeDinheiro = 50;
		pamonhaVendida = 0;
		custoParaDuplicarPamonhaGain = 30;
		quantidadeDePamonhaParaAumentar = 1;
		geradorDeDinheiro_custo = 30;
		geradorDeDinheiro_quantidade = 0;
		pamonhaLoja_custo = 1000000;
		pamonhaLoja_quantidade = 0;
					
		document.getElementById("score").innerHTML = score;
		document.getElementById("quantidadeDeDinheiro").innerHTML = quantidadeDeDinheiro;
		document.getElementById("pamonhaVendida").innerHTML = pamonhaVendida;
		document.getElementById("quantidadeDePamonhaInfinita").innerHTML = quantidadeDePamonhaInfinita;
		document.getElementById("custoParaDuplicarPamonhaGain").innerHTML = custoParaDuplicarPamonhaGain;
		document.getElementById("multiplicadorDePamonha").innerHTML = quantidadeDePamonhaParaAumentar;
		document.getElementById("geradorDeDinheiro_custo").innerHTML = geradorDeDinheiro_custo;
		document.getElementById("geradorDeDinheiro_quantidade").innerHTML = geradorDeDinheiro_quantidade;
		document.getElementById("pamonhaLoja_custo").innerHTML = pamonhaLoja_custo;
		document.getElementById("pamonhaLoja_quantidade").innerHTML = pamonhaLoja_quantidade;
		document.getElementById("ganharPamonhaInfinita").innerHTML = '';
		document.getElementById("quantidadeDePamonhaInfinita_texto").innerHTML = 'Quantidade de pamonhas infinitas: ';
	}
}
			
setInterval(function() {
	if(pamonhaVendida >= 10000) {
		document.getElementById("ganharPamonhaInfinita").innerHTML = '<table class="ConseguirPamonhaInfinita_row" onclick="pamonhaInfinita()"><tr><td><img src="imagens/infinito.jpg" id="imagemDoInfinito" height="64px" width="64px"></td><td id="Informação"><p>Ganhar 1 pamonha infinita</p><p>Custa 10 mil pamonhas vendidas</p><p>Resete tudo para ganhar uma</p></td></tr></table>';
	}
},1000);
setInterval(function() {
	saveGame();
},15000);