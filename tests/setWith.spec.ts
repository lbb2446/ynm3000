import setWith from '../src/setWith'
import { expect } from 'chai'
import 'mocha'

describe('setWith fn', () => {
  it('setWith', () => {
    const object = {}
    const result = setWith(object, '[0][1]', 'a', Object)
    expect(result).to.deep.equal({ '0': { '1': 'a' } })
  })
})
