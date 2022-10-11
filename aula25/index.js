/*
Operadores Lógicos
&& -> AND -> E
|| -> OR  -> OU
!  -> NOT -> NÃO
*/

console.log(true && true); // duas comparações sobre lguma coisa (as duas precisam ser verdadeiras para a espressão retornar true)
console.log(true && true && true && false); // todas as expressões precisam ser veerdadeiras para true
console.log(true || false); // pelo menos uma precisa ser true para a expressão retornar true
console.log(false || false); // retorna false
console.log(true || false || false || false || false); // retorna verdadeiro

const usuario = 'Jessica';
const senha = '123456';

const vailogar = usuario === 'Jessica' && senha === '123456';
console.log(vailogar);

const vailogar1 = usuario === 'Jessica' || senha === '123';
console.log(vailogar1);

// o ! inverte uma expressão
console.log(!false); // retorna true
console.log(!true);  // retorna false
console.log(!!false);// volta ser false
console.log(!!true); // volta ser verdadeiro