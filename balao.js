//1 Criar balão
//2 Estourar o balão
//3 Carregar o jogo

// remover se não for clicado em um tempo
// botão iniciar, reiniciar e parar

var total = 0;
var dificuldade = 0;
var timer = null;

function criarBalao(){
	var balao = document.createElement("div");
	balao.setAttribute("class","balao"); //nome da classe vai ser balao.

	//Eixos x e y
	var x = Math.floor(Math.random()* 800);
	var y = Math.floor(Math.random()* 400);

	balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;"); //atribuiu valores no style do balão.
	balao.setAttribute("onclick", "estourar(this)");//valor do onclick, this referencia o balão.

	document.body.appendChild(balao);

}

function estourar(objeto){
	document.body.removeChild(objeto);

	total++;

	var score = document.getElementById('total');
	score.innerHTML = "Baloes estourados: " + total;
}

function carregarJogo(){
	
	var pausar = document.getElementById('pausar')
	if(this.timer == null){
		this.timer = setInterval(criarBalao,1000);// De 1 em 1 segundo vai criar um balão
		pausar.innerHTML = "Pause"
	} else{
		clearInterval(this.timer);
		this.timer = null;
		pausar.innerHTML = "Resume"
	}
	
}
