/* 
 * Regras para criação de variáveis
 *
 * 1- Não pode ser criado variáveis com palavras reservadas;
 * 2- Preciam ter nomes significativos, mostrando exatamente o que é, sem meias palavras;
 * 3- Não pode começar o nome de uma variável com numeros;
 * 4- Não pode conter traços ou espaços;
 * 5- Utilizando camelCase, as variáveis iniciam com letra minúscula e as próximas palavras com letra maiúscula;
 * 6- As variáveis são case sensitive, o case da palavra faz diferencia entre as variáveis;
 * 7- Não é possível declarar a variável novamente &
 * 8- Não utilizar var e sim sempre let.
 */


/* Para criar variáveis é necessário indicar com a palavra reservada let */
let nome = "João"; // String

console.log(nome, "nasceu em 1984.");
console.log("Em 2000", nome, "conheceu Maria.");
console.log(nome, "casou-se com Maria em 2012.");
console.log("Maria teve 1 filho com", nome, "em 2015.");
console.log("O filho de", nome, "chama Eduardo.");

/* É possível declarar uma variável sem iniciar ela, printa um valor "undefined"*/
let varivavel;
console.log(varivavel);

let varivavel_2;
varivavel_2 = 6;
console.log(varivavel_2);