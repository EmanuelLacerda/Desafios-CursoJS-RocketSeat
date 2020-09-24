/*
A partir do seguinte vetor:
	var nomes = ["Diego", "Gabriel", "Lucas"];

Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
	● Diego
	● Gabriel
	● Lucas
*/

var nomes = ["Diego", "Gabriel", "Lucas"];

var ulElement = document.querySelector('.lista-nao-ordenada');

for (var i=0;i<nomes.length;i++){
	var liElement = document.createElement('li');

	var text = document.createTextNode(nomes[i]);
	liElement.appendChild(text);

	ulElement.appendChild(liElement);
}