var systeme;
(function (systeme) {
    systeme[systeme["MERCURE"] = 0.02408467] = "MERCURE";
    systeme[systeme["VENUS"] = 0.61519726] = "VENUS";
    systeme[systeme["TERRE"] = 1] = "TERRE";
    systeme[systeme["MARS"] = 1.8808158] = "MARS";
    systeme[systeme["JUPITER"] = 11.862615] = "JUPITER";
    systeme[systeme["SATURNE"] = 29.447498] = "SATURNE";
    systeme[systeme["URANUS"] = 84.016846] = "URANUS";
    systeme[systeme["NEPTUNE"] = 164.79132] = "NEPTUNE";
})(systeme || (systeme = {}));
var age = 1000000000;
var ageTerre = age / 31557600;
console.log("Age sur Mercure " + ageTerre / systeme.MERCURE, "Age sur Venus " + ageTerre / systeme.VENUS, "Age sur Terre " + ageTerre, "Age sur Mars " + ageTerre / systeme.MARS, "Age sur Jupiter " + ageTerre / systeme.JUPITER, "Age sur Saturne " + ageTerre / systeme.SATURNE, "Age sur Uranus " + ageTerre / systeme.URANUS, "Age sur Neptune " + ageTerre / systeme.NEPTUNE);
