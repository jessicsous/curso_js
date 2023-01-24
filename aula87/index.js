// herança com classes
// na herança tudo é herdado do pai, o pai n herda nada do filho
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
      if(this.ligado) {
        console.log(this.nome + ' já ligado');
        return;
      }

      this.ligado = true;
    }

    desligar() {
      if(!this.ligado) {
        console.log(this.nome + ' já desligado');
        return;
      }

      this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // chamar o constructor da classe pai
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('método ligar alterado.');
    }
}

const s1 = new Smartphone('iphone', 'branco', 'Galaxy');
s1.ligar()
console.log(s1);

const t1 = new Tablet('ipad', true);
t1.ligar();
