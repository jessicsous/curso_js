// funções de fábrica --> factory functions

function fala(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${nome} está ${assunto}.`;
        }
    };
}

const p1 = fala('jessica', 'silva');
console.log(p1.fala('falando'));

// usando this

function fala1(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        imc() {
            const indiceMassa = this.peso / (this.altura ** 2);
            return indiceMassa.toFixed(2);
        }
    };
}

const p2 = fala1('jessica', 'silva');
console.log(p2.fala('falando'));

const p3 = fala1('jessica', 'silva', 1.57, 43);
console.log(p3.imc());

//imc usando como método

function fala2(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        get imc() {   // 'get' para obiter o valor usando a notação de atributo
            const indiceMassa = this.peso / (this.altura ** 2);
            return indiceMassa.toFixed(2);
        }
    };
}

const p4 = fala2('jessica', 'silva');
console.log(p4.fala('falando'));

const p5 = fala2('jessica', 'silva', 1.57, 43);
console.log(p5.imc); // quando põe o 'get' na frente do imc, ele pode ser usado sem os parênteses
