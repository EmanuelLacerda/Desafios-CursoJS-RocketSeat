/*
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
	function temHabilidade(skills) {
	 // código aqui
	}
	var skills = ["Javascript", "ReactJS", "React Native"];
	temHabilidade(skills); // true ou false
	
	Dica: para verificar se um vetor contém um valor, utilize o método indexOf
*/

function temHabilidade(skills,habilidade_desejada) {
	return skills.indexOf(habilidade_desejada) != -1;
}

var skills = ["Javascript", "ReactJS", "React Native"];
var habilidade_desejada = "Javascript";

console.log(temHabilidade(skills,habilidade_desejada));