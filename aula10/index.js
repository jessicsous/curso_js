// tipos de dados primitivos
// string, number, undefined, null, boolean

const nome = 'Jéssica'; // string
const nome1 = "jessica Silva"; // string 
const nome2 = `Jessica Sousa`; // string
const num1 = 10; // number
const num2 = 10.5 // number
let nomeAluno; // undefined = não aponta pra nenhum local na memória --> valor não configurado
const sobrenomeAluno = null; // nulo = não aponta pra nenhum local na memória --> ultilizado quando quiser desconfigurar uma variável: colocar como nulo
const boolean = true; // ou false --> esse tipo de dado vai além de true e false

console.log(typeof nome, nome);
console.log(typeof nome1, nome1);
console.log(typeof nome2, nome2);
console.log(typeof num1, num1);
console.log(typeof num2, num2);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof boolean, boolean);
 

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);