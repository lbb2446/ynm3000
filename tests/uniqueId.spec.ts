
import uniqueId from '../src/uniqueId'
import { expect } from 'chai'
import 'mocha'

describe('uniqueId fn', () => {
  it('uniqueId1', () => {
    uniqueId('contact_')
    uniqueId('contact_')
    uniqueId('contact_')
    const result = uniqueId('contact_')
    expect(result).to.equal('contact_4')
  })
  it('uniqueId2', () => {
    uniqueId()
    uniqueId()
    uniqueId()
    uniqueId()
    uniqueId()
    const result = uniqueId()
    expect(result).to.equal('6')
  })
})