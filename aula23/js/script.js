const nome = 'Jessica'; // --> variável em escopo global 

// função para prevenir que o formulário
function escopo () {
    // const nome = 'Jessica Silva'; // variável guardada em uma variávelpara não prejudicar o sistema
    const form = document.querySelector('.form'); // formulário selecionando pela classe

    form.onsubmit = function (evento) { // capturando evento do botão
      evento.preventDefault(); //prevenir que a pagina seja carregada, que form seja enviado
    }; // sempre que utilizar sinal de '=', terminar a frase com ponto e vírgula

}

escopo();


// outra forma de prevenir eventos (mais moderno)
function escopoUm () {
    // const nome = 'Jessica Silva'; // variável guardada em uma variávelpara não prejudicar o sistema
    const form = document.querySelector('.form'); // formulário selecionando pela classe
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEvento (evento) {
      evento.preventDefault();  
      const nome = form.querySelector('.nome');
      const sobrenome = form.querySelector('.sobrenome');
      const peso = form.querySelector('.peso');
      const altura = form.querySelector('.altura');

      pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
      });

      console.log(pessoas);

      resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEvento); // pro form adicionar um escutador de eventos no formulário

}