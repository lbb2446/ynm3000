import some from '../src/some'
import { expect } from 'chai'
import 'mocha'

describe('some fn', () => {
  it('some', () => {
    const result = some([null, 0, 'yes', false], Boolean)
    expect(result).to.equal(true)
  })
})
