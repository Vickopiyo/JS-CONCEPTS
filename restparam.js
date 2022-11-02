const sum =(...args)=>{
    return args.reduce((x, y)=> x + y,5)

}

console.log(sum(1,2,3,4))