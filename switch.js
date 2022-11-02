// var msg;

// var level = 2; 


// switch (level) {
// case 1:
// msg = 'Good luck on the first test ' ;
// break;
// case 2:
// msg = 'Second of three - keep going!';
// break;
// case 3:
// msg = ' Final round, al most there!';
// break;
// default :
// msg = 'Good luck!';
// break;
// }
let x = 0;
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
let expr = ""

switch(expr){
    case "oranges":
        console.log("oranges are 3");
        break;
        case "mangoes":
            console.log("mangoes are 4");
            break;
            case "banana":
        console.log("banana are 2");
        break;
        case "grape":
        console.log("grape are 3");
        break;    
        default:
            console.log("nO fuiits available")
}

var foo = 4;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}