import random from '../src/random'
import { expect } from 'chai'
import 'mocha'

describe('random fn', () => {
  it('random1', () => {
    const result = random(0, 5)
    expect(result).to.be.within(0, 5)
  })
  it('random2', () => {
    const result = random(5)
    expect(result).to.be.within(0, 5)
  })
  it('random3', () => {
    const result = random(5, true)
    expect(result).to.be.within(0, 5)
  })
  it('random4', () => {
    const result = random(1.2, 5.2)
    expect(result).to.be.within(1.2, 5.2)
  })
  const value = random(1, 5, true)
  it('random5-1', () => {
    expect(value).to.be.within(1, 5)
  })
  it('random5-2', () => {
    expect(value % 1).to.be.within(0, 1)
  })
})
