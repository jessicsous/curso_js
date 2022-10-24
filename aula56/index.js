// escopo léxico --> a função cnhece oq foi declarado, oq foi declarado dentro e fora dela

const nome = 'jessica';

function fala() {
    console.log(nome); // de dentro da função é possível acessar variáveis que foram criadas fora do escopo da função
}

fala(); // aqui a exibição do código aparece 'jessica' no output


// a função abaixo não muda nada da função acima, ela continua lembrando onde foi declarada e oque foi declarado
function usaFala() {
    fala();
}
usaFala();

// função fala em novo escopo léxico
const nome1 = 'jessica'

function falaNome() {
    const nome1 = 'jéssica';
    console.log(nome1);  // buscou a variável nome1 primeiro dentro do escopo dela, se não tivesse ela buscaria fora do escopo da função
}

function usaFalaNome() {
    falaNome();
}
usaFalaNome();


// a demonstração a seguir vai mostrar que a função sabe onde foi criada e todos seus visinhos, por mais que seja chamada dentro de outro escopo
const nome2 = 'Jessica Silva';

function falaNome2() {
    console.log(nome2);
}

function usaFalaNome2() {
    const nome2 = 'Jéssica'; // por mais que tenha outra variável no mesmo escopo, a funão vai buscar a variável do escopo onde foi criada
    falaNome2();
}
usaFalaNome2();
