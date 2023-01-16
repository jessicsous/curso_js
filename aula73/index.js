const num = [3, 6, 7, 8, 9, 1, 3, 54, 8]
let total = 0;

num.forEach(valor => {
    total += valor;
});

console.log(total);

num.forEach(valor => {
    total = valor * 2;
});

console.log(total)

num.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});
