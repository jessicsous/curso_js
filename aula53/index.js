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

// arrow function  --> tratada como dado também
const funcaoArrow = () => {
    console.log('função arrow');
};
funcaoArrow();


// Dentro de um objeto pode ter uma função
const objeto = {
    falar: function() {
        console.log('falar...');
    }
};
objeto.falar();  // --> usando função como método de objeto com a notação de ponto;


// outra maneira de função dentro de um objeto
const objetoOuvir = {
    ouvir() {
        console.log('ouvir..');
    }
};
objetoOuvir.ouvir();