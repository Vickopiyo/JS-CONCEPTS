//  function getLargestNumbersInNestedArray(){const results = [];
//   for (let i = 0; i < arr.length; i++) {
//     let largestNumber = arr[i][0];
//     for (let j = 1; j < arr[i].length; j++) {
//       if (arr[i][j] > largestNumber) {
//         largestNumber = arr[i][j];
//       }
//     }
//     results[i] = largestNumber;
//   }

//   return results;}


// //   METHOD TWO
// function getLargestNummbers(){
//     return arr.map(function(group) {
//     return group.reduce(function(prev, current) {
//       return current > prev ? current : prev;
//     });
//   });}
//   // sum of ana array and nested array too
//   let students = [2,3,4,[4,5,6],6,7]

//    function total(arr){
//     return arr.flat(Infinity)
//       .reduce((total,value) =>total+value,0)}
//     // arr[index].forEach(element)
//     console.log(total(students))

    
//     const countArray = function(array){

//       let sum = 0;
//       for(let i = 0;i<array.length;i++){
//         if(array[i].isArray){
//           array[i]=countArray(array[i])
//         }
//         sum +=array[i]
//       }
//       return sum;

//     }
//     console.log(countArray(students))
  
    
  let workers = ["Faith","Fave","Vick","Edward"]


  // sorting alphabettically
  console.log(workers.sort())
  // sorting de-alpahbettcallly


  console.log(workers.sort(
    (a,b) => {
      if(a > b){
        return -1;
      }
      if(b > a){
        return 1;
      }
      return 0;
    }
  ))