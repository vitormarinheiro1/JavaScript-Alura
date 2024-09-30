// exemplo de array -> const lista = [10, "oi", true, [1, 2], { a: b }];

const notas = [10, 6.5, 8, 7.5];

const calcularMedia = () => {
  return (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
};

console.log(calcularMedia());
