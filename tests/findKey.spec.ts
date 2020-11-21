import findKey from '../src/findKey'
import { expect } from 'chai'
import 'mocha'

describe('findKey fn', () => {
  it('findKey', () => {
    const users = {
      barney: { age: 36, active: true },
      fred: { age: 40, active: false },
      pebbles: { age: 1, active: true },
    }
    const result = findKey(users, ({ age }) => age < 40)
    expect(result).to.equal('barney')
  })
})
