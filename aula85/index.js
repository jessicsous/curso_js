// getters e setters
const _velocidade = Symbol('velocidade'); // -> propriedade privada, cada velocidade será diferente da outra
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('caminhonete');
c1.velocidade = 1000
console.log(c1.velocidade);
