// closures --> tem realção com escopo lexico --> é a abilidade da função de acessar os escopos léxicos
// é possível ver o closure da função no console do navegador

// a funcao anônima que está dentro da função retornaFuncao, tem acesso a três escopos, 
// o escopo dela, o escopo da mãe dela (onde ela está inserida) e o escopo global
function retornaFuncao() {
    const nome = 'Jessica';
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao);
console.dir(funcao) // é a mesma coisa de console.log

// quando o closure muda, através de parâmetros
function retornaFuncao2(nome) {
    return function() {
        return nome;
    };
}

const funcao2 = retornaFuncao2('Jessica'); // o valor da função foi setado aqui
const funcao3 = retornaFuncao2('Silva'); // um valor diferente pra função foi setado aqui, mudando o closure da função
console.dir(funcao2());
console.dir(funcao3());