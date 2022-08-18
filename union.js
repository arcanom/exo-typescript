function sum(arg) {
    var resu;
    if (typeof arg == "number") {
        return resu = arg;
    }
    else if (Array.isArray(arg)) {
        var res = 0;
        for (var i in arg) {
            res += arg[i];
        }
        return res;
    }
}
console.log(sum(2));
console.log(sum([2, 4, 5]));
