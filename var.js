// var msg = "Sig up for our offers"

// function upddateMsg(){
//     console.log(msg)
// }
// upddateMsg(
// var width = 3;
// var height = 4;


// function area(width, height){
//     return width*height
    
// }
// console.log(area(4, 5))
function getSize(width,height,depth){
   var area = width*height;
   var volume = width*height*depth;
   var size = [area,volume]
   return size 
}
var areaOne = getSize(3,2,3)[0]
var volumeOne = getSize(3,2,3)[1]
console.log(areaOne)
console.log(volumeOne)
console.log(getSize(4,4,4))



var hotel = {
    name: "sky",
    rooms : 40,
    booked : 40,
    avail:function(){

    }

}
console.log(hotel.name)
 

let mash = new Object();

mash.name = "Quay";
mash.rooms = 450;
mash.booked = 740;
console.log(mash)

mash.name = "villa"
console.log(mash)

delete mash.booked;
console.log(mash)



function Lodge(name,rooms,booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
}
var Lodge1 = new Lodge("hy",50,800)
var  Lodge2 = new Lodge("QR",40,40)
console.log(Lodge2)

console.log(Lodge1["name"])


var Eko = {
    name:"hOTEL",
    room:[1,2,3]
    
}


console.log(Eko.name)

   var say = 'HELLO'
   var SAY = say.toLowerCase()
   
    console.log(SAY.charAt(1))
    console.log(SAY.lastIndexOf(3))
//    console.log(SAY)
let text = "VISIT ME"
let rst = text.replace("ME","us")
console.log(rst)
  var randomNum = Math.floor((Math.random()*10)+1)
console.log(randomNum)
  var today = new Date();

  var hotel = {

  }

  var today1 = new Date(2022,11,26)

  console.log(today1)

var  hotel ={
    name:"QR",
    // rate in dollar
    roomRate:240,
    // discount in percent
    discount:15,
    offerPrice:function(){
        var OfferRate =this.roomRate*((100 -this.discount)/100);
        return OfferRate;
    }
}
var hotelName,roomRate,specialRate;
hotelName= document.getElementById("hotelname")
roomRate= document.getElementById("roomRate")
specialRate = document.getElementById("specialRate")
hotelName.textContent = hotel.name
roomRate.textContent = hotel.roomRate
specialRate.textContent = "$"+ hotel.offerPrice();
console.log(hotel.offerPrice())

var score = 4;
if(score <=3){
    document.write("PASSED")
} else{
    document.write("FAILED")
}
var pass = 50;
var score = 80;
var hasPassed = score>=pass;
var el = document.getElementById("pass")
el.textContent = "Level passed :" + hasPassed;
console.log(hasPassed)
// var score = 75;
// var msg;
// if (score>=50){
//     msg= "CONGRATS :"
//     msg +="Proceed"
// }


var score = 75;
var msg;
function congrats(){
    msg = "CONGATS "
}
function encourage(){
    msg = "try again"
}
if(score>=40){
    congrats()
    msg +="proceed"
}else{
    encourage()
}
var el=document.getElementById("pass")
el.textContent = msg;