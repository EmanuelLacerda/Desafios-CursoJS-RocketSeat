/*
Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um
quadrado vermelho com 100px de altura e largura. Sempre que o botão for clicado um
novo quadrado deve aparecer na tela.
*/

var btnElement = document.querySelector('#botao');

btnElement.onclick = function(){
	var containerElement = document.querySelector('#app');

	var redSquare = document.createElement('div');

	redSquare.setAttribute('class','redSquare');

	redSquare.style.width = '100px';
	redSquare.style.height = '100px';
	redSquare.style.backgroundColor = '#f00';

	containerElement.appendChild(redSquare);
}
