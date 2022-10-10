let num1 = 1; // number
let num2 = 2.5; // number
let num3 = 10.6577383838383;
let num4 = 10;

console.log(num1.toString() + num2); // toString --> converter um número para string. --> concatenação --> alterção que só funciona até a operação
console.log(typeof num1);

num1 = num1.toString(); // --> mudança real do numero para string
console.log(typeof num1);

num2 = num2.toString(2); // --> transforma para binário
console.log(num2);

num3 = num3.toFixed(2); // --> arredonda pra quantidade de casas decimais que tem no parêneses
console.log(num3);

num4 = Number.isInteger(num4); // --> checando se é um número inteiro
console.log(num4); // retorna true ou false.

let temp = num3 * 'invalido';
console.log(Number.isNaN(temp)); // --> checando se a conta é inválida; retorna true ou false

let num5 = 0.7; // number
let num6 = 0.1; // number

num5 += num6;
num5 += num6;
num5 += num6;

// num5 = num5.toFixed(2); // --> tentando tirar a imprecisão

console.log(num5);
console.log(Number.isInteger(num5)); // -->> mesmo tirando as casas decimais continua não sendo um número inteiro

// resolução do problema anterior
num7 = parseFloat(num5.toFixed(2));
console.log(num7);
console.log(Number.isInteger(num7));


