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