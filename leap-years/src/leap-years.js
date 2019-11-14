export const isLeapYear = (year) => {
  if( Number.isInteger(year/400) ) {
    return true
  }

  if( Number.isInteger(year/4) && !Number.isInteger(year/100)) {
    return true
  }

  return false
}