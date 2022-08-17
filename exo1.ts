// 1

let names : string 

// 2

let speed : number = 25

// 3

let isLoading : boolean

// 4

let age :( number | string )

// 5

let color : string[] = []
color.push("red")
console.log(color);

// 6

let infos : (string | number | boolean)[] = []
infos.push("dupont",true,42)

// 7

let number = {
    firstName : "Dupont",
    age: 20,
    isLoggedIn : true

};
console.log(number.age);

// 8
 let number1 : {
    firstName : string 
    age : number
    isLoggedIn: boolean
 } = {
    firstName : "Dupont",
    age: 20,
    isLoggedIn: true  
 }

 console.log(number1.age);

 //9 

 let number2 = {
    firstName : "Dupont",
    age: 20,
    isLoggedIn: true 
 }
 console.log(number2.age);
 
