const  {tellFortune, calculateDogAge, calculateSupply, calcCircumfrence, calcArea, celciusToFahrenheit, fahrenheitToCelsius} = require('../index')


describe('die Funktion tellFortune', () => {
  it('A: gibt einen String zurück', () => {
    let result = tellFortune('A', 'B', 'C', 1)
    expect(result).toBe(`You will be a A in B and married to C with 1 kids.`)
  })
  it('B: gibt einen String zurück', () => {
    let result = tellFortune('Developer', 'Berlin', 'someone', 2)
    expect(result).toBe('You will be a Developer in Berlin and married to someone with 2 kids.')
  })
})

describe('Puppy age', () => {
  it('berechnet Alter mit einem Parameter: Menschenalter', () => {
    let result = calculateDogAge(1)
    expect(result).toBe('Your doggie is 7 years old in dog years!')
  })
  it('Bonus: berechnet Alter mit 2 Parameter: Menschenalter und Umrechnungswert 2', () => {
    let result = calculateDogAge(1, 2)
    expect(result).toBe('Your doggie is 2 years old in dog years!')
  })
  it('Bonus: berechnet Alter mit 2 Parameter: Menschenalter und Umrechnungswert 3', () => {
    let result = calculateDogAge(1, 3)
    expect(result).toBe('Your doggie is 3 years old in dog years!')
  })
})

describe('Lifetime Supply berechnet wie viele Snacks gebracht werden wenn man bis 100 Jahre lebt', ()=> {
  it('99 Jahr alt ist und 1 Snack pro Tag isst', () => {
    let result = calculateSupply(99,1)
    expect(result).toBe('You will need 365 snacks to last you until the ripe old age of 100')
  })
  it('20 Jahr alt ist und 2 Snack pro Tag isst', () => {
    let result = calculateSupply(20,2)
    expect(result).toBe('You will need 58400 snacks to last you until the ripe old age of 100')
  })
  it('auch mit Dezimalzahlen', () => {
    let result = calculateSupply(25,1.7)
    expect(result).toBe('You will need 46538 snacks to last you until the ripe old age of 100')
  })
})

describe('The Geometrizer: Die Funktionen nehmen als Parameter den Radius und', () => {
  it('A: berechnet den Umfang eines Kreises', () =>{
    let result = calcCircumfrence(1)
    expect(result).toBe('The circumference is 6.28')
  })
  it('B: berechnet den Umfang eines Kreises', () =>{
    let result = calcCircumfrence(2)
    expect(result).toBe('The circumference is 12.57')
  })
  it('A: berechnet die Fläche eines Kreises', () =>{
    let result = calcArea(1)
    expect(result).toBe('The area is 3.14')
  })
  it('B: berechnet die Fläche eines Kreises', () =>{
    let result = calcArea(2)
    expect(result).toBe('The area is 12.57')
  })
})
describe('The Temperature Converter', () => {
  it('A: celciusToFahrenheit', () => {
    let result = celciusToFahrenheit(0)
    expect(result).toBe("0°C is 32°F")
  })
  it('B: celciusToFahrenheit', () => {
    let result = celciusToFahrenheit(100)
    expect(result).toBe("100°C is 212°F")
  })
  it('Bonus: celciusToFahrenheit mit Minusgrade', () => {
    let result = celciusToFahrenheit(-1)
    expect(result).toBe("-1°C is 30°F")
  })
  it('A: fahrenheitToCelsius', () => {
    let result = fahrenheitToCelsius(0)
    expect(result).toBe("0°F is -18°C")
  })
  it('B: fahrenheitToCelsius', () => {
    let result = fahrenheitToCelsius(100)
    expect(result).toBe("100°F is 38°C")
  })
  it('Bonus: fahrenheitToCelsius mit Minusgrade', () => {
    let result = fahrenheitToCelsius(-1)
    expect(result).toBe("-1°F is -18°C")
  })
})

