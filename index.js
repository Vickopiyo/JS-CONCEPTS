var bucketList = ["Morocco", "Cuba", "Kenya", "Tanzania", 
"South Africa", "Ethiopia"];

  var play = ["dance", "laugh", "enjoy"];

  var holz = (bucketList.concat(play));
  console.log(holz);
  console.log(holz.indexOf("laugh"));
  console.log(holz.join());
  var person = {
    name : "Wambui Kinyua",
	age : 16,
	gender : "female"
  }
  console.log(person);
  console.log(person.name)
  var person = {
    name : "Wambui Kinyua",
	age : 16,
	gender : "female"
   
  }
  person.hobbies = ["play", "laugh", "cry"];
  console.log(person);
  delete person.hobbies;
  console.log(person);
  var person = {
	name : "Wambui Kinyua",
	age : 16,
	gender : "Female",
	hobbies : ["Dancing", "Reading", "Nature trails", "Cooking"],
	isAwesome : true,
	sibling: { //this is the nested object
                  name : "Mwangi Kinyua",
                  age :  13,
                 }
};
console.log(person)
var friends = [{
    name: "Kiro",
    age: 15
       },
       {
    name: "Patty",
    age: 17
       },
       {
    name: "Sandy",
    age: 14
       }
   ];
   console.log(friends[1]);
   var kiro = {
    name: "Kiro",
    age: 15,
    favoriteAnimals: ["Duck", "Monkey", "Whale"]
   };
   var patty = {
    name: "Patty",
    age: "17",
    favoriteAnimals: ["Snake", "Lion", "Zebra"]
   };
   var sandy = {
    name: "Sandy",
    age: "16",
    favoriteAnimals: ["Flamingo", "Chicken", "Gecko"]
   };
   var friends = ["kiiro", "patty","sandy"];
   console.log(friends[1].favoriteAnimals[2]);
  