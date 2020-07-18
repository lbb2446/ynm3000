import pickBy from '../src/pickBy'
import isNumber from '../src/isNumber'
import { expect } from 'chai'
import 'mocha'

describe('pickBy fn', () => {
  const object = { a: 1, b: '2', c: 3 }
  it('pickBy', () => {
    const result = pickBy(object, isNumber)
    expect(result).to.have.deep.equals({ a: 1, c: 3 })
  })
})
