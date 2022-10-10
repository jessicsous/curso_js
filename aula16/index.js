let num1 = 9.545444; 
let num2 = Math.floor(num1); // --> arredondando para baixo
console.log(num2);
let num3 = Math.ceil(num1); // --> arredonda para cima
console.log(num3);
let num4 = Math.round(); // --> retorna um número arredondado para o mais próximo, da metade pra cima, arredonda pra cima
console.log(num4);

console.log(Math.max(1, 3, -8, -6, 4, 2000)); // --> pega o maior número da sequência
console.log(Math.min(1, 3, -8, -6, 4, 2000)); // --> pega o menor número da sequência
console.log(Math.random()); // --> gera números aleatórios entre 0 e 1, sendo que o 1 nunca será incluído

const aleatorio = Math.random() * (10 - 5) + 5; // --> número aleatório entre 10 e 5
console.log(aleatorio); 

const casaDecimal = Math.round(Math.random() * (10 - 5) + 5); // --> número aleatório entre 10 e 5 sem as casas decimais
console.log(casaDecimal);

console.log(Math.pow(2, 10)); // --> potenciação --> 2^10
console.log(2 ** 10); // --> semelhante ao anterior

let num5 = 9;
console.log(num5 ** (1/2)); // --> raiz quadrada de 9
console.log(num5 ** 0,5); // --> raiz quadrada de 9

// em js é possível dividir um número por zero, porque no js existe um tipo de dado chamado Infinity --> numero muito grande que chega ao infinito
console.log(100 / 0);