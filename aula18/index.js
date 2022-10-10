// array --> lista --> coleção de coisas
const coisas = ['Jessica', 'Maria', 'fulano', 2, true, null]; // array recebem todos os tipos de dados

//                 0         1         2
const alunos = ['Jessica', 'Maria', 'fulano']; // --> arrays são indexados por elemento
console.log(alunos[0]); // forma de acessar elementos de arrays

alunos[0] = 'Lucas'; // editando o indice 0 do array
alunos[3] = 'Silva'; // adicionando elementos no array

alunos[alunos.length] = 'adicionando ultimo elemento'; // forma mais eficaz de adicionar elementos em um array
console.log(alunos)
alunos.push('ao final'); // adicionando palavras ao array de forma automática
alunos.unshift('no começo'); // adicionando elemento no começo do array
alunos.shift(); // remove primeiro elemento 
alunos.pop(); // removendo o ultimo elemento do array

delete alunos[1]; // outra forma de deletar elementos, porém fica um espaço vazio

const removido = alunos.pop(); // elemento removido do array

// fatiando arrays

console.log(alunos.slice(0,2));

console.log(typeof alunos);
console.log(alunos instanceof Array); // alunos é uma instancia de array, retorna true ou false