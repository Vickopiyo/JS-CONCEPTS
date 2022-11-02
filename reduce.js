const users= [
    {firstName: "vick",secondName : "Opiyo",age :20},
    {firstName: "liz",secondName : "atis",age :20},
    {firstName: "kev",secondName : "Onyango",age :20},
    {firstName: "jon",secondName : "oluoch",age :26}

]
let output= users.reduce((acc,value)=>{
    if (value.age < 24){
         acc.push(value.firstName)
    }
    return acc;
    
},[])
console.log(output)

// 