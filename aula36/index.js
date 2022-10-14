/*
Atribuição via desestruturação para objeto
*/

const pessoa = {
  nome: 'jessica',
  sobrenome: 'Silva',
  idade: 25,
  endereco: {
    rua: 'av bla',
    numero: 3000
  }
};

console.log(pessoa.nome) // atribuição normal

// atribuição via desestruturação
const { nome } = pessoa;  // passa o objeto e pede paara o objeto extrair a chave 'nome', ao mesmo tempo que ja cria uma variável chamada 'nome'
console.log(nome);

// setando valor específico
const { chave = 'não existe', sobrenome } = pessoa; // o novo valor da chave pode ser setado assim, nesse caso a chave 'chave' não existe, então ela vai ser criada ai
console.log(chave, sobrenome);

const { nome : outro } = pessoa; // atribuindo novo nome a chave
console.log(outro);

const { endereco: { rua, numero } } = pessoa; // capturando valores de chaves dentro de objeto
console.log(rua, numero);

const { nome: nome1, ...resto } = pessoa; // pegando o valor da primeira chave e todo o resto, o chave 'nome' ja tinha sido usada anteriormente, portando foi preciso atribuir novo valor a chave
console.log(resto);

