// funções imediatas ou funções alto invocadas 
// IIFE --> Immediately invoked function expression

// função anônima que não toca o escopo global
(function() {  // função executada imediatamente
    const nome = 'jessica';
    console.log(nome);
})();

const nome = 'Jéssica'; // com a ffunção IIFE não há o conflito de variáveis

// o código pode ser escrito como estaria no escpo global
// porém protegido na função
// a função pode receber parâmetros 

(function(idade, peso, altura) {

    const sobrenome = 'Silva';
    function Cria(nome) {
        return nome + ' ' + sobrenome;
    }

    function fala() {
        console.log(Cria('jessica'))
        console.log(idade, peso, altura)
    }

    fala();

})(23, 50, 1.60);