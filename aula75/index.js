// Object.defineProperty() -> define uma propriedade
// Object.defineProperties() -> define várias propriedades

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    // define uma propriedade
    Object.defineProperty(this, 'estoque', {
      enumerable: true, // mostra a chave
      value: estoque,  // valor
      writable: false,  // pode alterar
      configurable: true  // configurável
    });

    // define várias propriedades
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    });
}

const p1 = new Produto('roupa', 20, 10)
p1.estoque = 50;
delete p1.estoque
console.log(p1);

console.log(Object.keys(p1))

for(let chave in p1) {
    console.log(chave);
}
