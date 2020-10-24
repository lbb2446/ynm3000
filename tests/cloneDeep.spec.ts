import cloneDeep from '../src/cloneDeep'
import { expect } from 'chai'
import 'mocha'

describe('cloneDeep fn', () => {
  it('cloneDeep', () => {
    const objects = [{ a: 1 }, { b: 2 }]
    const result = cloneDeep(objects)
    expect(result[0] === objects[0]).to.be.false
  })
})
