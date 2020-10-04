import uniqWith from '../src/uniqWith'
import { expect } from 'chai'
import 'mocha'
import isEqualWith from '../src/isEqualWith'

describe('uniqWith fn', () => {
  it('uniqWith', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }]
    const result = uniqWith(objects, isEqualWith)
    expect(result).to.deep.equals([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }])
  })
})