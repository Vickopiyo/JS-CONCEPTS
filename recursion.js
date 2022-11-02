 
 
 
 
 
 
//  function sum(arr, n) {
//     // Only change code below this line
//   if(n<=0){
//     return 0;
//   }else{
//     return sum(arr,n-1)+arr[n-1]
//   }
//     // Only change code above this line
//   }
//   const marks=[2,3,4,5,6]
//   console.log(sum(marks,1))
  function sum(arr,n){
    if(n <=0 ){
      return ;
    }else{
      return sum(arr, n-1) + arr[n-1]
    }
  }
  const people= [1,2,3,4,5]
  
  console.log(sum([1,2,3,4,5],4))