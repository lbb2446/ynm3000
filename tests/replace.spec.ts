import replace from '../src/replace'
import { expect } from 'chai'
import 'mocha'

describe('replace fn', () => {
  it('replace', () => {
    const result = replace('Hi Fred', 'Fred', 'Barney')
    expect(result).to.equal('Hi Barney')
  })
})
