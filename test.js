// function sayHello(name){
//     console.log(`Hello ${name}`)
// }
// // sayHello("vick")
// function sayHello(greeting,name){
//     console.log(`${greeting},${name}`)

// }
// sayHello("hello","vick")
// function sayHello(greeting,firstname){
//     console.log("Firstname:",firstname)
//     console.log("Greeting:",greeting)
//     console.log(`${greeting},${firstname}`)
// }
// sayHello("morning","vick")


// function add(x,y){
    
    
//     console.log(add(3,6));
    
// }
// add(3,6)
// return x +y;
// function say (greeting,name){
//    console.log (greeting + name)

// }
// say("hi ", "vick")
 


// function add(num1,num2){
//     console.log(num1 + num2)
// }
// add(2,3)
// let sum = 1 + 2
// let message = `The sum of numbers is:${sum}`
// console.log(message)
// function say(greeting,firstname){
//     console.log("I was called")
//     return `${greeting},${firstname}`;
   
// }
// console.log(say("hi","vick"))
document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("notify")
    button.addEventListener('click', function(){
      console.log("Printing a Message!")
    })
  });