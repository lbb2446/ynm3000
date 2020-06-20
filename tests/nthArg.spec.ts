import nthArg from '../src/nthArg'
import { expect } from 'chai'
import 'mocha'

describe('nthArg fn', () => {
  it('nthArg', () => {
    const func = nthArg(2)
    const result = func(1, 2, 3, 4)
    expect(result).to.equal(3)
  })
  it('nthArg below 0', () => {
    const func = nthArg(-2)
    const result = func(1, 2, 3, 4)
    expect(result).to.equal(3)
  })
})
