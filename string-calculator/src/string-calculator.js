export function stringCalculator (stringNumbers) {
  if (!stringNumbers) {
    return 0
  }

  const sum = stringNumbers.split(/,|\n/).reduce((acc, string) => {
    acc = acc + parseInt(string)
    return acc
  }, 0)

  return sum
}