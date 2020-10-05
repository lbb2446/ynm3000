
import uniqueId from '../src/uniqueId'
import { expect } from 'chai'
import 'mocha'

describe('uniqueId fn', () => {
  //TODO:计数这个不是全局变量吗，为什么每次调用test用例，都是从头开始的值
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