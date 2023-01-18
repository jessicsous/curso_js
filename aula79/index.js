function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('vestido', 50);
p1.aumento(50)
console.log(p1)


// para usar as funções anteriores é preciso setar o prototype
const p2 = {
    nome: 'camisa',
    preco: 20
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(90);
console.log(p2)
