const elementos = [
    {tag: 'p', texto: 'Frase 1'}, //0
    {tag: 'div', texto: 'Frase 2'}, //1
    {tag: 'footer', texto: 'Frase 3'}, //2
    {tag: 'section', texto: 'Frase 4'}, //3
];

const container = document.querySelector('.container');
const div = document.createElement('div'); // cria elemento (div)

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]; // associação via desestruturação
    let elemento = document.createElement(tag); // cria elemento (tag)
    elemento.innerText = texto;
    div.appendChild(elemento); // adiciona um filho (tag) ao elemento (div)
}

container.appendChild(div);