import orderBy from '../src/orderBy'
import { expect } from 'chai'
import 'mocha'

describe('orderBy fn', () => {
  const users = [
    { user: 'fred', age: 48 },
    { user: 'barney', age: 34 },
    { user: 'fred', age: 40 },
    { user: 'barney', age: 36 },
  ]
  it('orderBy', () => {
    const result = orderBy(users, ['user', 'age'], ['asc', 'desc'])
    // console.log('result', result)
    expect(result).to.have.deep.equals([
      { user: 'barney', age: 36 },
      { user: 'barney', age: 34 },
      { user: 'fred', age: 48 },
      { user: 'fred', age: 40 },
    ])
  })
})
