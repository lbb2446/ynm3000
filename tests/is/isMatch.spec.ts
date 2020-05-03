import isMatch from '../../src/isMatch'
import { expect } from 'chai'
import 'mocha'

describe('is match', () => {
  const obj = { a: 1, b: 1 }
  it('是匹配的', () => {
    const result = isMatch(obj, { b: 1 })
    expect(result).to.equal(true)
  })
  it('不是匹配的', () => {
    const result = isMatch(obj, { b: 2 })
    expect(result).to.equal(false)
  })
})
