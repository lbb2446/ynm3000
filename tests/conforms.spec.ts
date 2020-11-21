
import conforms from '../src/conforms'
import filter from '../src/filter'

import { expect } from 'chai'
import 'mocha'

describe('conforms fn', () => {
  it('conforms', () => {
    const objects = [
       { 'a': 2, 'b': 1 },
        { 'a': 1, 'b': 2 }
      ]
    const result = filter(objects, conforms({ 'b': function(n) { return n > 1 } }))
    expect(result).to.deep.equals([{ 'a': 1, 'b': 2 }])
  })
})