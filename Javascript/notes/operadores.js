/* Operadores aritiméticos 
 * + -> Soma e concatenação
 * - -> Subtração
 * / -> Divisão
 * * -> Multiplicação
 * ** -> Potenciação
 * % -> Resto da divisão
 */

const num1 = 6;
const num2 = 3;
const str1 = "Mariana"
const str2 = "Freitas"

/* Os operadores no JavaScript possuem sequencia assim como na sequencia matemática */
let conc = str1 + str2
let sum = num1 + num2;
let sub = num1 - num2;
let div = num1 / num2;
let multi = num1 * num2;
let poten = num1 ** num2;
let rest = num1 % num2;

console.log(conc)
console.log(sum);
console.log(sub);
console.log(div);
console.log(multi);
console.log(poten);
console.log(rest);
console.log(sum);

/* Incrementação e decrementação
 * Quando o operador vem antes da constante ele é um pré incremento/decremento, 
 *      onde ele realiza primeiro a incrementação/decrementação e depois a ação
 * 
 * Quando o operador vem depois da constante ele é um pós incremento/decremento,
 *      onde ele primeio realiza a ação e depois a decrementação/incrementação
 */
let contador = 1;
contador++;
++contador;
contador += 2;

let contador2 = 10;
contador2--;
--contador2;
contador2 -= 2;
contador2 *= 2;
contador2 /= 2;

/* Conversão de tipos */

const number = parseInt("9")
const number2 = parseFloat("5.6")

console.log(number)
console.log(number2)