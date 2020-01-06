import  vail  from '../src/password';
import { expect } from 'chai';
import 'mocha';
describe('cipher_df test', () => {
  // 49
  it('6-8个字符，6个以上连续数字', () => {
    const result = vail("9876543");
    expect(result.score).to.below(0);
    expect(result.level).to.equal("error");
  });
  // 50
  it('6-8个字符，6个以上重复数字', () => {
    const result = vail("1111111");
    expect(result.score).to.below(0);
    expect(result.level).to.equal("error");
  });
  // 51
  it('6-8个字符，6个以上连续字母', () => {
    const result = vail("abcdefg");
    expect(result.score).to.below(0);
    expect(result.level).to.equal("error");
  });
  // 52
  it('6-8个字符，6个以上重复字母', () => {
    const result = vail("aaaaaaa");
    expect(result.score).to.below(0);
    expect(result.level).to.equal("error");
  });
  // 53
  it('6-8个字符，6个以上重复符号', () => {
    const result = vail("!!!!!!!");
    expect(result.score).to.below(0);
    expect(result.level).to.equal("error");
  });
  // 54
  it('9-18个字符，6个以上连续数字', () => {
    const result = vail("0123456789");
    expect(result.score).to.below(0);
    expect(result.level).to.equal("error");
  });
  // 55
  it('9-18个字符，6个以上重复数字', () => {
    const result = vail("1111111111111");
    expect(result.score).to.below(0);
    expect(result.level).to.equal("error");
  });
  // 56
  it('9-18个字符，6个以上连续字母', () => {
    const result = vail("abcdefghijklmno");
    expect(result.score).to.below(0);
    expect(result.level).to.equal("error");
  });
  // 57
  it('9-18个字符，6个以上重复字母', () => {
    const result = vail("aaaaaaaaaaaaaa");
    expect(result.score).to.below(0);
    expect(result.level).to.equal("error");
  });
  // 58
  it('9-18个字符，6个以上重复符号', () => {
    const result = vail("!!!!!!!!!!!!!");
    expect(result.score).to.equal(0);
    expect(result.level).to.equal("error");
  });
});