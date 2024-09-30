const estudanteReprovou = (notaFinal, faltas) => {
  // const reprovou = notaFinal < 7 && (faltas > 4) & "Reprovou";

  if (notaFinal < 7 && faltas > 4) {
    return true;
  } else {
    return false;
  }
};

// suprime as chaves e o return (MUITO UTILIZADOS NAS CALLBACKS E FUNCOES CURTAS)
const exibeNome = (nome) => nome;

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));
console.log("Vitor");
