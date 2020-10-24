import clone from '../src/clone'
import { expect } from 'chai'
import 'mocha'

describe('clone fn', () => {
  it('clone', () => {
    const objects = [{ a: 1 }, { b: 2 }]
    const result = clone(objects)
    expect(result[0] === objects[0]).to.be.true
  })
})
