/*
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
	function experiencia(anos) {
	 // código aqui
	}
	var anosEstudo = 7;
	experiencia(anosEstudo);
	// De 0-1 ano: Iniciante
	// De 1-3 anos: Intermediário
	// De 3-6 anos: Avançado
	// De 7 acima: Jedi Master
*/

function experiencia(anos) {
	if (0<=anos && anos<=1){
		console.log("Iniciante")
	} else if (1<anos && anos<=3){
		console.log("Intermediário")
	} else if(3<anos && anos<=6){
		console.log("Avançado")
	} else{
		console.log("Jedi Master")
	}
}

var anosEstudo = 7;

experiencia(anosEstudo);

/*
var teste = [0,1,2,3,4,5,6,7,8]

for (var anosEstudo=0;anosEstudo<9;anosEstudo++){
	console.log(anosEstudo)

	experiencia(anosEstudo);
}
*/