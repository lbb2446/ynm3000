import mergeWith from '../src/mergeWith'
import { expect } from 'chai'
import 'mocha'

describe('mergeWith fn', () => {
  it('mergeWith', () => {
    function customizer(objValue, srcValue) {
      if (Array.isArray(objValue)) {
        return objValue.concat(srcValue)
      }
    }
    const object = { a: [1], b: [2] }
    const other = { a: [3], b: [4] }
    const result = mergeWith(object, other, customizer)
    expect(result).to.deep.equals({ a: [1, 3], b: [2, 4] })
  })
})
