var res = document.getElementById("res");
// Page avec paramètre optionnelpour adresse 2
// function sendAdress(address : string, city : string, address2 ?: string ){
//     let test = address.value
//     let test2 = city.value
//     let option = address2.value
//     res.innerHTML=`
//     <p> ${test} ${option} ${test2} </p>
//     `
// }
// Page avec paramètre par défaut (N/A)pour adresse2
function sendAdress(address, city, address2) {
    if (address2 === void 0) { address2 = "N/A"; }
    var test = address.value;
    var test2 = city.value;
    var option = address2.value;
    res.innerHTML = "\n    <p>  ".concat(test, " ").concat(option, " ").concat(test2, " </p>\n    ");
}
// Page avecRest Parameter pour adresse et adresse 2 
// function sendAdress(  city : string, ...adress: string[]  ){
//     let test2 = city.value
//     res.innerHTML = `
//          ${test2} 
//        `
//     for (let i in adress){
//        res.innerHTML += `
//         ${adress[i].value} 
//        `
//     }
// }
