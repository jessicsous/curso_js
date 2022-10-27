// funções construtoras --> constructor functions --> criam novos objetos
// construtora -> sempre iniciar o nome com letra maiúscula
// obrigatório usar a palavra new
// molde pra gerar novos objetos
// na função construtora, o corpo da função já é o objeto que vai ser criado
function Pessoa(nome, sobrenome) { // construtoras sempre começam com letra maiúscula
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(`${this.nome} método`);
    };
}

const pessoa1 = new Pessoa('Jéssica', 'Silva');
const pessoa2 = new Pessoa('joão', 'silva');
pessoa2.metodo();


console.log(pessoa1.nome);
console.log(pessoa2.sobrenome);