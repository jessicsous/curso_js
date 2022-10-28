// Funções recursivas --> função que se chama


// é parecido com um loop
function recursiva(max) {
    if (max >= 10) return; // limite para a função parar
    max++;  // incremento
    console.log(max);
    recursiva(max);  // chama a função novamente para aparecer todos os numeros, como ta dentro do if, só para quando a função for avaliada como falsa
}

recursiva(0);
