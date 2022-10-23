// Declaração de função --> usando a palavra function, ocorre function hoisting
// (function hoisting) --> o js eleva as declarações de funções e variáveis declaradas com 'var' pro topo

declaracao() //--> com hoisting tanto faz declarar em cima ou embaixo

function declaracao() {
   console.log('hoisting');
}

declaracao()

// First-class objects (objetos de primeira classe) --> poder tratar funçoes como dado
// expressão de função --> (function expression)
const dadoFuncao = function () {
    console.log('função como resultado de constante')
}
dadoFuncao();

function executaDadoFuncao() {
    dadoFuncao();
}

executaDadoFuncao();

