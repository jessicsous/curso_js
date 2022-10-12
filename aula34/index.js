/*
Diferenças entre var e let

let tem escopo de bloco {...bloco}
var só tem escopo de função
*/

const verdadeira = true;

let nome = 'Jessica';  // criando a variável
var nome1 = 'silva';

if (verdadeira) {
    let nome = 'Jessica';  // --> criando outra variável que também se chama nome
    console.log(nome, nome1);

    if (verdadeira) {
        let nome = 'Outra coisa';  // --> criando
        console.log(nome, nome1);
    }
}

// O motor do javascript para let, busca a variável de dentro do bloco pra fora dele
// exemplo

const verdadeira1 = true;

let nome2 = 'Jessica'; 
var nome3 = 'silva';

if (verdadeira) {
    let nome2 = 'Jessica';
    console.log(nome2, nome3);  // JS buscando a variável de dentro pra fora do bloco
                                         //   ^
    if (verdadeira) {                    //   |
    // let nome2 = 'Outra coisa';             |
        console.log(nome2, nome3);       //   |
    }
}

// pegando a variável no escopo global

const verdadeira2 = true;

let nome4 = 'Jessica'; 
var nome5 = 'silva';

if (verdadeira) {
   // let nome4 = 'Jessica';
    console.log(nome4, nome5);  // JS buscando a variável de dentro pra fora do bloco
                                         //   ^
    if (verdadeira) {                    //   |
    // let nome2 = 'Outra coisa';             |
        console.log(nome4, nome5);       //   |
    }
}

// O mesmo não aconteceria com var que só tem escopo de função

const falsa = true;

let nome6 = 'Jessica'; // criando
var nome7 = 'silva';  // criando

if (verdadeira) {
    let nome6 = 'Jéssica'; // criando
    var nome7 = 'Sousa';   // redeclarando

    if (verdadeira) {
        var nome7 = 'Outra coisa';
        let nome6 = 'outra coisa'; // redeclarando

    }
}

console.log(nome6, nome7);  // imprimiu let do escopo global e var do segundo bloco if --> pq let foi criada somente no global, e var foi criada todas as vezes que foi usada


// O escopo da função protege as variáveis que estão dentro dela

var sobrenome = 'Silva';

function falaOi () {
    var nome = 'Jessica';  // os visinhos não podem acessar essa variável
    console.log(`${nome} ${sobrenome}`);
}

falaOi();

