const { fromEuroToDollar,fromDollarToYen, fromDollarToEuro, fromYenToEuro, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("one dollar should be 0.93 euros", function() {
    const EuroToDollar = fromDollarToEuro(1);
    const expected = 1 / 1.07;
    expect(fromDollarToEuro(1)).toBe(0.9345794392523364);
})

test("one dollar should be 146.26168224299064 yens", function() {
    const yens = fromDollarToYen(0.9345794392523364);
    const expected = 0.9345794392523364 * 156.5;
    expect(fromDollarToYen(0.9345794392523364)).toBe(146.26168224299064);
})

test("one yen should be 0.006 euros", () => {
    const euro = fromYenToEuro(1);
    const expected = 1 / 156.5;
    expect(fromYenToEuro(1)).toBe(0.006389776357827476);
})

test("one yen should be 0.005 pounds", () => {
    const pound = fromYenToPound(0.006389776357827476);
    const expected = 0.006389776357827476 * 0.87;
    expect(fromYenToPound(0.006389776357827476)).toBe(0.0055591054313099035);
})