/*
* Avaliação de Curto-Circuito (Short-Circuit)

false --> falso literal
0     --> avaliado como falso
'' "" `` --> avaliado como falso
null / undefined --> avaliado como falso
NaN --> avaliado como falso
*/
console.log('Jessica' && true && 'Maria'); // retorna a ultima expressão (todas as expressões são verdadeiras)
console.log('Jessica' && true && NaN);     // retorna o valor falso da expressão (NaN)
console.log('Jessica' && 0 && 'Maria');    // retorna o valor falso da expressão (0)

function falaOi () {
    return 'oi';
}

// condição para execução 

const executar = false; 

console.log(executar && falaOi()); // avaliação de curto circuito

const executar1 = true; 

console.log(executar1 && falaOi());

// com OR --> ||
console.log(0 || false || null || 'Jéssica Silva' || true); // retorna o primeiro valor verdadeiro que encontrar

// exemplo
const corUsuario = null;
const corPadrao = corUsuario || 'red';

const corUsuario2 = 'red';
const corPadrao2 = corUsuario || 'blue';

console.log(corPadrao); // retorna a cor que o usuário escolher, se não escolher nada retorna a cor padão
console.log(corPadrao2);
