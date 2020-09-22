/*
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
	function pares(x, y) {
	 // código aqui
	}
	pares(32, 321);
*/

function pares(x, y) {
	var quantidade_de_pares_entre_x_e_y = 0;

	for (var i=x;i<=y;i++){
		if (i%2 == 0){
			quantidade_de_pares_entre_x_e_y += 1;
		}
	}

	console.log("Existe "+quantidade_de_pares_entre_x_e_y+" números pares entre "+x+" e "+y+".")
}

pares(32, 321);