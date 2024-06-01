/* Os indices iniciam no 0, assim como string 
Arrays são objetos*/
const alunos = ["Luiz", "João", "Ana Clara", "Juliana"];
const idade = [12, 14, 13, 12];
const passou = [true, null, false, null];

console.log(alunos[3]);
console.log(alunos);

alunos[2] = "Maria Clara";
console.log(alunos);

/* Adiciona de acordo com o indice indicado */
alunos[4] = "Luana";
console.log(alunos);

alunos[alunos.length] = "Joana";
console.log(alunos);

/* Adiciona item no final do Array */
alunos.push("Giovanna");
console.log(alunos);

/* Adiciona item no inicio do Array */
alunos.unshift("Adriana");
console.log(alunos);

/* Remove do final */
alunos.pop();
console.log(alunos);

/* Imprime o item que foi removido */
const removido = alunos.pop()
console.log(removido);

/* Imprime o pedaco da array */
const pedaco = alunos.slice(0, 2)
console.log(pedaco)

const pedaco2 = alunos.slice(0, -3)
console.log(pedaco2)


console.log(idade);
console.log(passou);

/* Imprime o valor do comprimento do Array */
console.log(passou.length);