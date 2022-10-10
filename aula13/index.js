  
let umaString = 'um texto';
let escaparCaracter = "um \"texto\""; // --> pra quando precisar usar aspas duplas ou simples dentro e fora

console.log(umaString);
console.log(escaparCaracter);

// no js strings são indexadas, por serem iteráveis --> ou seja, cada caractere tem um índice
                   01234567
let outraString = 'um texto';

console.log(outraString[5]); // --> para pegar um valor ou número específico dentro da variável

console.log(outraString.charAt(6)); // --> retorna elemento da posição 6
console.log(outraString.concat(' em', ' um')); // --> concatena palavras à string
console.log(outraString.indexOf('texto')); // --> encontrar onde começa a palavra existente dentro da variável
console.log(outraString.lastIndexOf('texto')); // --> semelhante ao anterior, porém começa de trás pra frente
console.log(outraString.match(/[a-z]/g)); // --> expressões regulares
console.log(outraString.search(/x/)); // --> encontrar onde está o x
console.log(outraString.replace('um', 'outra')); // --> substituir uma palavra por outra
console.log(outraString.replace(/t/, '#')); // --> usando expressões regulares para substituir uma expressão por outra, nesse caso só substitui a primeira
console.log(outraString.replace(/t/g, '#')); // --> usando a flag 'g', não substitui apenas a primeira, mas todas as demais
console.log(outraString.length); // --> verificar o tamanho da string
console.log(outraString.slice(2, 9)); // --> usado para fatiar a string, com o objetivo de achar uma expressão específica, sempre pegar um índice a mais para pegar uma palavra específica
console.log(outraString.slice(-2)); // --> seleciona os ultimos elementos da string
console.log(outraString.split(' ')); // --> dividi a string em todos os espaços
console.log(outraString.toUpperCase()); // --> transforma a string em maiúscula
console.log(outraString.toLowerCase()); // --> transforma tudo em minúsculo
