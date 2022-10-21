// setInterval e setTimeout
// setInterval --> configura um intervalo de tempo em que uma função será executada

function mostraHora() {  // função que mostra a hora atual
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

console.log(mostraHora());

// demosntração
function demonstracao() {  // função para executar função anterior
    console.log(mostraHora());
}

setInterval(demonstracao, 1000); // não executa, só passa a referência (referência, tempo para execução);

// criando função anônima que não precisa setar valor e ja executa dentro do setInterval
setInterval(function () {
    console.log(mostraHora()); // essa precisa ser executada ()
}, 1000);

//tecla de atalho para parar o código --> control - alt - m

// função para parar a execução do código, usando setTimeout
const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {  // usado para parar a execução de outra função. passa a função e o tempo
    clearInterval(timer);
}, 1000);