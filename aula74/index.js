// revisão de objeto

const pessoa = {
    nome: 'jessica',
    sobrenome: 'silva'
};
// maneiras de acessar o valor do objeto
console.log(pessoa.nome) // notação de ponto
console.log(pessoa.sobrenome)
console.log(pessoa['nome'])  // notação de colchete
console.log(pessoa['sobrenome'])

// com função construtora
const pessoa_1 = new Object();

pessoa_1.nome = 'jessica';
pessoa_1.sobrenome = 'sousa';

console.log(pessoa_1)
 delete pessoa_1.nome;
 console.log(pessoa_1)

// Factory functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('jessica', 'silva')
console.log(p1.nomeCompleto())

// função construtora

function Pessoa_2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // travando o this
}

// new -> {} <- this
const p_1= new Pessoa_2('jessica', 'silva')
Object.freeze(p_1) // travando objeto
p_1.nome = 'outra coisa' // muda valor somente na constante p_1
console.log(p_1)
const p_2 = new Pessoa_2('mario', 'viamonte')

