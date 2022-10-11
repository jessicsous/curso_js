/*

* Switch/Case

No js os dias da semana são 
0 --> Domingo
1 --> Segunda
2 --> terça
3 --> quarta
4 --> quinta
5 --> sexta
6 --> sábado
*/

const data = new Date('1987-04-20 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto;


// quando é preciso fazer esse tipo de comparação, pode ser usado Switch
if(diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = '';
}

console.log(diaSemana, diaSemanaTexto);

// usando Switch

let diaSemana1 = data.getDay();
let diaSemanaTexto1;

switch (diaSemana1) {
case 0:  // --> caso o dia da semana seja 0 --> faz lguma coisa
  diaSemanaTexto1 = 'Domingo';
  break;  // no switch sempre tem que sair ca condição
case 1:
  diaSemanaTexto1 = 'Segunda';
  break;
case 2:
  diaSemanaTexto1 = 'Terça';
  break;
case 3:
  diaSemanaTexto1 = 'Quarta';
  break;
case 4:
  diaSemanaTexto1 = 'Quinta';
  break;
case 5:
  diaSemanaTexto1 = 'Sexta';
  break;
case 6:
  diaSemanaTexto1 = 'Sábado';
  return diaSemanaTexto1;    // --> return substitui a palavra break         
}

