
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

let oneDollarIs = {
    "EURO": 0.93,
    "YEN": 146.26168224299064,
}

let oneYenIs = {
    "EURO": 0.006389776357827476,
    "POUND": 0.0055591054313099035,
}

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToEuro = function(valueInDollar) {
    let valueEuroinDollar = 1 / 1.07;
    return valueEuroinDollar;
}


const fromDollarToYen = function(valueInDollar) {
    let valueInYen = 0.9345794392523364 * 156.5;
    return valueInYen;
}

const fromYenToEuro = function(valueInYen) {
    let valueInEuro = 1 / 156.5;
    return valueInEuro;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = 0.006389776357827476 * 0.87;
    return valueInPound;
}


// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fromDollarToEuro, fromYenToEuro, fromYenToPound };