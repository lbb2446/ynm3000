import pick from '../src/pick'
import { expect } from 'chai'
import 'mocha'

describe('pick fn', () => {
  it('pick', () => {
    const object = { a: 1, b: '2', c: 3 }
    const result = pick(object, 'a', 'c')
    expect(result).to.deep.equals({ a: 1, c: 3 })
  })
})
