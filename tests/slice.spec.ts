import slice from '../src/slice'
import { expect } from 'chai'
import 'mocha'

describe('slice fn', () => {
  let arr = [1, 2, 3, 4]

  it('slice1', () => {
    const result = slice(arr, 2)
    expect(result).to.have.deep.members([3, 4])
  })
  it('slice2', () => {
    const result = slice(arr, -2)
    expect(result).to.have.deep.members([3, 4])
  })
  it('slice3', () => {
    const result = slice(arr, 2, -1)
    expect(result).to.have.deep.members([3])
  })
  it('slice4', () => {
    const result = slice(arr, 2, 3)
    expect(result).to.have.deep.members([3])
  })
  it('slice5', () => {
    const result = slice(arr, 2, 4)
    expect(result).to.have.deep.members([3, 4])
  })
})
