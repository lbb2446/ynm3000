import escapeRegExp from '../src/escapeRegExp'
import { expect } from 'chai'
import 'mocha'

describe('escapeRegExp fn', () => {
  it('escapeRegExp', () => {
    const result = escapeRegExp('[baidu](http://www.baidu.com)')
    console.log('result', result)
    //TODO:转义符被过滤
    // expect(result).to.eql(`\[baidu\]\(http://www\.baidu\.com\)`)
    // expect(/[baidu](http:\/\/www.baidu.com)/.test(result)).to.be.true
  })
})
