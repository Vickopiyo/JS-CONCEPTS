// const person = {
//     name: "Taylor",
//     sayHello: function() {
//       return `Hello! My name is ${this.name}.`;
//     }
//   };
//   console.log(person.sayHello())
// //   Concise way of writing sayHello func;
// const user={
//     userName:"Vick",
//     sayHello(){ return `Hello, this is ${this.userName}`}
// }
// console.log(user.sayHello())

// // ES5 object constructor
// let Bird=function(legs,weight,wings){
//     this.legs=legs,
//     this.weight=weight,
//     this.wings=wings
// }
// let hen = new Bird(3,4,1)
// let duck = new Bird(4,10,4)
// // it console hen properties though with Bird at the begginniig bcz it is a constructor
// console.log(hen)
// // checking the prototype by

// console.log(duck instanceof Bird)

// // var spaceShuttle = function(targetPlanet){
// //     this.targetPlanet = targetPlanet;
// //   }
// //   var zeus = new spaceShuttle('Jupiter');
// // console.log(zeus)  
// // ES6 object constructror
// const student= {
//   name:"VIC",
//   age:25,
//   height:5.7

// }
// // ways of confirming is an key is existig in an object
// console.log("home" in student)
// let Ndege = function(name,color){
//   this.name= name;
//   this.color=color;
//   this.legs=2
// }

// // all birds always have two legs hence construction of prototype
// Ndege.prototype.legs=2
// let ndege1 = new Ndege("Malkia","Nyeupe")
// console.log(ndege1)
// // prototype avoids repetition of properties

// // checking abnd pushing  own properties of ndege1 to an array
// let props = []
// let protoprops
// for(const property in ndege1){
//   if(ndege1.hasOwnProperty(property)){
//     props.push(property)
//   } else{
//      protoprops.push(property)
//   }
// }
// console.log(props)
// console.log(protoprops)
// sum of ages in an object
const students = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = students.reduce((sum,user)=> sum + user.age, 0)
console.log(sumOfAges)

// output of name with their age
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
const usersObj= users.reduce((obj,user) => {
  obj[user.name]=user.age
  return obj;
},{})
console.log(usersObj)