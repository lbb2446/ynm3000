import cloneWith from '../src/cloneWith'
import isElement from '../src/isElement'
import { expect } from 'chai'
import 'mocha'

import { JSDOM } from 'jsdom'
const { document } = new JSDOM(`...`).window
const body = document.body

describe('cloneWith fn', () => {
  function customizer(value) {
    if (isElement(value)) {
      return value.cloneNode(false)
    }
  }

  const el = cloneWith(body, customizer)
  it('cloneWith1', () => {
    const result = el === document.body
    expect(result).to.be.false
  })
  it('cloneWith2', () => {
    const result = el.nodeName
    expect(result).to.equal('BODY')
  })
  it('cloneWith3', () => {
    const result = el.childNodes.length
    expect(result).to.equal(0)
  })
})
