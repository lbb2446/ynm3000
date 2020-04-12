import keyBy from '../src/keyBy'
import { expect } from 'chai'
import 'mocha'

describe('keyBy fn', () => {
  it('keyBy', () => {
    let arr = [
      { a: 1, code: 97 },
      { a: 2, code: 100 },
    ]
    const result = keyBy(arr, ({ code }) => String.fromCharCode(code))
    expect(result).to.deep.equal({
      a: { a: 1, code: 97 },
      d: { a: 2, code: 100 },
    })
  })
})
