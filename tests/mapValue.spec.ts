import mapValue from '../src/mapValue'
import { expect } from 'chai'
import 'mocha'

describe('mapValue fn', () => {
  it('mapValue', () => {
    const users = {
      fred: { user: 'fred', age: 40 },
      pebbles: { user: 'pebbles', age: 1 },
    }
    const result = mapValue(users, ({ age }) => age)
    expect(result).to.deep.equals({ fred: 40, pebbles: 1 })
  })
})
