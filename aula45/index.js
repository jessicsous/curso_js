// Escreva uma função que recebe 2 números e retorne o maior deles

function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(max(1,2));

// refatorando
function max(x, y) {
    if (x > y) return x;
    return y;

    //ou
    return x > y ? x : y;
}

// com arrow function
const max2 = (x, y) => {
    return x > y ? x : y;
};

console.log(max2(10, 30));

// outra forma
const max3 = (x, y) => x > y ? x : y;
console.log(max3(2,4));