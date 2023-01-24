// Métodos de instâncias e estáticos -> métodos que pode acessar na classe sem a palavra new
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // método de instância
    aumentarVolume() {
        this.volume += 2;
    }
    // método de instância
    diminuirVolume() {
        this.volume -= 2;
    }
    // método estático
    static trocaPilha() {
        console.log(`trocar pilha ${this.tv}`);
    }
}

const controle1 = new ControleRemoto('sansung');
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)

// método esttico só consegue acessar pela classe
// quando a palavra new n é usada, o construtor não é chamado. ou seja, a palavra this não pode ser usada
// se usado retornará undefined
ControleRemoto.trocaPilha()

// Math -> class, random -> método estático
console.log(Math.random());