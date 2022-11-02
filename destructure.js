let person={
    name:"vick",
    age:27,
    school:"moringa"
}
// ES5 accesing name
person.name
// ES6 accessing name(destructuring)
const {name}=person
// importance of destructiring is we can assign variable to values of keys

const {name:userName}=person;
console.log(userName)

// nested objects destructuring
const user = {
    Vick: { 
      age: 34,
      email: 'vickopiyo@freeCodeCamp.com'
    }
  };
  const{Vick:{age,email}}=user
//   assign values to variables in a nested object

const {Vick:{age:umri,email:baruapepe}}=user
console.log(umri)

// array destructring
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

const [num1,,,,num2]=[1,3,8,4,5,6,7]
console.log(num1,num2)


// Destructing objects in functions
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  
  const half = ({max,min}) =>{ (max + min) / 2.0}; 