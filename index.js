// DESAFIO 01
function calculateSum() {
  const index = 13;
  let = sum = 0;
  let = k = 0;

  while (k < index) {
    k = k + 1;
    sum = sum + k;
  }
  console.log(sum);
  // O valor final de sum será 91
}
calculateSum();

// DESAFIO 02
function insertNumberInFibonacci() {
  function isFibonacci(num) {
    let a = 0;
    let b = 1;

    while (b <= num) {
      if (b === num) {
        return true;
      }
      let calc = a + b;
      a = b;
      b = calc;
    }

    return false;
  }
  const num = 5; // Altere o valor para testes
  if (isFibonacci(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
  }
}
insertNumberInFibonacci();

// DESAFIO 03 - ADEQUANDO AS OPÇÕES COM RESULTADOS PARA ARRAYS
// a) 1, 3, 5, 7, ___
const a = [1, 3, 5, 7, 9]; // Número atual + 2 = próximo número

// b) 2, 4, 8, 16, 32, 64, ____
const b = [2, 4, 8, 16, 32, 64, 128]; // Número atual * 2 = próximo número

// c) 0, 1, 4, 9, 16, 25, 36, ____
// OPÇÃO 01: Número atual + próximo ímpar: 0 + 1 = 1(número atual + próximo ímpar = 3), logo 1 + 3 = 4 ||
// OPÇÃO 02: quadrado dos números naturais em ordem
const c = [0, 1, 4, 9, 16, 25, 36, 49];

// d) 4, 16, 36, 64, ____
const d = [4, 16, 36, 64, 100]; // Quadrado dos números pares começando pelo 2

// e) 1, 1, 2, 3, 5, 8, ____
const e = [1, 1, 2, 3, 5, 8, 13]; // Sequência de Fibonacci

// f) 2,10, 12, 16, 17, 18, 19, ____
const f = [2, 10, 12, 16, 17, 18, 19, 20]; // Progressão aritmética para os valores finais

// DESAFIO 04:
