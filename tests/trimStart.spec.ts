import trimStart from '../src/trimStart'
import { expect } from 'chai'
import 'mocha'

describe('trimStart fn', () => {
  it('trimStart1', () => {
    const result = trimStart('  abc  ')
    expect(result).to.equal('abc  ')
  })
  it('trimStart2', () => {
    const result = trimStart('-_-abc-_-', '_-')
    expect(result).to.equal('abc-_-')
  })
})
