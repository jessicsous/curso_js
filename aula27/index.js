/*
if  --> se
else if --> se não
else
*/

const hora = 10;

if (hora === 12) {  // se a condição for avaliada como verdadeiro o codigo será executado
  console.log('Boa tarde');
} else if (hora < 12) {
  console.log('Bom dia');
}

/*
Entre 0 - 11 --> Bom dia
Entre 12 - 17 --> Boa tarde
Entre 18 - 23 --> Boa noite 
*/

// If pode ser usado sozinho
// Else precisa de If antes
// Else ifs pode ter vários na checagem
// só pode ter um else na checagem
// podemos usar condições sem else if, utilizando apenas if e else


const hora1 = 13;

if (hora1 >= 0 && hora1 <=11) {
    console.log('Bom dia');
} else if (hora1 >= 12 && hora1 <= 17) {
    console.log('Boa tarde');
} else if (hora1 >= 18 && hora1 <= 23) {
    console.log('Boa noite');
} else {
    console.log('olá')  // se der problema na hora, cai nesse bloco
}


