import { describe, expect, it } from 'vitest';
import { reverseString } from '../modules/reverse-string';

describe('Reversing string', () => {
  it('only accepts strings', () => {
    expect(reverseString()).toBe('');
    expect(reverseString(1)).toBe('');
    expect(reverseString({})).toBe('');
    expect(reverseString([])).toBe('');
  });
  it('works with empty strings', () => {
    expect(reverseString('')).toBe('');
  });
  it('works with one character', () => {
    expect(reverseString('a')).toBe('a');
    expect(reverseString('b')).toBe('b');
    expect(reverseString('z')).toBe('z');
  });
  it('works with a word', () => {
    expect(reverseString('apple')).toBe('elppa');
    expect(reverseString('Banana')).toBe('ananaB');
    expect(reverseString('zeBra')).toBe('arBez');
  });
  it('works with a sentence', () => {
    expect(reverseString('This is a sentence')).toBe('ecnetnes a si sihT');
    expect(reverseString('HERE ARE SOME WORDS')).toBe('SDROW EMOS ERA EREH');
    expect(reverseString('And, with punctuation? Yes.')).toBe(
      '.seY ?noitautcnup htiw ,dnA',
    );
  });
});
