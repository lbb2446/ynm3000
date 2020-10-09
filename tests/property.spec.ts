import property from '../src/property'
import { expect } from 'chai'
import 'mocha'
import map from '../src/map'

describe('property fn', () => {
  const objects = [{ a: { b: 2 } }, { a: { b: 1 } }]

  it('property1', () => {
    const result = map(objects, property('a.b'))
    expect(result).to.have.members([2, 1])
  })
  it('property2', () => {
    const result = map(objects, property(['a', 'b']))
    expect(result).to.have.deep.members([2, 1])
  })
})
