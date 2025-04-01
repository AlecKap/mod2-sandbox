/*
JS Array Prototype Methods Lesson Scratchpad

To run the code in this file, run the command:
  node lessons/array_prototype_methods.js
*/ 
// console.log("array_prototype_methods.js is running")


// const prices = [4.99, 5.50, 7.00, 10.25];
// const increasedPrices = [];

// prices.forEach((price) => {
//   increasedPrices.push(price += 1)
// })

// console.log(increasedPrices)


const numbers = [15, 6, 14, 2, 22, 9, 45];
console.log(numbers)
function sortDescending(nums) {
  console.log(nums.sort((a,b) => b - a))
  
}

sortDescending(numbers)