// function taskOne(){
//     console.log("task one")
// }
// function tasktwo(){
//     console.log("task two")
// }
// // taskOne();    
// // tasktwo();
// setTimeout(taskOne,2000);
// tasktwo() ;
// const message = function(){
//     console.log("This sms is shown after 2secs")
// }
// setTimeout(message,2000);
// setTimeout(()=>{
//     console.log("This sms is shown after 2secs")},2000)
// window.onload = function(){
//   document.querySelector('#btn').addEventListener("click",setTimeout(()=>{
//     console.log("This sms is shown after 2secs")},2000))}    



    // let calc = function(num1,num2,calcType){
    //     if(calcType==='add'){
    //         return num1 + num2
    //     } else if(calcType==="multi"){
    //         return num1*num2
    //     }
    // // }
    // console.log(calc(3,5,"add"))
  let add = function(num1,num2){
      return num1 + num2;
  }
  let multiply = function(num1,num2){
      return num1 + num2;
  }

  let calc = function(num1,num2,callback){
      return callback(num1,num2);
  } 
  console.log(calc(5,6,add))
  let callback2 = function(callback3){
      return callback3(num1,num2)
  }

  console.log(callback2(1,2))
