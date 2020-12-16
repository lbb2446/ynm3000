import findLastKey from '../src/findLastKey'
import { expect } from 'chai'
import 'mocha'

describe('findLastKey fn', () => {
  it('findLastKey', () => {
    const users = {
      barney: { age: 36, active: true },
      fred: { age: 40, active: false },
      pebbles: { age: 1, active: true },
    }
    const result = findLastKey(users, ({ age }) => age < 40)
    expect(result).to.equal('pebbles')
  })
})
