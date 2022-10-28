// função splice --> usada com array

 //              -5         -4      -3       -2         -1
 //              0          1       2       3           4
const nomes = ['jessica', 'maria', 'jose', 'lula', 'bolsonaro'];

// nomes.splice(indice, qtd del elem, elem add,);

//nomes.splice(4, 1); // do indice 4 --> um elemento --> o retorno é array
const removido = nomes.splice(4, 1);
console.log(nomes, removido);

const comNeg = nomes.splice(-2, 2); // a artir do índice -2, remove 2  --> de trás pra frente
console.log(comNeg);

console.log(nomes.splice(-3, Number.MAX_VALUE)); // a partir do -3 apaga o máximo que tiver --> frente pra trás

// adicionar coisas com splice

const add = nomes.splice(3, 0, 'silva'); // a partir do indice 3, não apaga nada, adiciona 'silva'