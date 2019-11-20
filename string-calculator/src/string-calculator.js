const DEFAULT_RESULT = 0
const Regex = {
  SEPARATORS: /,|\n/,
  SEPARATOR_STRING: /\/\/([^0-9])\n/
}

export function stringCalculator (string) {
  let options = {
    separators: Regex.SEPARATORS,
    stringNumbers: string
  }

  if (hasCustomSeparator(string)) {
    options = getCustomSeparatorString(string)
  }

  const negatives = negativeNumbers(options)
  if (negatives) {
    return `error: negatives not allowed: ${negatives}`
  }

  return sum(options)

}

function sum (options) {
  return options.stringNumbers.split(options.separators).reduce((acc, number) => {
    acc = acc + parseInt(number)
    return acc
  }, 0) || DEFAULT_RESULT
}

function hasCustomSeparator (string) {
  return string.startsWith('//')
}

function getCustomSeparatorString (string) {
  const separatorString = string.split(Regex.SEPARATOR_STRING).filter((values) => values)

  return {
    separators: separatorString[0],
    stringNumbers: separatorString[1]
  }
}

function negativeNumbers ({ stringNumbers, separators }) {
  return stringNumbers.split(separators).reduce((acc, number) => {
    if (number < 0) {
      acc += ` ${number}`
    }
    return acc.trim()
  }, '')
}