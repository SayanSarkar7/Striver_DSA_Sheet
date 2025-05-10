// ---> taking input from terminal
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let size = 0;
// let arr = [];

// rl.question("Enter the size of the array: ", (sizeInput) => {
//   size = parseInt(sizeInput);

//   rl.question(`Enter ${size} numbers separated by spaces: `, (elementsInput) => {
//     arr = elementsInput.split(" ").map(Number);

//     if (arr.length !== size || arr.some(isNaN)) {
//       console.log(`Please enter exactly ${size} valid numbers.`);
//     } else {
//       console.log("Array:", arr);
//     }

//     rl.close();
//   });
// });

const arr = [1, 3, 2, 1, 3];
const queryArr = [5, 9, 1, 4, 2, 7, 3, 2];

// preCompute
const hash = new Array(Math.max(...queryArr)+1).fill(0);

for (let i = arr.length; i >= 0; i--) {
  hash[arr[i]] += 1;
}

// fetch
for(let i=0;i<queryArr.length;i++){
    console.log(`${queryArr[i]} appeared ${hash[queryArr[i]]} times\n`);
    
}

// console.log(arr);
