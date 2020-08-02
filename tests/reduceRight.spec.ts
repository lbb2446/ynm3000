import reduceRight from '../src/reduceRight'
import { expect } from 'chai'
import 'mocha'

describe('reduceRight fn', () => {
  it('reduceRight', () => {
    const array = [
      [0, 1],
      [2, 3],
      [4, 5],
    ]
    const result = reduceRight(
      array,
      (flattened, other) => flattened.concat(other),
      []
    )
    expect(result).to.have.deep.members([4, 5, 2, 3, 0, 1])
  })
})
