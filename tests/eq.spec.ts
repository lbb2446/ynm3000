import eq from '../src/eq'
import { expect } from 'chai'
import 'mocha'

const a = {
  val: 1
}
const b = {
  val: 1
}
describe('is eq', () => {
  it('不相等的数字', () => {
    const result = eq(3, 1)
    expect(result).to.equal(false)
  })
  it('相等的数字', () => {
    const result = eq(3, 3)
    expect(result).to.equal(true)
  })
  it('相等的字符串', () => {
    const result = eq('a', 'a')
    expect(result).to.equal(true)
  })
  it('类型不同的字符串', () => {
    const result = eq('a', Object('a'))
    expect(result).to.equal(false)
  })
  it('类型不同的字符串1', () => {
    const result = eq('a', new String('a'))
    expect(result).to.equal(false)
  })
  it('同对象相比', () => {
    const result = eq(a, a)
    expect(result).to.equal(true)
  })
  it('不同对象相比', () => {
    const result = eq(a, b)
    expect(result).to.equal(false)
  })
  it('NaN', () => {
    const result = eq(NaN, NaN)
    expect(result).to.equal(true)
  })
})
