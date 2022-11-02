function rot13(str) {
    let newStr="";
      let upperAlph=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let rotAlph=["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"];
    for(let i=0; i<str.length; i++){
   
      let letter=str[i];
      let letTest=/[A-Z]/g;
      if(letTest.test(letter)){
        let indexOfLetter=upperAlph.indexOf(letter);
        let newLetter=rotAlph[indexOfLetter];
        newStr += newLetter;
      }
      else{
        newStr += letter;
      }
    }
    return newStr;
  
  
  }
  
  rot13("SERR PBQR PNZC");function rot13(str) {
    let newStr="";
      let upperAlph=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let rotAlph=["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"];
    for(let i=0; i<str.length; i++){
   
      let letter=str[i];
      let letTest=/[A-Z]/g;
      if(letTest.test(letter)){
        let indexOfLetter=upperAlph.indexOf(letter);
        let newLetter=rotAlph[indexOfLetter];
        newStr += newLetter;
      }
      else{
        newStr += letter;
      }
    }
    return newStr;
  
  
  }
  
  console.log(rot13("SERR PBQR PNZC"));