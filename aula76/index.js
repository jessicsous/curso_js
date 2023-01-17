// defineProperty -> getter e setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    
    Object.defineProperty(this, 'estoque', {
        enumerate: true,
        configurable: true,

        get: function() {
            return estoque;
        },
        set: function(valor) {
            estoque = valor;
        }
    });
};

const p1 = new Produto('mala', 20, 500);
p1.estoque = 2
console.log(p1.estoque)

