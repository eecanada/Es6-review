/////////////////////////////////////////////////////CONST////////////////////////////////////////////////////////
// const cannot change value, unlike var, and once I declare a const variable I have to assign it a value, it can even be an empty object{}

var x = 1  // I can keep chnageing it to anything I want

const x = 2
console.log(x) // --> 2

const y = {}
y['a'] = 1
console.log(y)



///////////////////////////////////////////////////////LET////////////////////////////////////////////////////////

// the difference betwwen let and const is the the let variables value can be assigned multiple times, but I cannot keep declaring it, with var I can delare a variable many times and it will still output a value
let x = 1 
x = 3
let x = 2 // error

let x; // I can even declare x without assiging it a value, but if I were to do that with const it would not work

var y = 1
var y = 3 // still works 





///////////////////////////////////////////////////////SCOPE//////////////////////////////////////////////////////
console.log(x) // temperal dead zone

const x = 1 

// the x is in the if block and only accessible there
if(true){ 
  const x = 1
  console.log(x)
}