import toFinite from '../toFinite'
import baseAssignValue from './baseAssignValue'
import baseRange from './baseRange'

function createRange(fromRight?) {
  return (start, end?, step?) => {
    start = toFinite(start)
    if (end == undefined) {
      end = start
      start = 0
    } else {
      end = toFinite(end)
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step)
    return baseRange(start, end, step, fromRight)
  }
}

export default createRange
