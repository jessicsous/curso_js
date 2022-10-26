// funções de callback
// a execução das funções abaixo vão ser executadas em ordem
// mas na web não acontece assim

function f1() {
    console.log('f1');
}
function f2() {
    console.log('f2');
}
function f3() {
    console.log('f3');
}

f1();
f2();
f3();
console.log('olá mundo');

// simulação do que acontecria na web
// com a função setTimeout com tempos aleatórios para a função realizar oq foi pedido

function rand(min = 1000, max = 2000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f4() {
    setTimeout(function() {
        console.log('f4');
    }, rand());
    
}
function f5() {
    setTimeout(function() {
        console.log('f5');
    }, rand());
}
function f6() {
    setTimeout(function() {
        console.log('f6');
    }, rand());
}

f4();
f5();
f6();
console.log('olá mundo');  // sempre vai ser a primeira coisa a ser executada

// oq fazer para essas funções serem executadas na ordem!?
// para isso a função vai precisar receber um parêmetro e vai ser uma função de callback!
// a função abaixo vai executar primeiro f7, depois f8 e após, f9


function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f7(callback) {
    setTimeout(function() {
        console.log('f7');
        if (callback) callback(); // se existir alguma função de callback, executa ela
    }, rand());
    
}
function f8(callback) {
    setTimeout(function() {
        console.log('f8');
        if (callback) callback();
    }, rand());
}
function f9(callback) {
    setTimeout(function() {
        console.log('f9');
        if (callback) callback();
    }, rand());
}

// ordem de execução
f7(function() {
  f8(function() {
    f9(function() {
        console.log('olá mundo!');
    });
  });
});

// ou promisses, que seria a solução para n precisar colocar uma função dentro da outra
