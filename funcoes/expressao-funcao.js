const estudanteReprovou = function (notaFinal, faltas) {
  // const reprovou = notaFinal < 7 && (faltas > 4) & "Reprovou";

  if (notaFinal < 7 && faltas > 4) {
    return true;
  } else {
    return false;
  }
};

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));
