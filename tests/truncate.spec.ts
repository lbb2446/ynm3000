import truncate from '../src/truncate'
import { expect } from 'chai'
import 'mocha'

describe('truncate fn', () => {
  it('truncate1', () => {
    const result = truncate('hi-diddly-ho there, neighborino')
    expect(result).to.equal('hi-diddly-ho there, neighbo...')
  })
  it('truncate2', () => {
    const result = truncate('hi-diddly-ho there, neighborino', {
      length: 24,
      separator: ' ',
    })
    expect(result).to.equal('hi-diddly-ho there,...')
  })
  it('truncate3', () => {
    const result = truncate('hi-diddly-ho there, neighborino', {
      length: 24,
      separator: /,? +/,
    })
    expect(result).to.equal('hi-diddly-ho there...')
  })
  it('truncate4', () => {
    const result = truncate('hi-diddly-ho there, neighborino', {
      omission: ' [...]',
    })
    expect(result).to.equal('hi-diddly-ho there, neig [...]')
  })
})
