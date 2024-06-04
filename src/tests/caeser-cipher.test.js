import { describe, expect, it } from 'vitest';
import { caesarCipher } from '../modules/caesar-cipher';

describe('Caesar cipher', () => {
  it('shifts single letters up', () => {
    expect(caesarCipher('a')).toBe('b');
    expect(caesarCipher('b')).toBe('c');
    expect(caesarCipher('A')).toBe('B');
  });
  it('wraps at end of alphabet', () => {
    expect(caesarCipher('z')).toBe('a');
    expect(caesarCipher('Z')).toBe('A');
  });
  it('works with multiple letters', () => {
    expect(caesarCipher('abc')).toBe('bcd');
    expect(caesarCipher('xyz')).toBe('yza');
    expect(caesarCipher('Banana')).toBe('Cbobob');
  });
  it('ignores non [a-zA-Z] characters', () => {
    expect(caesarCipher('a!')).toBe('b!');
    expect(caesarCipher('Are These Words?')).toBe('Bsf Uiftf Xpset?');
    expect(caesarCipher('a123456!')).toBe('b123456!');
    expect(caesarCipher('!?(){}')).toBe('!?(){}');
    expect(caesarCipher('hétérogénéité')).toBe('iéuésphéoéjué');
  });
  it('shifts by number specified', () => {
    expect(caesarCipher('a', 2)).toBe('c');
    expect(caesarCipher('abc', 3)).toBe('def');
    expect(caesarCipher('abc', 0)).toBe('abc');
    expect(caesarCipher('abc', 26)).toBe('abc');
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('This is a sentence', 7)).toBe('Aopz pz h zlualujl');
  });
  it('works with negative shift', () => {
    expect(caesarCipher('a', -1)).toBe('z');
    expect(caesarCipher('abc', -3)).toBe('xyz');
    expect(caesarCipher('abc', -26)).toBe('abc');
    expect(caesarCipher('hétérogénéité', -10)).toBe('xéjéhewédéyjé');
  });
  it('only accepts strings', () => {
    expect(caesarCipher()).toBe('');
    expect(caesarCipher(1)).toBe('');
    expect(caesarCipher({})).toBe('');
    expect(caesarCipher([])).toBe('');
  });
});
