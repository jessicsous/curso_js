// reduz o array em um único elemento

const pessoas = [
    { nome: 'jessica', idade: 25 },
    { nome: 'luiz', idade: 11 },
    { nome: 'Maurício', idade: 44},
    { nome: 'loana', idade: 40}
]

// verifica no array, a pessoa com maior idade

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador
    return valor
});

console.log(maisVelha)