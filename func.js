// (function  () {
//     console.log("Yet more razzling");
//   })
//   f (){
//       console.log('Hello')
//   }
//  ( function   (){
//     console.log("Yet more razzling");
//   })()
//   f () {
//     console.log("Yet more razzling");
//   }
function outer(greeting, msg = "It's a fine day to learn") {
    // 2
    const innerFunction = function (name, lang = "Python") {
      // 3
      return `${greeting}, ${name}! ${msg} ${lang}`; // 4
    };
    return innerFunction("student", "JavaScript"); // 5
  }
  