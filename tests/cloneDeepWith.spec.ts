import cloneDeepWith from '../src/cloneDeepWith'
import isElement from '../src/isElement'
import { expect } from 'chai'
import 'mocha'

import { JSDOM } from 'jsdom'
const { document } = new JSDOM(`...`).window
const body = document.body

describe('cloneDeepWith fn', () => {
  function customizer(value) {
    if (isElement(value)) {
      return value.cloneNode(true)
    }
  }

  const el = cloneDeepWith(body, customizer)
  it('cloneDeepWith1', () => {
    const result = el === document.body
    expect(result).to.be.false
  })
  it('cloneDeepWith2', () => {
    const result = el.nodeName
    expect(result).to.equal('BODY')
  })
  it('cloneDeepWith3', () => {
    const result = el.childNodes.length
    expect(result).to.equal(1)
  })
})
