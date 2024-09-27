_TIPOS DE DADOS_

NaN representa, literalmente, “not a number”

Existem cinco tipos de operações que podem retornar NaN:

Tentativas de converter para números valores que não podem ser convertidos, como parseInt(‘texto’) ou Number(undefined). Os valores booleanos true e false podem ser convertidos para 1 e 0 usando Number(), porém retornarão NaN caso a tentativa de conversão seja feita com parseInt().

Operações matemáticas que não resultam em números reais, por exemplo Math.sqrt(-1).

Operações onde um dos valores é NaN ou pode ser convertido para NaN, por exemplo 5 * ‘a’, 5 + NaN.

Formatos indeterminados como Infinity / Infinity, Infinity - Infinity. O valor Infinity existe no JavaScript e você pode conferir mais sobre ele na documentação do MDN.

Outros casos onde um valor não pode ser representado como número.

Como verificar se um valor é NaN?
Você pode utilizar os métodos Number.isNaN() ou isNaN():
Number.isNaN(numero) // false
