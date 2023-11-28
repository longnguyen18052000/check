function factorialLoop(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

const number = 10;
const result = factorialLoop(number).toString();
let check = 0;
for (let i = 0; i < result.length; i++) {
  if (result[i] === "0") {
    check++;
  }
}

console.log(`Giai thừa của ${number} là: ${result}`, "số lượng số 0 = ", check);
