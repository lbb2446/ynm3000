import divide from '../src/divide'
import { expect } from 'chai'
import 'mocha'

describe('divide fn', () => {
  it('divide', () => {
    const result = divide(6, 4)
    expect(result).to.equal(1.5)
  })
})
