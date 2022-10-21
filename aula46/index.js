/*
Escrever uma função que recebe dois argumentos,
largura e altura
de uma imagem (number).
retorne true se a imagem estiver no modo paisagem.
*/

function foto(largura, altura) {
    return largura > altura ? true : false;
}

console.log(foto(10, 15)); // retorna false
console.log(foto(15, 10)); // retorna true

// no caso da função acima, a checagem d condição ja retorna true ou false
// portanto não precisa especificar esses valores

function foto2(largura, altura) {
    return largura > altura;  // o retorno é true ou false
}

console.log(foto2(15, 10)); // retorna true

// pra retornar foto quadrada como verdadeiro

function foto3(largura, altura) {
    return largura >= altura; // o retorno é true ou false. Maior ou igual abrange os tamanhos iguais, no caso a foto quadrada
}

console.log(foto3(10, 10)); // retorna true

// com arrow function
const foto4 = (largura, altura) => 
    largura > altura;

console.log(foto4(40, 20));    