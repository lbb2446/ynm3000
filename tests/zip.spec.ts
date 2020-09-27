import zip from '../src/zip'
import { expect } from 'chai'
import 'mocha'

describe('zip fn', () => {
  it('zip', () => {
    const result = zip(['a', 'b'], [1, 2], [true, false])
    expect(result).to.deep.equals([
      ['a', 1, true],
      ['b', 2, false],
    ])
  })
})
