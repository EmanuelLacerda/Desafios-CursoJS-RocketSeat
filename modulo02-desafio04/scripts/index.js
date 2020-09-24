/*
Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:
	<input type="text" name="nome">
	<button onClick="adicionar()">Adicionar</button>
Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique
*/

var ulElement = document.querySelector('.lista-nao-ordenada');

function criarNovoElementoDaLista(texto) {
	var liElement = document.createElement('li');

	var text = document.createTextNode(texto);
	liElement.appendChild(text);

	ulElement.appendChild(liElement);
}

function adicionar(){
	var inputElement = document.querySelector('input');

	criarNovoElementoDaLista(inputElement.value);

	inputElement.value = ''
}

var nomes = ["Diego", "Gabriel", "Lucas"];

for (var i=0;i<nomes.length;i++){
	criarNovoElementoDaLista(nomes[i]);
}