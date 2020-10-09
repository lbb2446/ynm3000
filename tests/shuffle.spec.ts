import shuffle from '../src/shuffle'
import { expect } from 'chai'
import 'mocha'

describe('shuffle fn', () => {
  it('shuffle', () => {
    const result = shuffle([1, 2, 3, 4])
    console.log('shuffle', result)
    expect(result).to.include.members([1, 2, 3, 4])
  })
})
