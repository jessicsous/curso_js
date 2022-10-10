// alert('string com a nossa mensagem'); // não existe alert no terminal, somente no navegador
// no navegador existe um elemento central que é o objeto window, dentro desse objeto tem as funções como o alert
// alert() --> atalho para window.alert('mensagem')
// window.confirm('deseja realmente apagar?') --> essa função retorna dois valores booleando, true ou false
// window.prompt('digite seu nome'); abre uma caixa de texto com a frase
// no js sempre que uma ação é executada ela pode ou não retornar um valor, no método alert não é retornado nada, 
// a confirm(), retorna um booleando --> podendo ser capturado: colocando dentro de uma variável

// exercício

// const num1 = prompt('Digita um número'); // --> função prompt sempre retorna uma string
// const num2 = prompt('Digite outro número');

// const convers1 = parseFloat(num1); // --> por isso é preciso converter antes de realizar a conta
// const convers2 = parseFloat(num2);

// const resultado = convers1 + convers2;

// console.log(resultado);

// outra resolução

// let num3 = prompt('Digite um número');
// let num4 = prompt('Digite outro número');

// num3 = Number(num3);
// num4 = Number(num4);

// const resultado2 = num3 + num4;

// console.log(resultado2);
// alert(`O resultado foi ${resultado2}`);

// ou --> em códigos complexos, aumenta mais a complexidade
// alert(`O resultado foi: ${num3 + num4}`);

// outro exercício --> valor de A igual ao valor de B e valor de C igual ao valor de A

let varA = 'A';
let varB = 'B';
let varC = 'C';

const varAtemp = varA;
varA = varB;
varB = varC;
varB = varAtemp;

console.log(varA, varB, varC);

// manaeira mais moderna, sem criar nova variável

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);



