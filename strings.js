let str = "VICTOR"
// how to split a string
 let splitted =str.split()
console.log(str.split(""))
// OUTCOME V I C T O R

// reversing a string
console.log(splitted.reverse())


// how to reverse a str
console.log(str.split("").reverse().join())

// other methods linke charAt(index) returns the index of the str inputted 
// substr(index) returns from the index passed in the as a function
console.log(Math.pow(5,5))

// finding longest word in as string
let paragraph = "I am victor and i am love  softwares"
function getLongestWord(str){
    return str.split(" ").reduce((longest,word)=> Math.max(longest,word.length),0)
}
// always add the value in the reduce function

console.log(getLongestWord(paragraph))
// Checking is the last words match


let string = "vick"

function confirmEnd (str,target){
    return str.slice(str.length-target.length)===target
}
// simillarly use in built functinon endsWith()


// how to reverse a string

const reverseString = (str,separator) => str.split(separator).reverse().join(separator)

let name = "VICTOR"

console.log(reverseString(name,""))

// how to confirm an anagram
  

let str1= "daddy"
let str3 = "yddad"
const anagram = (string1,string2) => {
    if(string1.length !== string2.length) return "unequal strings";
if(anagramInside(string1) === anagramInside(string2)) return true;
return false
}

  console.log(anagram(str1,str3))