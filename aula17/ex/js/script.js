const numero = Number(prompt('Digite um número:')); // --> retorna string, portanto pra fazer conta é preciso transformar em número, por isso iusar o Number
const numeroTitulo = document.getElementById('numero-titulo'); // --> método que selecionaa o id 
const texto = document.getElementById('texto'); // método que seleciona o elemento pelo id

/* 
Raiz quadrada: 7.4295864958

55.198755 é inteiro: false

é NaN: false

Arredondando para baixo: 55
Arredondando para cima: 56
com duas casas decimais: 55.20
*/
numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>é NaN: ${Number.isNaN(numero)}.</P>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;

