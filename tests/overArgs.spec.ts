import overArgs from '../src/overArgs'
import { expect } from 'chai'
import 'mocha'

describe('overArgs fn', () => {
  function doubled(n) {
    return n * 2
  }

  function square(n) {
    return n * n
  }

  const func = overArgs((x, y) => [x, y], [square, doubled])
  it('overArgs1', () => {
    const result = func(1, 2)
    expect(result).to.have.deep.members([1, 4])
  })
  it('overArgs2', () => {
    const result = func(9, 3)
    expect(result).to.have.deep.members([81, 6])
  })
  it('overArgs3', () => {
    const result = func(10, 5)
    expect(result).to.have.deep.members([100, 10])
  })
})
