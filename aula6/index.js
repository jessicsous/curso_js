// em programação existe o conceito de variáveis
console.log('joão nasceu em 1984.');
console.log('Em 2000 joão conheceu maria');
console.log('joão casou-se com maria em 2012');
console.log('maria teve um filho com joão');
// note que o ome joão está repetido em todas as frases
// abaixo vamos armazenar o nome joão em uma variável

let nome1 = 'João'; // varia, pode ser modificada

console.log(nome1, 'nasceu em 1984.');
console.log(`Em 2000`, nome1, `conheceu maria`);
console.log(nome1,'casou-se com maria em 2012');
console.log('maria teve um filho com', nome1);

var nome2 = 'João';

console.log(nome2, 'nasceu em 1984.');
console.log('Em 2000', nome2, 'conheceu maria');
console.log(nome2, 'casou-se com maria em 2012');
console.log('maria teve um filho com', nome2);

let nome3; // variável declarada
nome3 = 'qualquer valor'; // variável inicializada
console.log(nome3);
nome3 = 'jessica';
console.log(nome3)

// a variavel nome3 não pode ser redeclarada

// não podemos declarar variáveis com palavras reservadas
// let if; // palavra reservada

// as variáveis precisam tem nomes significativos
let n = 'Jessica'; // vai funcionar, porém o problema é conseguir identificar o valor quando a variável for declarada em um código

// não podemos começar o nome de uma variável com um número
// o nome das variáves não podem conter espaços ou traços
// para nomes compostos utilizamos camelCase
// let nomeCompleto = 'nome';
// Case-sensitive = letra maiúscula e letra minúscula faz diferença
// não podemos redeclarar variáveis com let
// não utilizar var, utilizar let, para palavras que vão variar



