// Herança
/* O termo "Herança" é muito usado para descrever que as características
de um objeto são passadas para outro objeto.
Assim como uma filha ou filho pode herdar características
da sua mãe ou pai (genericamente). Por isso estamos usando esse termo 
para descrever o comportamento desejado. Além disso, a
maioria das literatuas, incluindo as documentações (como MDN)
citam a palavra herança.

porém, javascript não é uma linguagem que apresenta ess característica
portanto não existe "herança".
O que ocorre para descrever "Herança" em JS

*/
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}

function Camisa(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camisa.prototype = Object.create(Produto.prototype)
Camisa.prototype.constructor = Camisa;

/*
no trecho -> Camisa.prototype = Object.create(Produto.prototype)

Estamos, claramente, falando que o Camisa.prototype é um
novo objeto vazio que tem como protótipo Produto.prototype.
Dessa forma, estamos adicionando Camisa.protorype na 
cadeia de protótipos de Produto. Por consequência, tudo o que
não existir em Camisa nem em Camisa.prototype será delegado para Produto.prototype
(e assim por diante até chegar no topo da cadeia de protótipos). Por isso vejo o termo
delegação como mais adequado para este comportamento.
*/