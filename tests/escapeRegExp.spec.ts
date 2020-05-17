import escapeRegExp from '../src/escapeRegExp'
import { expect } from 'chai'
import 'mocha'

describe('escapeRegExp fn', () => {
  it('escapeRegExp', () => {
    const result = escapeRegExp('[baidu](http://www.baidu.com)')
    console.log('result', result)
    //'result'  \[baidu\]\(http://www\.baidu\.com\)
    //转义符被额外的增加了转义符
    expect(result).to.eql(`\\[baidu\\]\\(http://www\\.baidu\\.com\\)`)
  })
})
