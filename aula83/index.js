function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} está falando`);
        },
        comer(){
            console.log(`${this.nome} está comendo`);
        },
        beber(){
            console.log(`${this.nome} está bebendo`);
        },
    };

    return Object.create(pessoaPrototype, {
        nome: { value: nome},
        sobrenome: { value: sobrenome }
    });
}

// a mesma coisa porém desacoplada

const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    },
};

const pessoaPrototype_1 = Object.assign({}, falar, comer, beber);

function criaPessoa_1(nome, sobrenome) {
    return Object.create(pessoaPrototype_1, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa_1('jessica', 'silva');
p1.falar()
console.log(p1)