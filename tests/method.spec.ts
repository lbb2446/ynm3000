import method from '../src/method'
import { expect } from 'chai'
import 'mocha'
import map from '../src/map'

describe('method fn', () => {
  const objects = [{ a: { b: () => 2 } }, { a: { b: () => 1 } }]
  it('method1', () => {
    const result = map(objects, method('a.b'))
    expect(result).to.have.members([2, 1])
  })
  it('method2', () => {
    const result = map(objects, method(['a', 'b']))
    expect(result).to.have.members([2, 1])
  })
})
