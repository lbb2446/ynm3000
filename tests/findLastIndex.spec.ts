import findLastIndex from '../src/findLastIndex'
import { expect } from 'chai'
import 'mocha'

describe('findLastIndex fn', () => {
  it('findLastIndex', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ]
    const result = findLastIndex(users, ({ user }) => user == 'pebbles')
    expect(result).to.equal(2)
  })
})
