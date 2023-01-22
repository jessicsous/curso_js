// class -> um molde como a função construtora
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar(){
    console.log(`${this.nome} está falando`)
  }

  comer(){
    console.log(`${this.nome} está comendo`)
  }

  beber(){
    console.log(`${this.nome} está bebendo`)
  }
}

const p1 = new Pessoa('jessica', 'silva');
p1.falar()

// a mesma coisa anterior com função construtora 
function Pessoa_2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// o método vai no prototype
Pessoa_2.prototype.falar = function(){
    console.log(`${this.nome} está falando`)
};

const p2 = new Pessoa_2('lucas', 'viamonte');
p2.falar()