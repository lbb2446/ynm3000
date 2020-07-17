import parseInt from '../src/parseInt'
import { expect } from 'chai'
import 'mocha'

describe('parseInt fn', () => {
  it('parseInt 1', () => {
    const result = parseInt('08')
    expect(result).to.equal(8)
  })
  it('parseInt 2', () => {
    const result = parseInt(10, 2)
    expect(result).to.equal(2)
  })
})
