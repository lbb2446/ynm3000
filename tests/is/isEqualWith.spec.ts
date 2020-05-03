import isEqualWith from '../../src/isEqualWith'

import { expect } from 'chai'
import 'mocha'

describe('is equal', () => {
  it('use customizer', () => {
    function isGreeting(value) {
      return /^h(?:i|ello)$/.test(value)
    }

    function customizer(objValue, othValue) {
      if (isGreeting(objValue) && isGreeting(othValue)) {
        return true
      }
    }

    const array = ['hello', 'goodbye']
    const other = ['hi', 'goodbye']

    const result = isEqualWith(array, other, customizer)
    expect(result).to.equal(true)
  })
  it('not use customizer', () => {
    const array = ['hello', 'goodbye']
    const other = ['hi', 'goodbye']
    const result = isEqualWith(array, other)
    expect(result).to.equal(false)
  })
})
