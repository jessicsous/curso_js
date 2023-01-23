class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    get nomeCompleto() { // com get não é uma função
        return this.nome + ' ' + this.sobrenome;
    }

    nomeIdeade(){  // sem o get é uma função
        return this.nome + ' ' + this.idade;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('jessica', 'Silva', '25');
p1.nomeCompleto = 'jessica silva de Sousa';
console.log(p1.nomeCompleto);
console.log(p1.nomeIdeade());
