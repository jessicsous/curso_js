/* 
Primitivos (valores imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) --> valores que são copiados quando usado o '='

Referência (mutável) - array, object, function (o dado pode apontar para o mesmo valor na memória) 
*/

            0123456
let nome = 'Jessica'; // não muda o dado, só troca o valor da variável
nome = 'maria'; 
console.log(nome)
console.log(nome[0]) // exibir somente a letra do índice especificado

// exemplo de como a string é diferente do array e é imutável
let segundoNome = 'Maria';
segundoNome[0] = 'N'; // essa linha não faz nada
console.log(segundoNome[0], nome);

let a = 'A';
let b = a; // copiando o valor de a pra variável b --> fazendo cópia
console.log(a, b);

a = 'Outra coisa'; // altera valor de 'a' mas ão afeta 'b'
console.log(a, b); // nesse caso só a primeira exibição não alterou o valor de 'b'

let c = [1, 2, 3]; 
let d = c; // nesse caso o valor não está sendo copiado, porque array não é um tipo de dado primitivo, mas um dado passado por referência
// nesse caso 'd' vai apontar pro mesmo lugar que 'c' aponta na memória
// se um dos valores forem alterados, afeta ambos
console.log(c, d);
c.push(4); // sendo adicionado um valor à variável 'c', também será adicionado na 'd'
console.log(c, d);

// uma forma de não somente referenciar mas realmente copiar um valor para outro
let e = [1,2,3,4,5];
let f = [...e]; // isso também é feito para objetos {...e}
console.log(e, f);

