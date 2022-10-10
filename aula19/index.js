/* 
Const com valores mutáveis

Const descreve uma vari´vel que não pode ser reatribuída
(com o operador de atribução =). Depois de criá-la, não
podemos fazer algo assim:

const nome = 'Jéssica';
nome = 'Jéssica'; // Erro: Assignment to constant variable.

Porém, existe uma diferença entre variável e valor.

variáveis são como um apelido para o valor, uma espécie de alias
para mencionar algum valor salvo na memória.

já valores são dados que realmente ficam salvos na memória e 
sustentam determinado tipo. alguns tipos de valores são imutáveis
como number, string, boolean, undefined, null, symbol e bigint (os primitivos todos são imutáveis).
Outros tipos são mutáveis, como arrays e objetos (objetos em geral são mutáveis, com exceção de null).

Valores mutáveis geralmente são estruturas de dados mais complexas 
que sustentam outros valores ou comportamentos internamente.
Como é o caso do array, que pode ser composto por vários tipos de dados.

Quando usamos const com tipos primitivos, esse valor nunca
mais poderá ser alterado. nesse caso, além de const não permitir reatribuição,
nunca podemos alterar essa constante).

já quando usamos const com valores mutáveis (como arrays e objetos),
a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados.

Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre
a reatribuição da variável com sinal de atribuição = (a variável 
continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.

Por este motivo, pode-se usar const com objetos mutáveis e ainda
assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é
reatribuir o valor da variável.

exemplo:

const array = [1,2,3,4,5];
array = 'não pode mudar o valor do array por outro tipo'

*/