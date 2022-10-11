/*
operador ternário --> ? 
*/

const pontuacaoUsuario = 999;

// isso é igual a
if (pontuacaoUsuario >= 1000) {
    console.log('usuário vip');
} else {
    console.log('Usuário normal');
}

// isso
// (condição) ? 'valor para verdadeiro' : 'valor para falso';
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário vip': 'Usuário normal'; // --> operação ternária
console.log(nivelUsuario);

// usando || e &&
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';