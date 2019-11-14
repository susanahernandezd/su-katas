export const isLeapYear = (year) => {
  return isDivisible(year, 400) || (isDivisible(year, 4) && !isDivisible(year, 100))
}

const isDivisible = (number, divisor) => number % divisor === 0