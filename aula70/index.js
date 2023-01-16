// função map altera valores do array
// monta um novo array editado

const num = [3, 6, 7, 8, 9, 1, 3, 54, 8]

// dobrando array

// duas formas, 1 - função anonima, 2 - arrow function
const dobro = num.map(function(valor){
    return valor * 2
})
console.log(dobro)

const dobroArrow = num.map(valor => valor * 2)
console.log(dobroArrow)

// Para cada elemento:
// 1 - Retorne apenas uma string com o nome da pessoa
// 2 - Remova apenas a chave "nome" do objeto
// 3 - adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'jessica', idade: 25 },
    { nome: 'luiz', idade: 11 },
    { nome: 'Maurício', idade: 44},
    { nome: 'loana', idade: 40}
]

// 1
const nomePessoa = pessoas.map(function(valor){
    return valor.nome
})
console.log(nomePessoa)

// arrow function
const nomePessoa_1 = pessoas.map(valor => valor.nome)
console.log(nomePessoa_1)

// 2

const idade = pessoas.map(function(valor){
    return {idade: valor.idade}
})
console.log(idade)

// arrow function
const idade_1 = pessoas.map(valor => ({idade: valor.idade}))
console.log(idade_1)

// 3
// dessa forma até o objeto original é alterado
// const comIds = pessoas.map(function(valor, indice){
//     valor.id = (indice + 1) * 100;
//     return valor
// })

const comIds = pessoas.map(function(valor, indice){
    const newObj = {...valor}
    newObj.id = indice
    return newObj
})

console.log(comIds)
console.log(pessoas)

