/*
Atribuição via desestruturação
*/

let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const numeros = [1, 2, 3];
[a, b, c] = numeros; // para cada índice do array está sendo atribuido o valor de uma variável

console.log(a, b, c);

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

//             0  1  2  3  4  5  6  7  8  indice
const array = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const primeiroNumero = array[0];
console.log(primeiroNumero);

// pegar elementos específicos por atribuição via desestruturação
const [primNumero, segNumero] = array;
console.log(primNumero, segNumero);

// ... rest --> para resto
// ... spread --> para espalhar
// pegar o resto do array
const [pNumero, sNumero, ...resto] = array; 
console.log(pNumero, sNumero);
console.log(resto);

// atribuição via desestruturação
const num = [1, 2, 3, 4, 5];
const [um, , tres, , cinco] = num
console.log(um, tres, cinco);

//indices de array dentro de array

//                  0          1          2         índice dos arrays
//               0  1  2    0  1  2    0  1  2      índice dos valores dentro dos arrays
const lista = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(lista[1][2]); // o primeiro umero é relacionado ao indice doo array, o segundo ao indice do valor (6)


// pegando valores por atribuição via desestruturação
const lista1 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [,[,,seis]] = lista1;
const [primeiro, segundo, terceiro] = lista1;
console.log(primeiro, segundo, terceiro);
console.log(primeiro[2], segundo[2], terceiro[2]);