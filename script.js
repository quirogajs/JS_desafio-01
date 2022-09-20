
function calculate(num1, num2) {
    alert(`A soma dos dois números é: ${Number(num1) + Number(num2)}`);
    alert(`A subtração dos dois números é: ${Number(num1) - Number(num2)}`);
    alert(`A multiplicação dos dois números é: ${Number(num1) * Number(num2)}`);
    alert(`A divisão dos dois números é: ${(Number(num1) / Number(num2)).toFixed(2)}`);
    alert(`O resto da divisão dos dois números é: ${Number(num1) % Number(num2)}`);
}

let inputNumberOne = Number(prompt(`Insira o primeiro número.`));
let inputNumberTwo = Number(prompt(`Insira o segundo número.`));
const theyAreEqual = inputNumberOne == inputNumberTwo;
const theSumIsEven = (inputNumberOne + inputNumberTwo) % 2 == 0;

theyAreEqual ? alert(`Os números são iguais.`) : alert(`Os números são diferentes.`);
theSumIsEven ? alert(`A soma entre eles é par.`) : alert(`A soma entre eles é ímpar.`);

calculate(inputNumberOne, inputNumberTwo);