// filter --> filtrar os valores de array
// filter recebe um callback
// filter -> sempre retornar um array, com a mesma quantidade de elementos ou menos

const num = [3, 6, 7, 8, 9, 1, 3, 54, 8, 9, 4]

// filtrar numeros maiores que 4 do array anterior
//onst num1 =  num.filter();

// como funciona --> itera sobre os elementos do array
function callbackFilter(valor, indice, array) {
    return valor > 4;

}

// filtrar numeros maiores que 4 do array anterior
const num2 =  num.filter(callbackFilter);
console.log(num2);

// assim tmbm seria uma função de callback --> anônima
const num3 = num.filter(valor => valor > 4);
console.log(num3);

const pessoas = [
    { nome: 'jessica', idade: 25 },
    { nome: 'luiz', idade: 11 },
    { nome: 'Maurício', idade: 44},
    { nome: 'loana', idade: 40}
]

// filtrando idade maior que 30 - duas formas de fazer
const fil = pessoas.filter(valor => valor.idade > 30)

console.log(fil)


const fil_2 = pessoas.filter(valor => {
    if (valor.idade > 30) return valor.idade
})

console.log(fil_2)

// filtrar pessoas que o nome termina com 'a'
const terminaComa = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))

console.log(terminaComa)