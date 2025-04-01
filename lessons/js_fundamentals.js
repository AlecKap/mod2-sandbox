/*
JS Fundamentals Lesson Scratchpad

To run the code in this file, run the command:
      node lessons/js_fundamentals.js
*/ 
console.log("js_fundamentals.js is running")


/*
JS Variables & Data Types Examples
*/ 

var firstName = 'Ben';
var age = 26;
const isNice = true;

const policeSketchDescription = {
  hair: 'blond',
  eyes: 'brown',
  isTall: false,
  visibleTattoos: 1
}

let favoriteFoods = ['pizza', 'blueberries', 'ice cream', 'sushi']

let partnerName = null;
let jobTitle;



console.log("Eye Color: ", policeSketchDescription.eyes)







var quantity = 3;
var mythicalCreture = " Unicorns";
var creatureCount = quantity + mythicalCreture;
var creatureCount2 = `<p> I have ${quantity} ${mythicalCreture}<p>`

console.log('creature count: ', creatureCount)
console.log(creatureCount2)
console.log(typeof creatureCount2)
console.log(creatureCount2)

function addNums(num1, num2, num3, num4) {
  sum1 = num1 + num2;
  sum2 = num3 + num4;
  finalSum = sum1 + sum2;
  return finalSum 
}

function incrementByOne(num) {
  debugger
  return num ++
  console.log(num ++) // Not an actual return valu.
}

console.log(incrementByOne(11))
console.log(addNums(1,2,3,4))





/*
JS Conditionals
*/ 

function identifyCookie(cookie) {
  if (cookie === "chocolate chip") {
    console.log("This cookie is a chocolate chip cookie!");
  } else if (cookie === "oatmeal raisin") {
    console.log("This should not even be called a cookie :(");
  } else {
    console.log("I bet you wish you had a chocolate chip cookie");
  }
}

// identifyCookie("chocolate chip")
// identifyCookie("oatmeal raisin")
// identifyCookie("sugar")

function evaluateSleep(hoursOfSleep) {  
  console.log("I slept " + hoursOfSleep + " hours last night.")
}

// evaluateSleep(8)
// evaluateSleep(4)


let pets = ["thor", "luna", 'freyja']

function petReturn(petArray) {
  for (let i = 0; i < petArray.length; i++) {
    console.log(petArray[i])
  }
}

petReturn(pets)






