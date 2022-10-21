//while e Do while

let controle = 0;  // seta variável

while (controle <= 10) { // coloca a condição
    console.log(controle); // realiza o codigo
    controle++; // soma a variável pro laço não ser infinito
}


// pode usar o for pra isso --> iteração
const nome = 'jessica';

let i = 0;

while (i < nome.length) {
    console.log(nome[i]);
    i++;
}


function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max);

while (rand !== 10) {  // enquanto a condição for verdadeira, executa o laço
    rand = random(min, max);
    console.log(rand);
}


do {  // primeiro atualiza o valor
    rand = random(min, max);
    console.log(rand)
} while (rand !== 10);  // depois checa a condição