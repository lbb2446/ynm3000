import times from '../src/times'
import { expect } from 'chai'
import 'mocha'

describe('times fn', () => {
  it('times1', () => {
    const result = times(3, String)
    expect(result).to.have.deep.members(['0', '1', '2'])
  })
  it('times2', () => {
    const result = times(4, () => 0)
    expect(result).to.have.deep.members([0, 0, 0, 0])
  })
})
