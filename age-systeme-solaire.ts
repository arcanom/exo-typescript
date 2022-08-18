enum systeme {
    MERCURE = 0.02408467,
    VENUS   = 0.61519726,
    TERRE = 1,
    MARS = 1.8808158,
    JUPITER = 11.862615,
    SATURNE= 29.447498,
    URANUS =84.016846,
    NEPTUNE = 164.79132

}

let age :number = 1000000000
let ageTerre = age /  31557600



console.log("Age sur Mercure "+ ageTerre/systeme.MERCURE, 
    "Age sur Venus "+ ageTerre/systeme.VENUS, 
    "Age sur Terre " + ageTerre,
    "Age sur Mars " +ageTerre/systeme.MARS,
    "Age sur Jupiter "+ ageTerre/systeme.JUPITER,
    "Age sur Saturne " + ageTerre/systeme.SATURNE,
    "Age sur Uranus "+ ageTerre/systeme.URANUS,
    "Age sur Neptune "+ ageTerre/systeme.NEPTUNE)