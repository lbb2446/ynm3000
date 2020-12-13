import minBy from '../src/minBy'
import { expect } from 'chai'
import 'mocha'

describe('minBy fn', () => {
  it('minBy', () => {
    const objects = [{ n: 1 }, { n: 2 }]
    const result = minBy(objects, ({ n }) => n)
    expect(result).to.have.deep.equals({ n: 1 })
  })
})
