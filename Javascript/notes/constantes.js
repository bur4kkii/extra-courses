/* 
 * Regras para criação de constantes
 *
 * 1- Não pode ser criado constantes com palavras reservadas;
 * 2- Preciam ter nomes significativos, mostrando exatamente o que é, sem meias palavras;
 * 3- Não pode começar o nome de uma constante com numeros;
 * 4- Não pode conter traços ou espaços;
 * 5- Utilizando camelCase, as constantes iniciam com letra minúscula e as próximas palavras com letra maiúscula;
 * 6- As variáveis são case sensitive, o case da palavra faz diferencia entre as constantes;
 * 7- Não é possível declarar a constante novamente nem alterar seu valor;
 * 8- Não utilizar var e sim sempre const &
 * 9- Não é possível declarar constante sem inicializar ela.
 */

const constante = "constante";
console.log(constante)
console.log(typeof constante)

/* Evoluir as variáveis e constantes invés de ficar resignificando elas */
const valor1 = 3;
const valor2 = 5;
const resultado = valor1 + valor2;
const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);

/* O JavaScript é uma linguagem de tipagem dinâmica, ou seja, não precisamos indicar o tipo de dado */
console.log(typeof resultadoDuplicado);

/* Utilizando o typeof é possível visualizar o tipo de dado que está amarzenado na variável ou constante */


/* Exercicio */
/* Mariana Freitas de Abreu tem 22 anos, pesa 54 Kg, tem 1.64 metros de altura e seu IMC é de tanto */

const nome = "Mariana";
const sobrenome = "Freitas de Abreu";
const idade = 23;
const peso = 54;
const alturaEmMetros = 1.64;
const anoAtual = 2023;
let imc;
let anoNascimento;

imc = peso / (alturaEmMetros * alturaEmMetros);
anoNascimento = anoAtual - idade;

/* Exemplo de uso de template string */
console.log(`${nome} ${sobrenome}, tem ${idade} anos, nasceu no ano ${anoNascimento}, pesa ${peso}Kg, tem ${alturaEmMetros} e seu IMC é de ${imc}`);