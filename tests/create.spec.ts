import create from '../src/create'
import { expect } from 'chai'
import 'mocha'

describe('create fn', () => {
  function Shape() {
    this.x = 0
    this.y = 0
  }

  function Circle() {
    Shape.call(this)
  }

  Circle.prototype = create(Shape.prototype, {
    constructor: Circle,
  })

  const circle = new Circle()

  // instanceof 运算符用于检测构造函数的
  // prototype属性是否出现在某个实例对象的原型链上。
  //TODO:待理解
  it('create 1', () => {
    expect(circle instanceof Circle).to.be.true
  })
  it('create 2', () => {
    expect(circle instanceof Shape).to.be.true
  })
})
