enum resistor  {
    noir = 0,
    marron = 1,
    rouge = 2,
    orange = 3,
    jaune=4,
    vert=5,
    bleu=6,
    violet=7,
    gris=8,
    blanc = 9
}

function Resitance(arg : string, arg1 : string, arg2: string) {
    let res
    if(arg =="noir"){
        res = resistor.noir *10
    } else if(arg=="marron"){
        res = resistor.marron *10
    } else if(arg=="rouge"){
        res = resistor.rouge*10
    } else if (arg=="orange"){
        res = resistor.orange*10
    } else if (arg=="jaune"){
        res = resistor.jaune*10
    } else if(arg=="vert"){
        res = resistor.vert*10
    } else if(arg=="bleu"){
        res = resistor.bleu*10
    } else if(arg=="violet"){
        res = resistor.violet*10
    } else if(arg=="gris"){
        res = resistor.gris*10
    } else if(arg=="blanc"){
        res = resistor.blanc*10
    }
    if(arg1 =="noir"){
        res += resistor.noir 
    } else if(arg1=="marron"){
        res += resistor.marron 
    } else if(arg1=="rouge"){
        res += resistor.rouge
    } else if (arg1=="orange"){
        res += resistor.orange
    } else if (arg1=="jaune"){
        res += resistor.jaune
    } else if(arg1=="vert"){
        res += resistor.vert
    } else if(arg=="bleu"){
        res = resistor.bleu*10
    } else if(arg1=="violet"){
        res += resistor.violet
    } else if(arg1=="gris"){
        res += resistor.gris
    } else if(arg1=="blanc"){
        res += resistor.blanc*10
    }
   
    if(arg2 =="noir"){
        res = res * (10 ** resistor.noir )
    } else if(arg2=="marron"){
        res = res * (10 ** resistor.marron )
    } else if(arg2=="rouge"){
        res = res * ( 10** resistor.rouge )
    } else if (arg2=="orange"){
        res = res * (10** resistor.orange)
    } else if (arg2=="jaune"){
        res =  res *( 10 ** resistor.jaune)
    } else if(arg2=="vert"){
        res = res * (10 ** resistor.vert)
    } else if(arg2=="bleu"){
        res = res *( 10** resistor.bleu)
    } else if(arg2=="violet"){
        res = res * ( 10 ** resistor.violet)
    } else if(arg2=="gris"){
        res = res * (10 ** resistor.gris)
    } else if(arg2=="blanc"){
        res = res * (10 ** resistor.blanc)
    }
    if(res < 1000){
        console.log("Votre resistance est de " + res +"ohm")
    } else if(res > 1000 && res <100000){
        res = res / 1000
        console.log("Votre resistance est de " + res +"kiloohm")
    }
}

Resitance("orange","orange","noir")
Resitance("orange","orange","orange")