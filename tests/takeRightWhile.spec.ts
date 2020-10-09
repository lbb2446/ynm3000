import takeRightWhile from '../src/takeRightWhile'
import { expect } from 'chai'
import 'mocha'

describe('takeRightWhile fn', () => {
  const users = [
    { user: 'pebbles', active: false },
    { user: 'barney', active: true },
    { user: 'fred', active: true },
  ]
  it('takeRightWhile', () => {
    const result = takeRightWhile(users, ({ active }) => active)
    expect(result).to.have.deep.equal([
      { user: 'barney', active: true },
      { user: 'fred', active: true },
    ])
  })
})
