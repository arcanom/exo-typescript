type numberTab = number | number[]

function sum (arg: (numberTab)){
    let resu :number ;
    if(typeof arg == "number"){
        return resu = arg
    } else if(Array.isArray(arg)){
        var res = 0
        for(let i in arg ){
             
             res += arg[i]
        }
        return res
        
    }
}

console.log(sum(2));
console.log(sum([2,4,5]));


