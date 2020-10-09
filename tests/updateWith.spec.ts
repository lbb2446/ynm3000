import updateWith from '../src/updateWith'
import { expect } from 'chai'
import 'mocha'

describe('updateWith fn', () => {
  let object:any = {}
  it('updateWith1', () => {
    updateWith(object, '[0][1]', () => 'a', Object)
    expect(object).to.deep.equals({ '0': { '1': 'a' } })
  })
})