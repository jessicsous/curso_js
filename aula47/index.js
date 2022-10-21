/* 
Escrever uma função que recebe um número e retorne
se o numero é divisível por 3 = fizz
se o numero é divisivel por 5 = buzz
se o numero é divisivel por 3 e 5 = fizzbuzz
checar se o numero é realmente um numero = retorna o próprio numero
função com numeros de zero a 100
*/

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'fizzbuzz';
    if (numero % 3 === 0) return 'fizz';
    if (numero % 5 === 0) return 'buzz';
    return numero; 
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}
    