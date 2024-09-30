// 1. Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase
// com letras maiúsculas.
const frase = "Hello World!".toUpperCase();
console.log(frase.length);
console.log(frase);

// 2. Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined).
// Exiba os valores no console.
const variavelNull = null;
let variavelUndefined;

console.log(`Variável Null: ${variavelNull} e Variável undefined: ${variavelUndefined}`);

// 3. Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados
// (number, string, boolean) em uma única string e exiba o resultado no console.
const varNumber = 20
const varString = 'Vitao'
const varBoolean = true

console.log(`O ${varString} tem ${varNumber}? ${varBoolean}.`)

// 4. Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número.
// Exiba os tipos de dados resultantes no console.
const string = '2'
const number = 4

const numberToString = number.toString()
const stringToNumber = parseInt(string)

console.log(typeof numberToString)
console.log(typeof stringToNumber) // QUEBROU O CODIGO


// 5. Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase,
// toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

const modificarString = 'Olá Seja, bem-vindo'

console.log(modificarString.toUpperCase())
console.log(modificarString.toLocaleLowerCase())
console.log(modificarString.slice(2, 5))
console.log(modificarString.concat('!'))
console.log(modificarString.includes("Olá S"))
console.log(modificarString.indexOf('vindo'))
