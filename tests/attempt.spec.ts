import attempt from '../src/attempt'
import isError from '../src/isError'
import { expect } from 'chai'
import 'mocha'
import { JSDOM } from 'jsdom'

describe('attempt fn', () => {
  it('attempt', () => {
    const dom = new JSDOM(`<!DOCTYPE html><button id="J_p">0</button>`)
    let elements = attempt(
      (selector) => dom.window.document.querySelectorAll(selector),
      '>_>'
    )
    // console.log(elements)
    // DOMException [SyntaxError]: '>_>' is not a valid selector

    if (isError(elements)) {
      elements = []
    }
    expect(elements).to.have.deep.members([])
  })
})
