function countdown(){if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }}
  function countDown(num){
    if (num===0){
      return ;
    }
    console.log(num)
    const newNumber=num-1;
    countDown(newNumber)
    
  }
  countDown(5)
  
  // console.log(countDown(5))
  // function countDecrease()