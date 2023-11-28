function decimalToBinary(decimalNumber) {
  let binary = "";
  let quotient = decimalNumber;

  if (decimalNumber === 0) {
    return "0";
  }

  while (quotient > 0) {
    let remainder = quotient % 2;
    binary = remainder + binary;
    quotient = Math.floor(quotient / 2);
  }

  return binary;
}

const decimalNum = 203;
const binaryResult = decimalToBinary(decimalNum);
console.log(`Số nhị phân của ${decimalNum} là: ${binaryResult}`);
