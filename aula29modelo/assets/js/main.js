// função que formata a hora
function formataSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}


// selecionando os elementos
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaContagem() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = formataSegundos(segundos);
    }, 1000);
}

// captura os eventos do click
iniciar.addEventListener('click', function(e){
    clearInterval(timer);
    iniciaContagem();
});

pausar.addEventListener('click', function(e) {
    clearInterval(timer);
});

zerar.addEventListener('click', function(e) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});