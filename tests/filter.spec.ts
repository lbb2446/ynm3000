import filter from '../src/filter'
import { expect } from 'chai'
import 'mocha'

describe('filter fn', () => {
  it('filter case1', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
    ]
    const result = filter(users, ({ active }) => active)
    expect(result).to.have.deep.members([{ user: 'barney', active: true }])
  })
})
