import subtract from '../src/subtract'
import { expect } from 'chai'
import 'mocha'

describe('subtract fn', () => {
  it('subtract', () => {
    const result = subtract(6, 4)
    expect(result).to.equal(2)
  })
})
