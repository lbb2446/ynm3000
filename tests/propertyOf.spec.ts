import propertyOf from '../src/propertyOf'
import { expect } from 'chai'
import 'mocha'
import map from '../src/map'

describe('propertyOf fn', () => {
  const array = [0, 1, 2]
  const object = { a: array, b: array, c: array }
  it('propertyOf1', () => {
    const result = map(['a[2]', 'c[0]'], propertyOf(object))
    expect(result).to.have.members([2, 0])
  })
  it('propertyOf2', () => {
    const result = map(
      [
        ['a', '2'],
        ['c', '0'],
      ],
      propertyOf(object)
    )
    expect(result).to.have.members([2, 0])
  })
})
