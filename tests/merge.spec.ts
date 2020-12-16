import merge from '../src/merge'
import { expect } from 'chai'
import 'mocha'

describe('merge fn', () => {
  it('merge', () => {
    const object = {
      a: [{ b: 2 }, { d: 4 }],
    }

    const other = {
      a: [{ c: 3 }, { e: 5 }],
    }
    const result = merge(object, other)
    expect(result).to.deep.equals({
      a: [
        { b: 2, c: 3 },
        { d: 4, e: 5 },
      ],
    })
  })
})
