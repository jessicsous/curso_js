// promises

// função para executar de forma aleatória
function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);}

// com promise
function espera(msg, tempo) {
    return new Promise((resolve, reject) => {

      if(typeof msg !== 'String') reject(new Error);
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

espera('frase 1', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return espera('frase 2', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return espera('frase 3', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  }).then(() => {
    console.log('exibe na tela');
  })
  .catch(e => {
    console.log('Erro:', e);
  });




// com função de callback    
// function espera(msg, tempo) {
//     setTimeout(() => {
//       console.log(msg);
//     }, tempo);
// }

espera('frase 1', aleatorio(1, 5));
espera('frase 2', aleatorio(2, 4));
espera('frase 3', aleatorio(4, 6));