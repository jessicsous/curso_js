// Break e continue --> para usar em laços
// continue --> continua para próxima iteração
// break --> sai do laço


const numeros = [1,2,3,5,6,7];

for (let numero of numeros) {

    if (numero === 2) {
        continue;  // pula pra próxima iteração do laço, não executando oq está abaixo --> nesse caso vai pular o 2
    }

    if (numero === 7) {
        break;  // sai do bloco --> não executa mais nada nem entra novamente na iteração
    }
    console.log(numero);
}

// com while
let i = 0;
while (i < numeros.length) {
    let numero = numero[i];

    if (numero === 2) {
        console.log('pular o 2');
        i++;
        continue;
    }

}