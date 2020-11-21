import dropWhile from '../src/dropWhile'
import { expect } from 'chai'
import 'mocha'

describe('dropWhile fn', () => {
  it('dropWhile', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: true },
      { user: 'pebbles', active: false },
    ]
    const result = dropWhile(users, ({ active }) => active)
    expect(result).to.deep.equals([{ user: 'pebbles', active: false }])
  })
})
