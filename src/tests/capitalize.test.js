import { describe, expect, it } from 'vitest';
import { capitalize } from '../modules/capitalize';

describe('Capitalize', () => {
  it('only accepts strings', () => {
    expect(capitalize()).toBe('');
    expect(capitalize(1)).toBe('');
    expect(capitalize({})).toBe('');
    expect(capitalize([])).toBe('');
  });
  it('capitalizes any lowercase letter', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('b')).toBe('B');
    expect(capitalize('x')).toBe('X');
    expect(capitalize('z')).toBe('Z');
  });
  it('only capitalises the first letter', () => {
    expect(capitalize('azzz')).toBe('Azzz');
    expect(capitalize('zzzz')).toBe('Zzzz');
    expect(capitalize('this is a sentence')).toBe('This is a sentence');
  });
  it('makes no change if first letter is capitalized', () => {
    expect(capitalize('A')).toBe('A');
    expect(capitalize('Azzz')).toBe('Azzz');
    expect(capitalize('AZZZ')).toBe('AZZZ');
  });
  it('works with special characters', () => {
    expect(capitalize(' ')).toBe(' ');
    expect(capitalize('ü')).toBe('Ü');
    expect(capitalize('â')).toBe('Â');
    //expect(capitalize('ß')).toBe('ẞ'); Doesn't work with String.toUpperCase()
    expect(capitalize('ẞ')).toBe('ẞ');
  });
  it('works with numbers in the string', () => {
    expect(capitalize('z123')).toBe('Z123');
    expect(capitalize('123z')).toBe('123z');
  });
});
