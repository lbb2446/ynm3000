import dropRightWhile from '../src/dropRightWhile'
import { expect } from 'chai'
import 'mocha'

describe('dropRightWhile fn', () => {
  it('dropRightWhile', () => {
    const users = [
      { user: 'barney', active: false },
      { user: 'fred', active: true },
      { user: 'pebbles', active: true },
    ]
    const result = dropRightWhile(users, ({ active }) => active)
    expect(result).to.deep.equals([{ user: 'barney', active: false }])
  })
})
