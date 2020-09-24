/*
Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por
cima de algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

	function getRandomColor() {
	 var letters = "0123456789ABCDEF";
	 var color = "#";
	 for (var i = 0; i < 6; i++) {
	 color += letters[Math.floor(Math.random() * 16)];
	 }
	 return color;
	}

	var newColor = getRandomColor();
*/

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
 	
 	return color;
}

var btnElement = document.querySelector('#botao');

btnElement.onclick = function(){
	var redSquare = document.createElement('div');
	redSquare.setAttribute('class','redSquare');


	redSquare.style.width = '100px';
	redSquare.style.height = '100px';
	redSquare.style.backgroundColor = '#f00';


	var containerElement = document.querySelector('#app');
	containerElement.appendChild(redSquare);


	redSquare.onmouseover = function() {
		var newColor = getRandomColor();

		redSquare.style.backgroundColor = newColor;
	}
}