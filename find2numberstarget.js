const numbers= [3,4,5,6,8,9]

// THIS METHODS TAKES n*2 runtime and n space complexity hence not best to be used 
function hasTargetSum(arr,target){
    // in terms of space complexity we have n because of the array 
// iterate over each item in the array
// big O  notation in terms of run time here is n because its a loop
for(let index=0;index<arr.length;index++){
    // big O  notation in terms of run time here is n*2 be cause its a nested loop
    // finds a complement by subtsraction each element iteterated over
    const complement= target - arr[index];

    // loops from the second item aka index next after a item above to find a complement
   for (let num=index+1;num<arr.length;num++){
    //    if found it element found added to complemet returns target theen returns true
     if(arr[num]===complement) return true;
    
    }
  return false;
}
}
console.log(hasTargetSum(numbers,11))


// METHOD OF FINDING TO ARRAY WHOSE IS ADDING UP TO TARGET
function hasTargetSum(array,target){
    iteratedNumbers = [];
    for (const iterator of array) {
        const complement= target - iterator  
        if(array[complement]===c )return true;
        iteratedNumbers[iterator]=true;
    }
    return false;
}