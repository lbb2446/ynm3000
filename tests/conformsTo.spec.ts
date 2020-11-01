import conformsTo from '../src/conformsTo'
import { expect } from 'chai'
import 'mocha'

const object = { 'a': 1, 'b': 2 }
describe('conformsTo fn', () => {
  it('conformsTo1', () => {
    const result = conformsTo(object, { 'b': function(n) { return n > 1 } })
    expect(result).to.be.true
  })
  it('conformsTo2', () => {
    const result = conformsTo(object, { 'b': function(n) { return n > 2} })
    expect(result).to.be.false
  })
})