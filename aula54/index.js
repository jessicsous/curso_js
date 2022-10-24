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

// arguments com for
function fun() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
fun(1,2,3,4,5,6,7);


function soma(a, b) {
    b = b || 0; // se 'b' tiver algum valor vai ser b, se não tiver vai ser zero
    console.log(a + b);
}
soma(2);


// assumindo o valor de 'b' passando valor ao parâmetro
function valorB(a, b = 2, c = 6) {
    console.log(a + b + c);
}
valorB(2, undefined, 20);

// atribuição via desestruturação nos parâmetros
function desestruturacao({ nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
desestruturacao({ nome: 'jessica', sobrenome: 'Silva', idade: 25});

//ou criando obj
function func({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'jéssica', sobrenome: 'Silva', idade: 25 };
func(obj);

// ou
function funct([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade);
}
funct(['Jéssica', 'Silva', 25]);

// usando o rest
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
    }
    console.log(acumulador);
}
conta('+', 0, 2, 3, 4, 5);

