const numero = 10;

if (numero >= 0 && numero <= 5) {
  console.log('O número está entre 0 e 5.');
} else {  // se a condição anterior for falsa
    console.log('O número não está entre 0 e 5');
}

// mesmo comportamento do else mas sem o else
if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5');
}

console.log('O número não está entre 0 e 5')  // essa linha não depende do if, se a condição acima for verdadeira essa linha também será executada

// checa todas as condições, quando achar a verdadeira exclui todas as demais, mesmo que forem verdadeiras
// abaixo são condições encadeadas

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5');
} else if (numero >= 6 && numero <= 11) {
    console.log('O numero está entre 6 e 11');
} else {
    console.log('O número não está entre 0 e 5, nem entre 6 e 11');
}