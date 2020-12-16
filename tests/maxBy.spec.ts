import maxBy from '../src/maxBy'
import { expect } from 'chai'
import 'mocha'

describe('maxBy fn', () => {
  it('maxBy', () => {
    const objects = [{ n: 1 }, { n: 2 }]
    const result = maxBy(objects, ({ n }) => n)
    expect(result).to.deep.equals({ n: 2 })
  })
})
