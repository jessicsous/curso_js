const nome = 'jessica';
const sobrenome = 'silva';
const idade = 25;
const outroNome = 'Lucas';
export const outroSobrenome = 'Viamonte'

function soma(x,y) {
    return x + y;
}

export { nome };
export { sobrenome, idade };
export { outroNome as nome_2 };

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export default function subritracao(x, y) { //default é o padrão, só pode 1 por modulo
    return x - y;
}