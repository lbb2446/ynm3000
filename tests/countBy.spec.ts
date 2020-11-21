import countBy from '../src/countBy'
import { expect } from 'chai'
import 'mocha'

const users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'betty', 'active': true },
  { 'user': 'fred', 'active': false }
]
   
describe('countBy fn', () => {
  it('countBy', () => {
    const result = countBy(users, value => value.active)
    expect(result).to.deep.equals({ 'true': 2, 'false': 1 })
  })
})