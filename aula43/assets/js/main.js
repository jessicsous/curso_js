const paragrafos = document.querySelector('.paragrafos'); //pega primeiro elemento
const selecionaTodos = document.querySelectorAll('p') // seleciona todos os <p>

const estilosBody = getComputedStyle(document.body);
const colorBody = estilosBody.backgroundColor;
console.log(colorBody);

for (let p of selecionaTodos) {
    p.style.backgroundColor = colorBody;
    p.style.color = '#FFFFFF';
}