# Enunciado
Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

~~~javascript
function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
var newColor = getRandomColor(); // #E943F0
~~~

[Código JavaScript](https://github.com/EmanuelLacerda/Desafios-CursoJS-RocketSeat/blob/master/modulo02-desafio02/scripts/index.js)