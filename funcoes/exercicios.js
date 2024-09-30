// 1. Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada.
// Em seguida, chame a função e exiba a saudação no console.

const exibeNome = (nome) => console.log(`Olá ${nome}, seja bem-vindo!`);
exibeNome("Vitor");

// 2. Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18).
// Imprima o resultado no console.
const maiorDeIdade = (idade) => {
  return idade >= 18 ? "Você é maior de idade!" : "Você não é maior de idade!";
};

console.log(maiorDeIdade(20));

// 3. Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente)
// utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

function palindromo(palavra) {
  return palavra === palavra.split("").reverse().join("")
    ? "É um palíndromo"
    : "Não é um palíndromo";
}

console.log(palindromo("reter"));

// 4. Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles.
// Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

const verificaNumeroMaior = (numberOne, numberTwo, numberThree) => {
  if (numberOne > numberTwo && numberOne > numberThree) {
    console.log(numberOne);
  }

  if (numberTwo > numberOne && numberTwo > numberThree) {
    console.log(numberTwo);
  }

  if (numberThree > numberTwo && numberThree > numberOne) {
    console.log(numberThree);
  }
};

verificaNumeroMaior(25, 16, 8)

// 5. Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente.
// A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

const calculaPotencia = (base, expoente) => {
    return base ** expoente
}

console.log(calculaPotencia(2, 5));
