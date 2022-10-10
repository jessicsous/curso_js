// Funções --> executa ação --> bloco de código que executa uma ação

function saudacao() {
  console.log('Bom dia'); // tudo que estiver dentro da função está protegido, não poderá ser acessado fora dela
} // --> essa declaração de função não necessida de ponto e vírgula no final

saudacao();

function sudacaoUm(nome) { // oq está dentro dos parênteses se chama parametro
    console.log('Bom dia');
    console.log(`Bom dia ${nome}`);
}

sudacaoUm('Jéssica'); // valor jessic dentro dos parênteses foi atribuido ao parâmetro da função --> a função é reutilizavel e pode ser usada em qualquer parte do código
sudacaoUm('fulano');

const variavel = saudacao('Jessica'); // --> guardando em variável retorno da função
console.log(variavel); // --> retorna undefined pois a função não retorna valor, simplesmente exibe um valor na tela

// para a função retornar algo usar return

function saudacaoDois(nome) { // oq está dentro dos parênteses se chama parametro
    console.log('Bom dia');
    console.log(`Bom dia ${nome}`);
    return `Bom dia ${nome}`
}

const variavelDois = saudacaoDois('Jessica');
console.log(variavelDois); // --> agora está retornado 'Bom dia Jessica'

function soma(x, y) {  // função que realiza soma
    const resultado = x + y;
    return resultado;  // --> nada abaixo de return será lido, a menos que haja uma condição específica pra isso
}

console.log(soma(2, 4));

function somaDois(x = 1, y = 2) {  // função que realiza soma --> sempre que um parametro não for enviado x e y vão assumir os valores especificados
    const resultado = x + y;
    return resultado;  // --> nada abaixo de return será lido, a menos que haja uma condição específica pra isso
}

const resultadoDois = somaDois();
console.log(resultadoDois)

const raiz = function (n) { // nova declaração de função que atribui o valor para a variável
  return n ** 0.5;
}; // nesse caso precisa terminar com ponto e virgula

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// arrow function
const raizDois = (n) => {
    return n ** 0.5;
};

console.log(raizDois(9));
console.log(raizDois(16));
console.log(raizDois(25));

// outra forma de arrow function
const raizTres = n => n ** 0.5;

console.log(raizTres(9));
console.log(raizTres(16));
console.log(raizTres(25));
