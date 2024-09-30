// 1. Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária,
// depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao,
// considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

let saldo = 1200;
let deposito = 200;
let saque = 300;
const operacao = saldo + deposito - saque;
console.log(operacao);

// 2. Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é
// par ou ímpar. Exiba o resultado no console.

let varNumerica = 14;

const parOuImpar = varNumerica % 2 ? "Impar" : "Par";

console.log(parOuImpar);

// 3. Considere uma situação em que você está verificando se um usuário está logado e tem permissão de
// administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas
// condições e use o operador AND para verificar se ambas são verdadeiras.

const usuarioLogado = true;
const usuarioTemPermissao = true;

if (usuarioLogado === true && usuarioTemPermissao === true) {
  console.log("Usuário está logado e tem permissão!");
} else {
  console.log("Usuário não está logado e/ou não tem permissão!");
}

// 4. Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira.
// Exiba o resultado no console.

const varOne = true;
const varTwo = true;

if (varOne === true || varTwo === true) {
  console.log("Ao menos uma das variáveis é verdadeira.");
} else {
  console.log("Nenhuma das variáveis são verdadeiras.");
}

// 5. Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show.
// Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais
// (if, else) para determinar se o usuário pode realizar a compra.

const idade = 18;
const idadeMinima = 16;

if (idade >= idadeMinima) {
  console.log("O usuário pode realizar a compra!");
} else {
  console.log("Usuário não tem idade suficiente para realizar a compra!");
}
