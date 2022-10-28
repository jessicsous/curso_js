//concatenando array

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
// const a3 = num1 + num2 assim da errado
const a4 = num1.concat(num2);
console.log(a4);


// melhor maneira de fazer concatenação
// com spread operator ... --> funciona também com objeto
const a = [...num1, ...num2, ...[7, 8, 9]]; // espalha o primeiro array, depois espalha o segundo array
console.log(a);