/////////////////////////////////////////////////////CONST////////////////////////////////////////////////////////
// const cannot change value, unlike var, and once I declare a const variable I have to assign it a value, it can even be an empty object{}

// var x = 1  // I can keep chnageing it to anything I want

// const x = 2
// console.log(x) // --> 2

// const y = {}
// y['a'] = 1
// console.log(y)



// ///////////////////////////////////////////////////////LET////////////////////////////////////////////////////////

// // the difference between let and const is that let variables value can be assigned multiple times, but I cannot keep declaring it, with var I can delare a variable many times and it will still output a value
// let x = 1 
// x = 3
// let x = 2 // error

// let x; // I can even declare x without assiging it a value, but if I were to do that with const it would not work

// var y = 1
// var y = 3 // still works 





// ///////////////////////////////////////////////////////SCOPE//////////////////////////////////////////////////////
// console.log(x) // temperal dead zone, cant access x before it has been declared

// const x = 1 


// // the x is in the if block and only accessible there
// if(true){ 
//   const x = 1 // const and let are not hoisted
//   console.log(x)
// }

// {
//   let x = 1 
//   console.log(x) //1
//   {
//     let x = 2 
//     console.log(x) // 2
//   }
// }

// // function declaration and expressions would work the same as const and let



///////////////////////////////////////////////////////ARROW FUNCTION/////////////////////////////////////////////
 
// const arr = [1,2,3,4]

// //Statement Bodies 
// const byTwo = arr.map((number)=>{
//   return number * 2 
// })

// console.log(byTwo) // ->  2, 4, 6, 8 ]

// //Expression Bodies
// const arr1 = [2,3,4,5]
// const byThree = arr1.map(number => number *3)
// console.log(byThree)


// var obj = {
//   value: 0,
//   increment:function(){
//     setTimeout(function(){
//       this.value++ // Nan, because this is referring to the function scope setTimeOut and not key of the object
//       console.log(this.value)
//     }, 1000)
//   }
// }

// obj.increment()

// // Lexical This - use arrow functions 
// var obj1 = {
//   value: 0,
//   increment: function () {
//     setTimeout(() =>{
//       this.value++
//       console.log(this.value)
//     }, 1000)
//     }
// }

// obj1.increment()


///////////////////////////////////////////////////////ARROW FUNCTION/////////////////////////////////////////////

// // I can pass in a number, string, array, object 
// function buy (item = "eggs", amount = 1){
//   console.log(item, amount)
// }

// buy('eggs')


///////////////////////////////////////////////////////REST OPERATOR/////////////////////////////////////////////

function print(age, siblings,...arr){
  console.log(arr) //-->'hello', 'world',0
}

print(25,4,'hello', 'world',0)
