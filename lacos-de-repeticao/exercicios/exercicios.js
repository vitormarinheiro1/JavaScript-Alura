// 1. Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
console.log("=============== EXERCÍCIO 1 ===============");

const lista = [1, 2, 3, 4, 5];

for (i of lista) {
  console.log(i);
}

// 2. Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

console.log("=============== EXERCÍCIO 2 ===============");
function mostrarIndiceEElemento() {
  const array = [50, 40, 30, 20, 10];
  for (i = 0; i < array.length; i++) {
    console.log(i, array[i]);
  }
}

mostrarIndiceEElemento();

// 3. Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

console.log("=============== EXERCÍCIO 3 ===============");

// function soma() {
//   const numerosInteiros = [2, 3, 1, 4];
//   for (i = 0; i < numerosInteiros.length; i++) {
//     for (i; i = 0; i++) {
//       console.log(
//         numerosInteiros[0] +
//           numerosInteiros[1] +
//           numerosInteiros[2] +
//           numerosInteiros[3] +
//           numerosInteiros[4]
//       );
//     }
//   }
// }

// soma();

// 4. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no
// seguinte formato: 'o menor número é X e o maior número é Y'.

console.log("=============== EXERCÍCIO 4 ===============");

// 5. Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]
// e exibir no console apenas os números pares contidos nesse array.

console.log("=============== EXERCÍCIO 5 ===============");

// 6. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
console.log("=============== EXERCÍCIO 6 ===============");
