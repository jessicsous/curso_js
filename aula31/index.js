/*
* ler MDN web docs Date : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

const data = new Date(); // --> new se refere a uma função construtora, função construtora sempre começa com a primeira letra maiúscula
console.log(data.toString()); // --> formato de exibir data

const data1 = new Date(0); // 01/01/1970 Timestamp unix ou época unix  --> marco 0 --> para usar uma tada anterior a essa usa-se um número negativo
console.log(data1);

const tresHoras = 60 * 60 * 3 * 1000; // --> 3 horas
const data2 = new Date(0 + tresHoras); // --> marco 0 mais 3 horas
console.log(data2);

// adicionar um dia ao marco zero
const umDia = 60 * 60 * 24 * 1000;
const data3 = new Date(0 + umDia);
console.log(data3)

// outra forma de mandar uma data
// mês em js começa do 0, então o mês 3 representa abril
const data4 = new Date(2019, 3, 20, 15, 14, 27, 1000); // --> ano --> mês --> dia --> horas --> minutos --> segundos --> milésimos de segundos
console.log(data4.toString());

// formato com string (formato dataString)
const data5 = new Date('2019-04-20 20:20:59');
console.log('Dia', data5.getDate());     // obtem o número do dia
console.log('Mês', data5.getMonth() + 1);    // obtem o número do mês --> começa do zero
console.log('Ano', data5.getFullYear()); // obtem o número do ano 
console.log('Hora', data5.getHours());   // obtem o número da hora
console.log('Min', data5.getMinutes());  // obtem o número dos minutos
console.log('Seg', data5.getSeconds());  // obtem o número dos segundos
console.log('ms', data5.getMilliseconds()); // obtem o número dos millisegundos
console.log('Dia semana', data.getDay());  // obtem o numero da semana  --> 0 - Domingo, 6 - Sábado
console.log(data5.toString());
console.log(Date.now()); // --> do marco zero até hoje, contados em milésimos de segundos

function zero (num) {
    return num >= 10 ? num : `0${num}`;
}


function formataData(data) {
    const dia = zero(data.getDate());
    const mes = zero(data.getMonth() + 1);
    const ano = zero(data.getFullYear());
    const hora = zero(data.getHours());
    const min = zero(data.getMinutes());
    const seg = zero(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data6 = new Date();
const dataBrasil = formataData(data6);
console.log(dataBrasil);