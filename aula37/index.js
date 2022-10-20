/*
estrutura de repetição
estrutura do for
for () {
  
}
*/

// repetição não recomendada
console.log('linha 1');
console.log('linha 2');
console.log('linha 3');
console.log('linha 4');
console.log('linha 5');

// forma eficiente de fazer a repetição anterios
//   inicialização da variável --> let i = 0 --> variável de controle
//   condição --> i <= 5 --> variável de controle --> enquanto a condição for verdadeira o laço vai ser executado
//   incremento --> i++ --> para o i chegar até a condição
//   i = index
// esse bloco de código é executado em loop até que a condição seja avaliada como falsa
for (let i = 0; i <= 5; i++) {
  console.log(`linha ${i}`);
} // bloco do for não tem ponto e vírgula no final

// conta de 10 em 10
for (let i = 400; i <= 500; i += 10) { 
    console.log(`linha ${i}`);
}

// DE TRAS PRA FRENTE
for (let i = 500; i >= 400; i -= 10) { 
    console.log(`linha ${i}`);
}

// verificando se o numero é par ou impar
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}


// passando pelos valores do array com for
//                0        1      2
const frutas = ['maçã', 'pêra', 'uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}