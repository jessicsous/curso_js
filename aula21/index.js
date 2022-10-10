// básico de objetos

const array = [1,2,3]; 
array.push(4); // novo valor
array[0] = 'Jéssica'; // modificando o primeiro valor do array
// array = 'outra'; // operador de atribuição não suportado para constantes, nesse caso a varável teria que estar com let
console.log(array);

// para criar varias pessoas dessa forma, teria que criar várias variáveis
const nomeUm = 'Jessica';
const sobrenomeUm = 'Silva';
const idadeUm = '25';

// forma mais fácil seria criar um objeto para agrupar várias pessoas
const pessoaUm = {
    nome: 'Jessica',
    sobrenome: 'Silva',
    idade: '25'
}; // objeto literal

console.log(pessoaUm.nome);

const pessoaDois = {
    nome: 'Lucas',
    sobrenome: 'Santos',
    idade: '22'
}; // objeto literal

console.log(pessoaDois.nome);

// mais simples ainda seria criar função que cria pessoas
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };

}

const pessoaTres = criaPessoa('Jessica', 'Silva', 25);
const pessoaQuatro = criaPessoa('Maria', 'Silva', 29);
const pessoaCinco = criaPessoa('josé', 'Silva', 30);

console.log(pessoaTres.nome, pessoaTres.sobrenome, pessoaTres.idade);
console.log(pessoaQuatro.nome, pessoaQuatro.sobrenome, pessoaQuatro.idade);
console.log(pessoaCinco.nome, pessoaCinco.sobrenome, pessoaCinco.idade);

/* 
forma contraida de escrever a mesma função

function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}
*/

const novaPessoa = {
    nome: 'Jessica',
    sobrenome: 'Silva',
    idade: 25,

    fala () { // método fala
        console.log('está falando');

    },

    come () {
        console.log(`${this.nome} ${this.sobrenome} está comento..., e sua idade é ${this.idade}`);
    },

    contadorIdade() {
        this.idade++;
    }
};

novaPessoa.fala();
novaPessoa.come();
novaPessoa.contadorIdade();
novaPessoa.come();