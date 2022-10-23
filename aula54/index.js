// função simples
function funcao() {
    console.log('bowa noite');
}
funcao()

// função com parâmetro inesistente
function funcao2() {
    console.log('aaa');
}
funcao2('para parametro inexistente');  //--> nesse caso não aparece nenhum erro no js

// quando a função é definida com a palavra function, os argumentos passados ficam guardados em um objeto chamado arguments
function argumento() {
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
argumento(1,2,3,4,5,6,7,8);