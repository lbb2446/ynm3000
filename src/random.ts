import toFinite from './toFinite'

function random(lower, upper?, floating?) {
  if (floating === undefined) {
    if (typeof upper === 'boolean') {
      floating = upper
      upper = undefined
    } else if (typeof lower === 'boolean') {
      floating = lower
      lower = undefined
    }
  }
  if (lower === undefined && upper === undefined) {
    lower = 0
    upper = 1
  } else {
    lower = toFinite(lower)
    if (upper == undefined) {
      upper = lower
      lower = 0
    } else {
      upper = toFinite(upper)
    }
  }
  if (upper < lower) {
    const temp = upper
    upper = lower
    lower = temp
  }
  if (floating || upper % 1 || lower % 1) {
    const rand = Math.random()
    const randLength = `${rand}`.length - 1
    return Math.min(
      lower + rand * (upper - lower + parseFloat(`1e-${randLength}`)),
      upper
    )
  }
  return lower + Math.floor((upper - lower + 1) * Math.random())
}

export default random
