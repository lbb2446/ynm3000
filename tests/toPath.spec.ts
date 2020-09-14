import toPath from '../src/toPath'
import { expect } from 'chai'
import 'mocha'

describe('toPath fn', () => {
  it('toPath1', () => {
    const result = toPath('a.b.c')
    expect(result).to.have.deep.members(['a', 'b', 'c'])
  })
  it('toPath2', () => {
    const result = toPath('a[0].b.c')
    expect(result).to.have.deep.members(['a', '0', 'b', 'c'])
  })
})
