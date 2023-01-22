//Poliformismo

// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`saldo insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo}`);
};

function contaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
contaCorrente.prototype = Object.create(Conta.prototype);
contaCorrente.constructor = contaCorrente;

contaCorrente.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`saldo insuficiente: ${this.saldo}`);
        return
    }

    this.saldo -= valor
    this.verSaldo();
}

function contaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

contaPoupanca.prototype = Object.create(Conta.prototype)
contaPoupanca.prototype.constructor = contaPoupanca;


const cc = new contaCorrente(10, 30, 50, 50);
cc.depositar(5);
cc.sacar(100);

const cp = new contaPoupanca(20, 60, 40);
cp.depositar(70);
cp.sacar(50);

// const conta = new Conta(11, 33, 60);
// console.log(conta)
// conta.depositar(50);
// conta.sacar(30);