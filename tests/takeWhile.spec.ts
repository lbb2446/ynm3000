import takeWhile from '../src/takeWhile'
import { expect } from 'chai'
import 'mocha'

describe('takeWhile fn', () => {
  const users = [
    { user: 'barney', active: true },
    { user: 'fred', active: true },
    { user: 'pebbles', active: false },
  ]
  it('takeWhile', () => {
    const result = takeWhile(users, ({ active }) => active)
    expect(result).to.have.deep.equal([
      { user: 'barney', active: true },
      { user: 'fred', active: true },
    ])
  })
})
