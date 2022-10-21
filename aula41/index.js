// For
const nome = 'jessica';

//iteração por --> acessar cada letra da string

// for classico
for (let i = 0; i < nome.length; i++) { // retorna o índice
    console.log(nome[i]);
}

// for in
for (let i in nome) { // retorna o índice
    console.log(nome[i]); 
    console.log(i); 
}

// for of
for (let i of nome) {
    console.log(nome[i]); // resultado undefined --> pq não retornar o índice
    console.log(i);  // vai retornar o valor
}

const array = ['jessica', 'silva', 'sousa'];

// for in para array --> retorna o índice
for (let i in array) {
    console.log(array[i]);
    console.log(i);
}

// for of para array --> retorna o valor
for (let i of array) {
    console.log(i);
}

// forEach --> retorna o valor e índice

array.forEach(function(el, indice, array) {
    console.log(el, indice, array);
});

// com objetos

const pessoa = {
    nome: 'jessica',
    sobrenome: 'silva'
};


// for in para objeto
for (let i in pessoa) {
    console.log(i, pessoa[i]);
}

// não da certo com for of