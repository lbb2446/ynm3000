import baseIsEqual from '../src/internal/baseIsEqual'
import intersectionWith from '../src/intersectionWith'
import { expect } from 'chai'
import 'mocha'

describe('intersectionWith fn', () => {
  it('intersectionWith', () => {
    const result = intersectionWith(
      [
        { a: 1, b: 2 },
        { c: 1, d: 1 },
      ],
      [
        { c: 1, d: 2 },
        { a: 1, b: 2 },
      ],
      baseIsEqual
    )
    expect(result).to.have.deep.members([{ a: 1, b: 2 }])
  })
  it('not intersectionWith', () => {
    const result = intersectionWith(
      [{ a: 1, b: 2 }],
      [{ b: 2, a: 2 }],
      baseIsEqual
    )
    expect(result).to.have.deep.members([])
  })
})
