import trimEnd from '../src/trimEnd'
import { expect } from 'chai'
import 'mocha'

describe('trimEnd fn', () => {
  it('trimEnd1', () => {
    const result = trimEnd('  abc  ')
    expect(result).to.equal('  abc')
  })
  it('trimEnd2', () => {
    const result = trimEnd('-_-abc-_-', '_-')
    expect(result).to.equal('-_-abc')
  })
})
