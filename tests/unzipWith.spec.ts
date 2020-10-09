import unzipWith from '../src/unzipWith'
import add from '../src/add'
import { expect } from 'chai'
import 'mocha'

describe('unzipWith fn', () => {
  it('unzipWith', () => {
    const result = unzipWith(
      [
        [1, 10, 100],
        [2, 20, 200],
      ],
      add
    )
    expect(result).to.have.deep.members([3, 30, 300])
  })
})
