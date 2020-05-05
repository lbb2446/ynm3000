import after from '../src/after'
import forEach from '../src/forEach'
import { expect } from 'chai'
import 'mocha'

describe('after', () => {
  it('after fn', () => {
    const saves = ['profile', 'settings']
    const done = after(saves.length, (i) => i)
    let result
    for (let i = 0; i < saves.length * 2; i++) {
      result = done(i)
    }
    expect(result).to.equal(saves.length * 2 - 1)
  })
})
