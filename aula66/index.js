// Revisão de arrays
// valor passado por referência --> apontar para o mesmo valor na memória

const nome = ['joao', 'maria', 'josé']; // os arrays são indexados por elemento
nome[2] = 'jessica';  // alterar elemento do array
delete nome[1]; // remover elemento sem alterar o índice, porém o item removido fica vazio
console.log(nome);

// usando construtor do array, é igaul ao anterior
const nomes = new Array('joao', 'maria', 'josé');  // exatamente igual ao array anterior
nomes[2] = 'jessica';
delete nomes[1];
console.log(nomes);