

function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
    // Only change code above this line
  }
  // imperatively wriiten as
  function getRandomNumbers(min,max){
    // getting random numbers from btw 0 and 1
    const random = Math.random()
    // gett diff of the the range
    const diff = (max-min)
    // rounding off the diff of random number btwn the range
    const roundingRandom= Math.floor(random*diff)
    //  numbers above min
    const numberAboveMinimum= min + roundingRandom
    return numberAboveMinimum;
  }
  console.log(getRandomNumbers(20,40))