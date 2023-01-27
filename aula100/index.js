// métodos úteis para promises
// método para trabalhar com promises
// -> promise.all
// -> promise.race
// -> promise.resolve
// -> promise.reject

function aleatorio(max, min) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('erro');
            setTimeout(() => {
                resolve(msg);
            },tempo);

    });

}


const promises = [
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 2000),
    esperaAi('promise 3', 500),
];

// Promise.all -> resolve todas as promises -> array de promises -> valores retornam na ordem do array
// Promise.all(promises)
//     .then(function(valor){
//         console.log(valor);
//   })
//     .catch(function(erro){
//         console.log(erro);
//     }); 

// promise.rase -> entrega a primeira que resolver -> não retorna as demais, porém continua executando as demais promessas
// Promise.race(promises)
//     .then(function(valor){
//         console.log(valor);
//     })
//     .catch(function(erro){
//         console.log(erro);
//     });

//promise.resolve
function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Página em cache');  // ou Promise.reject que faz a promessa ja cair no catch
    } else {
        return esperaAi('Baixei a página', 2000);
    }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log(e));