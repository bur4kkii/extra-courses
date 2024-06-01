/* Strings são indexadas */
let texto = "um \"texto\"";
let texto2 = "um \\texto";
console.log(texto[5]);

const nome = "Mariana Freitas de Abreu";
const comprimento = nome.length;
const segundaLetra = nome[1];
const primeiraLetraA = nome.indexOf("a");
const ultimaLetraA = nome.lastIndexOf("a");
const tresUltimasLetras = nome.slice(-3, nome.length); //primeiro parâmetro se refere ao primeiro indice da string e o segundo se refere ao ultimo indice da string
const palavras = nome.split(' ');
const maiusculas = nome.toUpperCase();
const minusculas = nome.toLocaleLowerCase();

console.log(nome);
console.log(comprimento);
console.log(segundaLetra);
console.log(primeiraLetraA);
console.log(ultimaLetraA);
console.log(tresUltimasLetras);
console.log(palavras);
console.log(maiusculas);
console.log(minusculas);

//document.body.innerHTML - Dispõe tudo que está sendo guardado, no body do HTML