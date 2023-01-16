// filter + map + reduce

// retorne a soma do dobro de todos os pares
// 1 -> filtrar pares
// 2 -> dobrar os valores
// 3 -> reduzir (soma tudo)

// 1
const num = [3, 6, 7, 8, 9, 1, 3, 54, 8]

const numerosPares = num.filter(function(valor){
    return valor % 2 === 0;
})
console.log(numerosPares)

// outra forma
const numerosPares_1 = num.filter(valor => valor % 2 === 0)
console.log(numerosPares_1)

// unindo tudo 
const numeroPares_2 = num.filter(function(valor){
    return valor % 2 === 0;
}).map(function(valor) {
    return valor * 2
}).reduce(function(acumulador, valor){
    return acumulador + valor;
})
console.log(numeroPares_2)

// arrow function
const numerosPares_3 = num
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((acumulador, valor) => acumulador + valor);
console.log(numerosPares_3)