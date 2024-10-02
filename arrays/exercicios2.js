// 1 - Crie uma função que receba dois arrays e os concatene em um único array.
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const arrayConcatenado = array1.concat(array2)

console.log(arrayConcatenado)

// 2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const parteNumeros = numeros.slice(3, 7)

console.log(parteNumeros)

// 3 - Dado o array frutas contendo frutas que desejamos comprar na feira:

// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']

// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']

frutas.splice(2, 2, 'Kiwi', 'Pêssego')

console.log(frutas)

// 4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante.
//Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.

const menuPrincipal = ['Pizza', 'Hambúrguer', 'Salada']
const menuDeSobremesas = ['Torta', 'Sorvete', 'Pudim']

const menuCompleto = menuPrincipal.concat(menuDeSobremesas)

console.log(menuCompleto)
// 5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1
// e aumentando em 1 a cada elemento.

// Dicas:

// comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
// você pode resolver usando um for dentro de outro for.

const matriz = []

const listaDeArray1 = [1, 2, 3]
const listaDeArray2 = [4, 5, 6]
const listaDeArray3 = [7, 8, 9]

matriz.push(listaDeArray1, listaDeArray2, listaDeArray3)

console.log(matriz)

// 6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.

console.log(matriz[1][2])

// 7 - Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.

const novoElemento = 15

matriz[2][1] = novoElemento

console.log(matriz)
// 8 - Crie uma matriz 3x3 chamada 'tabuleiro' representando um jogo da velha.
// Preencha-a com 'X', 'O' e espaços vazios (' ') de forma aleatória.

const tabuleiro = [];
for (let i = 0; i < 3; i++) {
    const linha = [];
    for (let j = 0; j < 3; j++) {
        const opcoes = ['X', 'O', ' '];
        linha.push(opcoes[Math.floor(Math.random() * 3)]);
    }
    tabuleiro.push(linha);
}

console.log("Tabuleiro do jogo da velha:");
console.log(tabuleiro);

// 9 - Crie uma função que receba uma matriz quadrada como argumento e
// retorne a soma de todos os elementos na diagonal principal.

function somaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][i];
    }
    return soma;
}

const matrizQuadrada = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Soma da diagonal principal:", somaDiagonalPrincipal(matrizQuadrada));

// 10 - Crie uma matriz 4x4 chamada 'matrizTransposta' e preencha-a com números.
// Em seguida, crie uma função que retorne a transposta dessa matriz.

const matrizTransposta = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

function transporMatriz(matriz) {
    const transposta = [];
    for (let i = 0; i < matriz[0].length; i++) {
        transposta[i] = [];
        for (let j = 0; j < matriz.length; j++) {
            transposta[i][j] = matriz[j][i];
        }
    }
    return transposta;
}

console.log("Matriz original:");
console.log(matrizTransposta);
console.log("Matriz transposta:");
console.log(transporMatriz(matrizTransposta));
