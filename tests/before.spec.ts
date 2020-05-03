import before from '../src/before'
import { expect } from 'chai'
import 'mocha'
import { JSDOM } from 'jsdom'

describe('before fn', () => {
  it('before', () => {
    const dom = new JSDOM(`<!DOCTYPE html><button id="J_p">0</button>`)
    const bDom = dom.window.document.querySelector('#J_p')
    let text = bDom.textContent
    bDom.addEventListener(
      'click',
      before(5, function () {
        text++
      })
    )
    for (let i = 0; i < 6; i++) {
      bDom.click()
    }
    expect(text).to.equal(4)
  })
})
