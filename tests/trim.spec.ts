import trim from '../src/trim'
import { expect } from 'chai'
import 'mocha'

describe('trim fn', () => {
  it('trim1', () => {
    const result = trim('  abc  ')
    expect(result).to.equal('abc')
  })
  it('trim2', () => {
    const result = trim('-_-abc-_-', '_-')
    expect(result).to.equal('abc')
  })
})
