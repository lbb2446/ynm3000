import cond from '../src/cond'
import matches from '../src/matches'
import conforms from '../src/conforms'
import isNumber from '../src/isNumber'
import { expect } from 'chai'
import 'mocha'

const func = cond([
     [matches({ 'a': 1 }),         () => 'matches A'],
     [conforms({ 'b': isNumber }), () => 'matches B'],
     [() => true,                  () => 'no match']
   ])
describe('cond fn', () => {
  it('cond1', () => {
    const result = func({ 'a': 1, 'b': 2 })
    expect(result).to.equal('matches A')
  })
  it('cond2', () => {
    const result = func({ 'a': 0, 'b': 1 })
    expect(result).to.equal('matches B')
  })
  it('cond3', () => {
    const result = func({ 'a': '1', 'b': '2' })
    expect(result).to.equal('no match')
  })
})