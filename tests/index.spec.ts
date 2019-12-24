import { helloTest } from '../src/index';
import { expect } from 'chai';
import 'mocha';
 
describe('First test', () => {
 
  it('should return true', () => {
    const result = helloTest();
    expect(result).to.equal(true);
  });
 
});