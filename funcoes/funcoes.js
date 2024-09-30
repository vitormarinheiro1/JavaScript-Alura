// As chaves inicia o bloco da funcao

// parâmetros/argumentos
// retorno

function exibeInfosNomeEstudante(nome, idade) {
  return console.log(`O nome é ${nome} e idade ${idade}!`);
}

exibeInfosNomeEstudante("Vitor", 19);
exibeInfosNomeEstudante("Ana", 17);

function dividir(dividendo, divisor) {
  if (divisor !== 0) {
    return dividendo / divisor;
  } else {
    return "favor não dividir por zero";
  }
}

const resultado = dividir(10, 5);
console.log(resultado); // 2
const resultadoZero = dividir(10, 0);
console.log(resultadoZero); // 'favor não dividir por zero'

// hoisting