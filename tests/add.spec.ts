import add from '../src/add'
import { expect } from 'chai'
import 'mocha'

describe('add fn', () => {
  it('add', () => {
    const result = add(1, 2)
    expect(result).to.equal(3)
  })
  it('add str', () => {
    const result = add(1, '2')
    expect(result).to.equal('12')
  })
})
