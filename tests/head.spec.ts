import head from '../src/head'
import { expect } from 'chai'
import 'mocha'

describe('head fn', () => {
  it('head', () => {
    const result = head([1, 2, 3])
    expect(result).to.equal(1)
  })
})
describe('head fn', () => {
  it('head none', () => {
    const result = head([])
    expect(result).to.equal(undefined)
  })
})
