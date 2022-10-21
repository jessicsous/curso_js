// erros (try, catch, throw)
// tratando erros
// try --> siginifica 'tentar' --> por exemplo, 'tente executar o código'
// catch --> recebe o erro, a excessão lançada se o código não passar no bloco try
// não é bom exibir os erros internos para usuários finais

try {
    console.log(erro); // código errado que vai cair no catch
} catch(err) {
    console.log('erro'); // imprime a mensagem de erro que nós definiremos
    console.log(err); // não é bom exibir os erros internos para usuários finais
}

// nova forma de identificar erro
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('erro, x e y precisam ser number'); // se o erro cair aqui, o resto não será executado
        // throw executa uma mensagem de erro
        // new Error --> lança um novo erro
        // não declarar retorno aqui
    }

    return x + y; // por isso declarar aqui o retorno
 }


try { 
    console.log(soma(2, 5));
    console.log(soma('2', 2));
} catch(error) {  // aqui loga o erro
    console.log(error);  // não é bom exibir esse tipo de erro no front
}