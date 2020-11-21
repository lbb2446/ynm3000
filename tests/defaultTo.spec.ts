import defaultTo from '../src/defaultTo'
import { expect } from 'chai'
import 'mocha'

describe('defaultTo fn', () => {
  it('defaultTo1', () => {
    const result = defaultTo(1, 10)
    expect(result).to.equal(1)
  })
  it('defaultTo2', () => {
    const result = defaultTo(undefined, 10)
    expect(result).to.equal(10)
  })
})