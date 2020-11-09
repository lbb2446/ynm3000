import defaultsDeep from '../src/defaultsDeep'
import { expect } from 'chai'
import 'mocha'

describe('defaultsDeep fn', () => {
  it('defaultsDeep', () => {
    const result = defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } })
    expect(result).to.deep.equals({ a: { b: 2, c: 3 } })
  })
})
