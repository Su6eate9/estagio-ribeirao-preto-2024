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

// DESAFIO 04
// 3 interruptores: I1, I2 e I3
// 3 lâmpadas: L1, L2 e L3
// Duas idas as salas
// Pode ligar e desligar quantas vezes quiser

// LÓGICA DO PROBLEMA:
// liga I1 por 10min
// desliga I1 e liga I2
// vai para L2 e verifica:
// 	se tiver acesa = I2 liga L2 =>
// 		sabendo que I2 liga L2
// 		volta interruptores e liga I1
// 		vai para L1
// 			se tiver acesa
// 				I1 liga L1 && I2 liga L2 && I3 liga L3
// 			se não
// 				I1 liga L3 && I2 liga L2 && 13 liga L1

// 	se tiver apagada e quente = I1 liga L2
// 		sabendo que I1 liga L2
// 		vai para L1
// 			se L1 acesa
// 				I2 liga L1 && I3 liga L3
// 			se não
// 				I2 liga L3 && I3 liga L1

// 	se tiver apagada e fria = I3 liga L2
// 		sabendo que I3 liga L2
// 		vai para L1
// 			se L1 acesa
// 				I2 liga L1 && I3 liga L3
// 			se não
// 				I2 liga L3 && I3 liga L1

// CÓDIGO DO PROBLEMA
const lamps = [false, false, false];
const switches = [false, false, false];

function onSwitches(switchesIndex) {
  switches[switchesIndex] = true;
  setTimeout(() => {
    switches[switchesIndex] = false;
  }, 600000);
}

function verifyLamps(lampsIndex) {
  if (lamps[lampsIndex]) {
    return "acesa";
  } else if (!lamps[lampsIndex] && lamps.includes(true)) {
    return "apagada e quente";
  } else {
    return "apagada e fria";
  }
}

// LÓGICA DA SOLUÇÃO
onSwitches(0);
setTimeout(() => {
  switches[0] = false;
  switches[1] = true;
  const lampsState2 = verifyLamps(1);
  if (lampsState2 === "acesa") {
    switches[1] = false;
    switches[0] = true;
    const lampsState1 = verifyLamps(0);
    if (lampsState1 === "acesa") {
      lamps[0] = true;
      lamps[1] = true;
      lamps[2] = true;
    } else {
      lamps[0] = false;
      lamps[1] = true;
      lamps[2] = false;
    }
  } else if (lampsState2 === "apagada e quente") {
    switches[0] = true;
    const lampsState1 = verifyLamps(0);
    if (lampsState1 === "acesa") {
      switches[1] = true;
      switches[2] = true;
      lamps[0] = true;
      lamps[2] = true;
    } else {
      switches[1] = false;
      switches[2] = true;
      lamps[0] = false;
      lamps[2] = true;
    }
  } else if (lampsState2 === "apagada e fria") {
    switches[2] = true;
    const lampsState1 = verifyLamps(0);
    if (lampsState1 === "acesa") {
      switches[1] = true;
      switches[0] = true;
      lamps[0] = true;
      lamps[2] = true;
    } else {
      switches[1] = false;
      switches[0] = true;
      lamps[0] = false;
      lamps[2] = true;
    }
  }
  // console.log("Estado final das lâmpadas:", lamps);
  // Tire o console.log() para verificar
}, 1000);

// DESAFIO 05
function invertString(str) {
  let invertedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    invertedString += str[i];
  }
  return invertedString;
}
const str = "Teste concluído com sucesso"; // Altere a string para testes
console.log(invertString(str));
