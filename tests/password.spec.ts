import  vail  from '../src/password';
import { expect } from 'chai';
import 'mocha';
 
describe('cipher test', () => {
  // 1 
  it('不足6个字符', () => {
    const result = vail("12345");
    expect(result.score).to.below(0);
    expect(result.level).to.equal("error");
  });
  // 2
  it('超过18个字符', () => {
    const result = vail("1234567890abcdefghi");
    expect(result.score).to.below(0);
    expect(result.level).to.equal("error");
  });
  // 3
  it('6-8个纯字母', () => {
    const result = vail("SOMETH");
    expect(result.score).to.equal(20);
    expect(result.level).to.equal("weak");
  });
  // 4
  it('9-18个纯字母', () => {
    const result = vail("something");
    expect(result.score).to.equal(35);
    expect(result.level).to.equal("weak");
  });
  // 
  it('6-8个大小写混合字母', () => {
    const result = vail("SoMeTH");
    expect(result.score).to.equal(30);
    expect(result.level).to.equal("weak");
  });
  // 6
  it('9-18个大小写混合字母', () => {
    const result = vail("SOMEthing");
    expect(result.score).to.equal(45);
    expect(result.level).to.equal("weak");
  });
  // 7
  it('6-8个纯数字', () => {
    const result = vail("11335478");
    expect(result.score).to.equal(30);
    expect(result.level).to.equal("weak");
  });
  // 8
  it('9-18个纯数字', () => {
    const result = vail("133466769062643678");
    expect(result.score).to.equal(45);
    expect(result.level).to.equal("weak");
  });
  // 9
  it('6-8个纯符号', () => {
    const result = vail("!?#$!?#$");
    expect(result.score).to.equal(35);
    expect(result.level).to.equal("weak");
  });
  // 10
  it('9-18个纯符号', () => {
    const result = vail("!?#$!?#$!?#$!?#$!?");
    expect(result.score).to.equal(50);
    expect(result.level).to.equal("weak");
  });
  // 11
  it('6-8个字符，包含字母+1个数字', () => {
    const result = vail("someth1");
    expect(result.score).to.equal(32);
    expect(result.level).to.equal("weak");
  });
  // 12
  it('6-8个字符，包含字母+大于等于3个数字', () => {
    const result = vail("som3236");
    expect(result.score).to.equal(42);
    expect(result.level).to.equal("weak");
  });
  // 13
  it('6-8个字符，包含字母+1个符号', () => {
    const result = vail("someth!");
    expect(result.score).to.equal(30);
    expect(result.level).to.equal("weak");
  });
  // 14
  it('6-8个字符，包含字母+大于1个符号', () => {
    const result = vail("somet!?");
    expect(result.score).to.equal(45);
    expect(result.level).to.equal("weak");
  });
  // 15
  it('6-8个字符，包含字母+1个数字+1个符号', () => {
    const result = vail("somet1!");
    expect(result.score).to.equal(43);
    expect(result.level).to.equal("weak");
  });
  // 16
  it('6-8个字符，包含字母+1个数字+大于1个符号', () => {
    const result = vail("some1!?");
    expect(result.score).to.equal(58);
    expect(result.level).to.equal("weak");
  });
  // 17
  it('6-8个字符，包含字母+大于等于3个数字+1个符号', () => {
    const result = vail("som426!");
    expect(result.score).to.equal(53);
    expect(result.level).to.equal("weak");
  });
  // 18
  it('6-8个字符，包含字母+大于等于3个数字+大于1个符号', () => {
    const result = vail("so624!?");
    expect(result.score).to.equal(68);
    expect(result.level).to.equal("normal");
  });
  // 19
  it('6-8个字符，包含大小写字母+1个数字', () => {
    const result = vail("SoMeth1");
    expect(result.score).to.equal(42);
    expect(result.level).to.equal("weak");
  });
  // 20
  it('6-8个字符，包含大小写字母+大于等于3个数字', () => {
    const result = vail("SoMe624");
    expect(result.score).to.equal(52);
    expect(result.level).to.equal("weak");
  });
  // 21
  it('6-8个字符，包含大小写字母+1个符号', () => {
    const result = vail("SoMeTh!");
    expect(result.score).to.equal(40);
    expect(result.level).to.equal("weak");
  });
  // 22
  it('6-8个字符，包含大小写字母+大于1个符号', () => {
    const result = vail("SoMeT!?");
    expect(result.score).to.equal(55);
    expect(result.level).to.equal("weak");
  });
  // 23
  it('6-8个字符，包含大小写字母+1个数字+1个符号', () => {
    const result = vail("SoMeT1!");
    expect(result.score).to.equal(55);
    expect(result.level).to.equal("weak");
  });
  // 24
  it('6-8个字符，包含大小写字母+1个数字+大于1个符号', () => {
    const result = vail("SomEt!?1");
    expect(result.score).to.equal(70);
    expect(result.level).to.equal("normal");
  });
  // 25
  it('6-8个字符，包含大小写字母+大于等于3个数字+1个符号', () => {
    const result = vail("SoM622!");
    expect(result.score).to.equal(65);
    expect(result.level).to.equal("normal");
  });
  // 26
  it('6-8个字符，包含大小写字母+大于等于3个数字+大于1个符号', () => {
    const result = vail("So627!?");
    expect(result.score).to.equal(80);
    expect(result.level).to.equal("high");
  });
  // 27
  it('9-18个字符，包含字母+1个数字', () => {
    const result = vail("somethingerro1");
    expect(result.score).to.equal(47);
    expect(result.level).to.equal("weak");
  });
  // 28
  it('9-18个字符，包含字母+大于等于个数字', () => {
    const result = vail("somethinge6274");
    expect(result.score).to.equal(57);
    expect(result.level).to.equal("weak");
  });
  // 29
  it('9-18个字符，包含字母+1个符号', () => {
    const result = vail("somethingerr!");
    expect(result.score).to.equal(45);
    expect(result.level).to.equal("weak");
  });
  // 30
  it('9-18个字符，包含字母+大于1个符号', () => {
    const result = vail("somethingerr!?");
    expect(result.score).to.equal(60);
    expect(result.level).to.equal("normal");
  });
  // 31
  it('9-18个字符，包含字母+1个数字+1个符号', () => {
    const result = vail("somethingerr1!");
    expect(result.score).to.equal(58);
    expect(result.level).to.equal("weak");
  });
  // 32
  it('9-18个字符，包含字母+1个数字+大于1个符号', () => {
    const result = vail("somethinger1!?");
    expect(result.score).to.equal(73);
    expect(result.level).to.equal("normal");
  });
  // 33
  it('9-18个字符，包含字母+大于等于3个数字+1个符号', () => {
    const result = vail("something391!");
    expect(result.score).to.equal(68);
    expect(result.level).to.equal("normal");
  });
  // 34
  it('9-18个字符，包含字母+大于等于3个数字+大于1个符号', () => {
    const result = vail("somethin7264!?");
    expect(result.score).to.equal(83);
    expect(result.level).to.equal("high");
  });
  // 35
  it('9-18个字符，包含大小写字母+1个数字', () => {
    const result = vail("SoMethinGerRo1");
    expect(result.score).to.equal(57);
    expect(result.level).to.equal("weak");
  });
  // 36
  it('9-18个字符，包含大小写字母+大于等于3个数字', () => {
    const result = vail("SoMeThing7264");
    expect(result.score).to.equal(67);
    expect(result.level).to.equal("normal");
  });
  // 37
  it('9-18个字符，包含大小写字母+1个符号', () => {
    const result = vail("SoMeThinGErro!");
    expect(result.score).to.equal(55);
    expect(result.level).to.equal("weak");
  });
  // 38
  it('9-18个字符，包含大小写字母+大于1个符号', () => {
    const result = vail("SoMethIngerr!?");
    expect(result.score).to.equal(70);
    expect(result.level).to.equal("normal");
  });
  // 39
  it('9-18个字符，包含大小写字母+1个数字+1个符号', () => {
    const result = vail("SomeThingerr1!");
    expect(result.score).to.equal(70);
    expect(result.level).to.equal("normal");
  });
  // 40
  it('9-18个字符，包含大小写字母+1个数字+大于1个符号', () => {
    const result = vail("SomeThingerr1!?");
    expect(result.score).to.equal(85);
    expect(result.level).to.equal("high");
  });
  // 41
  it('9-18个字符，包含大小写字母+大于等于3个数字+1个符号', () => {
    const result = vail("SomeThInge7264!");
    expect(result.score).to.equal(80);
    expect(result.level).to.equal("high");
  });
  // 42
  it('9-18个字符，包含大小写字母+大于等于3个数字+大于1个符号', () => {
    const result = vail("SoMEThing6204!?");
    expect(result.score).to.equal(95);
    expect(result.level).to.equal("high");
  });
  // 43
  it('6-8个字符，包含数字+1个符号', () => {
    const result = vail("820636!");
    expect(result.score).to.equal(40);
    expect(result.level).to.equal("weak");
  });
  // 44
  it('6-8个字符，包含数字+大于1个符号', () => {
    const result = vail("58326!?");
    expect(result.score).to.equal(55);
    expect(result.level).to.equal("weak");
  });
  // 45
  it('9-18个字符，包含数字+1个符号', () => {
    const result = vail("9204367290724!");
    expect(result.score).to.equal(55);
    expect(result.level).to.equal("weak");
  });
  // 46
  it('9-18个字符，包含数字+大于1个符号', () => {
    const result = vail("900436285066!?");
    expect(result.score).to.equal(70);
    expect(result.level).to.equal("normal");
  });
  // 47
  it('6-8个字符，包含符号+1个数字', () => {
    const result = vail("!?!?!?6");
    expect(result.score).to.equal(45);
    expect(result.level).to.equal("weak");
  });
  // 48
  it('9-18个字符，包含符号+1个数字', () => {
    const result = vail("!?!?!?!?!?!?!?6");
    expect(result.score).to.equal(60);
    expect(result.level).to.equal("normal");
  });

});