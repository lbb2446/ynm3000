import partition from '../src/partition'
import { expect } from 'chai'
import 'mocha'

describe('partition fn', () => {
  const users = [
    { user: 'barney', age: 36, active: false },
    { user: 'fred', age: 40, active: true },
    { user: 'pebbles', age: 1, active: false },
  ]
  it('partition', () => {
    const result = partition(users, ({ active }) => active)

    expect(result).to.have.deep.members([
      [{ user: 'fred', age: 40, active: true }],
      [
        { user: 'barney', age: 36, active: false },
        { user: 'pebbles', age: 1, active: false },
      ],
    ])
  })
})
