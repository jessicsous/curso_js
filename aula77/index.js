// métodos para objetos

const produto = {nome: 'jessica', preco: 5.50};
const produto_1 = produto  // <- nesse caso aponta para o mesmo valor na memória
const produto_2 = { ...produto } // <- nesse caso não aponta para o mesmo valor na memória

produto_2.nome = 'silva';
// produto_1.nome = 'silva'; <- esse valor altera o valor da variável produto 
console.log(produto)
console.log(produto_1)
console.log(produto_2)

// copiar de um objeto para dentro de outro objeto
const obj = {nome: 'lucas', sobrenome: 'viamonte'};
const obj_1 = Object.assign({}, obj, {idade: 23}); // -> objto vazio, o objeto para ser add, o incremento 

obj_1.nome = 'Lucas';
obj_1.sobrenome = 'Viamonte';
console.log(obj_1)

// consultar as propriedades do objeto
console.log(Object.getOwnPropertyDescriptor(obj_1, 'nome'));