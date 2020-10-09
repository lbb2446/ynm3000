import sumBy from '../src/sumBy'
import { expect } from 'chai'
import 'mocha'

describe('sumBy fn', () => {
  it('sumBy', () => {
    const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]
    const result = sumBy(objects, ({ n }) => n)
    expect(result).to.equal(20)
  })
})
