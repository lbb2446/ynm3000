import reject from '../src/reject'
import { expect } from 'chai'
import 'mocha'

describe('reject fn', () => {
  it('reject case1', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
    ]
    const result = reject(users, ({ active }) => active)
    expect(result).to.have.deep.members([{ user: 'fred', active: false }])
  })
})
