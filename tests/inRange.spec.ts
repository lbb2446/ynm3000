import inRange from '../src/inRange'
import { expect } from 'chai'
import 'mocha'

describe('inRange fn', () => {
  it('inRange1', () => {
    const result = inRange(3, 2, 4)
    expect(result).to.be.true
  })
  it('inRange2', () => {
    const result = inRange(4, 8)
    expect(result).to.be.true
  })
  it('inRange3', () => {
    const result = inRange(4, 2)
    expect(result).to.be.false
  })
  it('inRange4', () => {
    const result = inRange(2, 2)
    expect(result).to.be.true
  })
  it('inRange5', () => {
    const result = inRange(1.2, 2)
    expect(result).to.be.true
  })
  it('inRange6', () => {
    const result = inRange(5.2, 4)
    expect(result).to.be.false
  })
  it('inRange7', () => {
    const result = inRange(-3, -2, -6)
    expect(result).to.be.true
  })
})
