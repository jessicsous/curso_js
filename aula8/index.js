// reproduzir a frase usando as variáveis
/*
Jessica Silva tem 25 anos, pesa 60 kg
tem 1.5 de altura e seu imc é de
Jessica Silva nasceu em 1997
*/
const nome = 'Jessica';
const sobrenome = 'Silva';
const idade = 25;
const peso = 60;
const altura = 1.50; // em metros
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso/(altura*altura);
anoNascimento = 2022 - idade

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg tem',
altura, 'de altura e seu imc é de', imc,
nome, sobrenome, 'nasceu em', anoNascimento);

// outra forma unindo os valores

console.log(nome + ' ' + sobrenome +' tem ' + idade +' anos, pesa ' + peso +' kg tem ' +
altura +' de altura e seu imc é de '+ imc + ' ' +
nome + ' ' + sobrenome +' nasceu em '+ anoNascimento);

// forma mais simples usando template strings, a qual põe as variáveis entre ${variável}, com a frase entre craze

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem
${altura} de altura e seu imc é de ${imc}
${nome} ${sobrenome} nasceu em ${anoNascimento}`);

