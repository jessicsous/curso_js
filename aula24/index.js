/* 
Operadores de comparação --> comparam valores
>    --> mior que
>=   --> maior que ou igual a
<    --> menor que
<=   --> menor que ou igual a
==   --> igualdade (valor) --> não recomendado
===  --> igualdade estrita (valor e tipo)
!=   --> diferente (valor) --> não recomendado
!==  --> diferente estrito (valor e tipo)
*/

console.log(10 > 5);  // checa se um número é igual ao outro --> isso retorna true ou false
console.log(10 >= 5); // checa se um número é maior ou igual ao outro --> se qualquer uma das duas for verdadeira, vai retornar true
console.log(10 < 11); // checa se um número e menor que o outro --> retorna boolean
console.log(10 <= 11); // checa se é menor ou igual --> se qualquer dos valores forem verdadeiros, retorna true

const num1 = 10;
const num2 = 11;
const comp = num1 < num2;
console.log(comp);

const num3 = 10;
const num4 = 11;
const comp2 = num3 == num4; // checa se um número é igual ao outro (não recomendado utilizar dois sinais '==')
console.log(comp2);

// motivo para não usar dois sinais '=='
const num5 = 10; // number
const num6 = '10'; // string
const comp3 = num5 == num6; // checa se um número é igual ao outro (não recomendado utilizar dois sinais '==')
console.log(comp3); // vai retornar verdadeiro pois está checando apenas o valor não o tipo (coeção de tipo --> converte o valor para outro)

// forma correta de fazer comparação
const num7 = 10;
const num8 = 10;
const comp4 = num7 === num8;
console.log(comp4);

// motivo para não usar '!='
const num9 = 10;
const num10 = '10';
const comp5 = num9 != num10; 
console.log(comp5); // vai retornar false (converteu string em number)

// forma correta de checar se o valor é diferente
const num11 = 10;
const num12 = '10';
const comp6 = num11 !== num12;
console.log(comp6); // retorna false







