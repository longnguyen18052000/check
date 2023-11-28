const arr = [2, 6, 4, 3, 5, 7, 8];
let maxLength = 1;
let startPos = 0;
let currentLength = 1;
let currentPosition = 0;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < arr[i + 1]) {
    currentLength++;
    if (currentLength > maxLength) {
      maxLength = currentLength;
      startPos = currentPosition;
    }
  } else {
    currentLength = 1;
    currentPosition = i + 1;
  }
}

console.log(`Length: ${maxLength}, Pos: ${startPos}`);
