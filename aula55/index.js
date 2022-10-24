// retorno de função --> return
// retorna um valor
// termina a função
// quando uma função não retorna nada ela retorna undefined

function soma(a, b) {
    return a + b; 
}

console.log(soma(6, 6));

// função que não retorna nada
function soma2(a, b) {
    console.log(a + b);  // isso não é retorno, somente exibe algo na tela
}

soma2(7, 8)

// função que retorna um objeto
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome};
}
const pessoa = criaPessoa('jessica', 'Silva');
// a linha acima é exatamente igual a linha abaixo, a diferença é que a função faz o trabalho na linha acima
// na linha abaixo, as pessoas são criadas de forma manual
const pessoa2 = {
    nome: 'jessica',
    sobrenome: 'silva'
}; // a expressão tem sinal de igual '=' por isso usar ponto e vírgula

console.log(pessoa);
console.log(pessoa2);

