// Async / Await

function rand(max=0, min=3) {
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

// código sincrôno com promises
esperaAi('fase 1', rand())
    .then(valor => {
        console.log(valor);
        return esperaAi('fase 2', rand());
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('fase 3', rand());
    })
    .then(fase => {
        console.log(fase);
        return fase;
    })
    .catch(e => console.log(e));


// igual a função anterios, porém com Async / Await

async function executa() {
    try {
        const fase1 = await esperaAi('fase 1 asy/aw', rand());
        console.log(fase1);

        const fase2 = await esperaAi('fase 2 asy/aw', rand());
        console.log(fase2);

        const fase3 = await esperaAi('fase 3 asy/aw', rand());
        console.log(fase3)
    } catch(e) {
        console.log(e);
    }

}

executa();