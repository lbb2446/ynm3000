import meanBy from '../src/meanBy'
import { expect } from 'chai'
import 'mocha'

describe('meanBy fn', () => {
  it('meanBy', () => {
    const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]
    const result = meanBy(objects, ({ n }) => n)
    expect(result).to.equal(5)
  })
})
