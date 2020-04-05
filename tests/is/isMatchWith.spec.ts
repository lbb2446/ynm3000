import isMatchWith from '../../src/isMatchWith'
import { expect } from 'chai'
import 'mocha'

describe('is matchwith', () => {
  function isGreeting(value) {
    return /^h(?:i|ello)$/.test(value)
  }

  function customizer(objValue, srcValue) {
    if (isGreeting(objValue) && isGreeting(srcValue)) {
      return true
    }
  }
  const object = { greeting: 'hello' }
  const source = { greeting: 'hi' }
  it('是匹配的', () => {
    const result = isMatchWith(object, source, customizer)
    expect(result).to.equal(true)
  })
})
