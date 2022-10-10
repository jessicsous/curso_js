/*  operadores Aritiméticos --> + - /
 *  + Adição e concatenação
 *  / divisão
 *  - subtração
 *  * multilicação
 *  ** potenciação --> serve pra elevar um número a uma potência 
 *  % resto da divisão
*/

// Adição
const num1 = 5; 
const num2 = 10;
console.log(num1 + num2);

// concatenação
const num3 = '5'; 
const num4 = 10;
console.log(num3 + num4);

// alterar a precedência da conta ultilizando os parênteses
const num5 = '5'; 
const num6 = 10;
console.log((num5 + num6) * num5);

/* ordem de precedência
() --> primeiro oque está dentro dos parênteses
** --> depois eleva a potência
* / % --> depois é executado a multiplicação, divisão e modulo da divisão
+ - --> depois a adição e subtração
*/

// em operações cujo sinal tem a mesma procedência, a operação é realisada de acordo com a ordem que foi escrita, da esquerda pra direita
const num7 = 6;
const num8 = 7;
const num9 = 8;
console.log(num7 * num8 / num9);

// contador com operador de incremento ++, toda vez que precisar fzer isso, usar let
// sinal pós --> primeiro executa a ação, depois incrementa o valor
let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
console.log(contador);

// sinal pré --> primeiro faz a conta depois retorna o valor
let contador1 = 1;
++contador1; // 2
++contador1; // 3
++contador1; // 4
console.log(contador1);

// diferença explicita, pós
let contador2 = 1;
console.log(contador2++);
console.log(contador2);

// diferença explicita, pré
let contador3 = 1;
console.log(++contador3);

// operador de decremento
let contador4 = 10;
console.log(--contador4);
console.log(--contador4);

// maneira mais vista
let contador5 = 1
contador5++;
console.log(contador5)

const passo = 1;
let contar = 0;

contar = contar + passo; // ou contar += passo
console.log(contar);

contar = contar + passo; // ou contar += passo
console.log(contar);

contar = contar + passo; // ou contar += passo
console.log(contar);

let multiplicador = 2;
multiplicador *= 2;
multiplicador *= 2;
multiplicador *= 2;
console.log(multiplicador);

// transformando string em número
const convert = 10;
const convert1 = parseInt('5.2'); // --> converte pra um número inteiro tirando a casa decimal 
const convert2 = parseFloat('5.2') // analisa as casas decimais
console.log(convert + convert1)

// outra forma de transformar
const convert3 = Number('5');







