import dropRight from '../src/dropRight'
import { expect } from 'chai'
import 'mocha'

describe('dropRight fn', () => {
  it('dropRight1', () => {
    const result = dropRight([1, 2, 3])
    expect(result).to.have.members([1, 2])
  })
  it('dropRight2', () => {
    const result = dropRight([1, 2, 3], 2)
    expect(result).to.have.members([1])
  })
  it('dropRight3', () => {
    const result = dropRight([1, 2, 3], 0)
    expect(result).to.have.members([1, 2, 3])
  })
})
