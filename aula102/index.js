// import | export
import { nome } from './modulo';
import { sobrenome, idade } from './modulo';
import { soma as soma_2 } from './modulo';
import { Pessoa as outraCoisa} from './modulo';
import * as algumaCoisa from './modulo'; // importa tudo
import importandodefault from './modulo'; // toda vez que importar sem chave, vai importar o default


const soma = y + X;
console.log(soma(3, 5));

const p1 = new outraCoisa('jessica', 'silva');
console.log(p1);

console.log(algumaCoisa);