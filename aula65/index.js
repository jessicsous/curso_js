// funções geradoras

function* geradora1() {
    // código..
    yield 'Valor 1';
     // código..
    yield 'Valor 2';
}

const g1 = geradora1();
console.log(g1); // retorna o tipo de função
// console.log(g1.next()); // primeira vez chamada, retorna o pprimeiro yield
// console.log(g1.next()); // retorna o segundo yield --> retorna um objeto com duas chaves
console.log(g1.next().value); // retorna o valor 1
console.log(g1.next().value); // retorna o valor 2

console.log('#######################');
// iteração em geradora
const g2 = geradora1();
for (let valor of g2) {
    console.log(valor);
}

// loop infinito com funções geradoras
function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g3 = geradora2();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

console.log('#######################');

// delegar tarefas de uma função para outra, com funções geradoras
function* geradora3() {
    yield 1; // o yield é como o return
    yield 2; // no lugar de yields pode ser funções
    yield 3;
    yield 4;
}

function* geradora4() {
    yield* geradora3();  // chama a função anterior
    yield 5;  
    yield 6;
    yield 7;
    yield 8;
}

const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}

// com funções 
function* geradora5() {
    yield function() {
        console.log('y1');
    };


    yield function() {
        console.log('y2');
    };

};

const g5 = geradora5();
const f1 = g5.next().value;
const f2 = g5.next().value;
f1();
f2();