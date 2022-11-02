  // let cards = ["1","2","3","4"]

  // // for (let index = 0; index < cards.length; index++) {
  // // console.log(cards[index])
      
  // }
  // let sentence= ["Hello","my","name","is","Per"]
  //   let greetingL = document.getElementById("greetingEl")

  //  for (let index = 0; index < sentence.length; index++) {
  //    greetingL.textcontent = sentence[index]
     
  //  }
  //  a loop that runs upto 100 and outputs "fizz" at multples of 3,"buzz" at multiple of 5 and "fizzbuzz" at multple of 3 and 5
  for (let i = 0; i <= 100; i++){
    if(i % 3 ===0 && i % 5 === 0) console.log("fizzbuzz");
    if(i % 5 === 0)console.log("buzz")
    if(i % 3 === 0 )console.log("fizz")

    console.log(i)
  }
  