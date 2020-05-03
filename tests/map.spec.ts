import map from '../src/map'
import { expect } from 'chai'
import 'mocha'

describe('map fn', () => {
  it('map1', () => {
    function square(n) {
      return n * n
    }

    const result = map([2, 1, 3], square)
    expect(result).to.have.deep.members([4, 1, 9])
  })
  it('map2', () => {
    function square(obj) {
      return {
        ...obj,
        b: obj.a * 2,
      }
    }

    const result = map(
      [
        {
          a: 1,
        },
        {
          a: 2,
        },
      ],
      square
    )
    expect(result).to.deep.equal([
      {
        a: 1,
        b: 2,
      },
      {
        a: 2,
        b: 4,
      },
    ])
  })
})
