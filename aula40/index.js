// For in

const frutas = ['pera', 'maçã', 'uva']; // array também chamado de vetor

//for (let i = 0; i < frutas.length; i++) {  iteração para o array com for clássico
//    console.log(frutas[i]);
//}

for (let i in frutas) {// outra maneira de fazer a iteração
    console.log(i);
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Jessica',
    sobrenome: 'Silva',
    idade: 25
};

console.log(pessoa.nome); // acessando valor da chav
const chave = 'nome'
console.log(pessoa[chave]); // acessando valor da chave


for (let key in pessoa) {
    console.log(key)
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}