var input = document.getElementById("input");
var button = document.getElementById("button");
var resultat = document.getElementById("resultat");
function armstrong(arg) {
    var temp = 0;
    var sum = 0;
    var compt = 0;
    if (arg < 10) {
        compt = 1;
        sum = Math.pow(arg, compt);
        return sum;
    }
    else {
        temp = arg;
        while (temp > 0) {
            temp = Math.round(temp / 10);
            compt += 1;
        }
        while (arg > 0) {
            temp = arg % 10;
            sum = sum + Math.pow(temp, compt);
            arg = (arg - temp) / 10;
        }
        return sum;
    }
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function (e) {
    var val = parseInt(input.value);
    var res = armstrong(val);
    if (val == res) {
        resultat.innerHTML = "\n        <p> Le nombre ".concat(val, " est un nombre Armstrong </p>\n        ");
    }
    else {
        resultat.innerHTML = "\n        <p> Le nombre ".concat(val, " n'est pas un nombre Armstrong </p>\n        ");
    }
});
