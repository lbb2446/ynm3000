import pullAllBy from '../src/pullAllBy'
import { expect } from 'chai'
import 'mocha'

describe('pullAllBy fn', () => {
  it('pullAllBy', () => {
    const array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }]
    const result = pullAllBy(array, [{ x: 1 }, { x: 3 }], (val) => val.x)
    expect(result).to.have.deep.members([{ x: 2 }])
  })
})
