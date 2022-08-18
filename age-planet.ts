// Exercice sur les enums

enum YearEarthRatio {
  Mercury = 0.2408467,
  Venus = 0.61519726,
  Earth = 1.0,
  Mars = 1.8808158,
  Jupiter = 11.862615,
  Saturn = 29.447498,
  Uranus = 84.016846,
  Neptune = 164.79132,
}

function age(planet: string, seconds: number) {

  let planete = planet.toLowerCase();
  let earthYears = Math.round(seconds / 31557600);
  console.log("Sur terre, j'ai " + earthYears + " années")

  let multiply = 0;
  switch (planete) {
    case "mercury": {
      multiply = YearEarthRatio.Mercury
      break;
    }
    case "venus": {
      multiply = YearEarthRatio.Venus
      break;
    }
    case "earth": {
      multiply = YearEarthRatio.Earth
      break;
    }
    case "mars": {
      multiply = YearEarthRatio.Mars
      break;
    }
    case "jupiter": {
      multiply = YearEarthRatio.Jupiter
      break;
    }
    case "saturn": {
      multiply = YearEarthRatio.Saturn
      break;
    }
    case "uranus": {
      multiply = YearEarthRatio.Uranus
      break;
    }
    case "neptune": {
      multiply = YearEarthRatio.Neptune
      break;
    }
    default: {
      throw new Error("Aucune valeur de ne correspond")
    }
  }

  let res = Math.round((earthYears / multiply));
  console.log(`Sur ${planete}, vous auriez ${res} années. `);
}

age("venus", 1000000000);