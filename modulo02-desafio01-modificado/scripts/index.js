/*
Crie um botão que ao ser clicado remove o quadrado atual, se ele existir, e criar e
adicionar um novo quadrado, sendo que ele deve esperar 0,5 segundo antes de adicionar
o novo quadrado. O quadrado deve ter 100px de altura e largura e a sua cor pode ser uma
das seguintes três cores: #A63978, #3958A6 ou #39A698.
*/

var btnElement = document.querySelector('#botao');

function removeCurrentSquare(currentSquare, containerElement) {
	containerElement.removeChild(currentSquare);
}

function getIndexColor(colors) {
  min = Math.ceil(0);
  max = Math.floor(colors.length);
  return Math.floor(Math.random() * (max - min)) + min;
} 

function setSquareCSSStyle(square, size, color) {
	square.style.width = size;
	square.style.height = size;
	square.style.backgroundColor = color;
}

function addNewSquare(newSquare, containerElement) {
	containerElement.appendChild(newSquare);
}

btnElement.onclick = function(){
	var containerElement = document.querySelector('#app');


	var square = document.querySelector('.square');


	var delay = 0;

	if (square != null){
		removeCurrentSquare(square, containerElement);
		delay = 500;
	};


	var square = document.createElement('div');
	square.setAttribute('class','square');


	colors = ['#A63978','#3958A6','#39A698'];
	indexColor = getIndexColor(colors);


	var size = '100px', color = colors[indexColor];
	setSquareCSSStyle(square,size,color);


	setTimeout(
		function (){
			addNewSquare(square, containerElement);
		},
		delay
	);
}
