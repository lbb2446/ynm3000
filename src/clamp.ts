function clamp(number, lower, upper) {
  number = +number
  lower = +lower
  upper = +upper
  lower = lower === lower ? lower : 0
  upper = upper === upper ? upper : 0
  if (number === number) {
    number = number < lower ? lower : number
    number = number > upper ? upper : number
  }
  return number
}

export default clamp
