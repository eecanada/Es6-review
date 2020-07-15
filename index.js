/////////////////////////////////////////////////////CONST////////////////////////////////////////////////////////
// const cannot change value, unlike var, and once I declare a const variable I have to assign it a value, it can even be an empty object{}

const x = 2
console.log(x)

const y = {}
y['a'] = 1
console.log(y)


///////////////////////////////////////////////////////LET////////////////////////////////////////////////////////

// the difference betwwen let and const is the the let variables value can change, however I cannot redefine x again like with var
let x = 1 
x = 3
let x = 2 // error


///////////////////////////////////////////////////////SCOPE//////////////////////////////////////////////////////
console.log(x) // temperal dead zone

const x = 1 

// the x is in the if block and only accessible there
if(true){ 
  const x = 1
  console.log(x)
}