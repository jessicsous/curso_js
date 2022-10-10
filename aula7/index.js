// não podemos criar constantes com palavras reservadas
// constantes precisam ter nomes significativos
// o nome das constantes não podem conter espaços ou traços
// para nomes compostos utilizamos camelCase
// Case-sensitive = letra maiúscula e letra minúscula faz diferença
// não podemos modificar o valor de uma constante
// não utilizar var, utilize const

const nome = 'Jéssica';
console.log(nome);

// + - * /
const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5; 

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

// saber o tipo de um dado

console.log(typeof primeiroNumero);
console.log(typeof (primeiroNumero+segundoNumero))

