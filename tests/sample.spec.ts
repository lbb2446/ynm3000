import sample from '../src/sample'
import { expect } from 'chai'
import 'mocha'

describe('sample fn', () => {
  it('sample', () => {
    const result = sample([1, 2, 3, 4])
    expect(result).to.be.oneOf([1, 2, 3, 4])
  })
})
