let input = document.getElementById("input") as HTMLInputElement
let button = document.getElementById("button")
let resultat = document.getElementById("resultat") as HTMLElement

function armstrong(arg : number){
    let temp: number = 0
    let sum : number = 0
    let compt : number = 0
    if( arg < 10){
        compt = 1
        sum = arg ** compt
       return sum
    } else {
        temp = arg 
        while(temp > 0){
            
            temp = Math.round(temp / 10)
            compt += 1
            
            
        }
        while(arg > 0){
            temp = arg % 10
            sum = sum + temp ** compt
            arg = (arg - temp) /10
            
        }
        
        return sum
        
    }
}

button?.addEventListener("click", (e) => {
    let val : number = parseInt(input.value)
    let res = armstrong(val)
    if(val == res){
        resultat.innerHTML=`
        <p> Le nombre ${val} est un nombre Armstrong </p>
        `
    } else {
        resultat.innerHTML=`
        <p> Le nombre ${val} n'est pas un nombre Armstrong </p>
        `
    }
})