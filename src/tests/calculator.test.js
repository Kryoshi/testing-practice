import { describe, it, expect } from 'vitest';
import { calculator } from '../modules/calculator';

describe('Calculator object', () => {
  describe('add function', () => {
    it('can add two numbers', () => {
      expect(calculator.add(1, 2)).toBe(3);
      expect(calculator.add(-1, 2)).toBe(1);
      expect(calculator.add(0.4, 2)).toBe(2.4);
    });
  });
  describe('subtract function', () => {
    it('can subtract one number from another', () => {
      expect(calculator.subtract(2, 1)).toBe(1);
      expect(calculator.subtract(-2, -1)).toBe(-1);
      expect(calculator.subtract(-0.2, -1)).toBe(0.8);
    });
  });
  describe('multiply function', () => {
    it('can multiply two numbers', () => {
      expect(calculator.multiply(1, 2)).toBe(2);
      expect(calculator.multiply(-1, 2)).toBe(-2);
      expect(calculator.multiply(0, 300)).toBe(0);
      expect(calculator.multiply(0.5, 2)).toBe(1);
    });
    it('throws error if multiplying by Infinity', () => {
      expect(() => calculator.multiply(Infinity, Infinity)).toThrowError();
      expect(() => calculator.multiply(1, Infinity)).toThrowError();
      expect(() => calculator.multiply(0, Infinity)).toThrowError();
    });
  });
  describe('divide function', () => {
    it('can divide one number by another', () => {
      expect(calculator.divide(4, 2)).toBe(2);
      expect(calculator.divide(200, 5)).toBe(40);
      expect(calculator.divide(200, 0.5)).toBe(400);
      expect(calculator.divide(-5, -10)).toBe(0.5);
    });
    it('throws error if dividing by 0', () => {
      expect(() => calculator.divide(10, 0)).toThrowError();
      expect(() => calculator.divide(0, 0)).toThrowError();
      expect(() => calculator.divide(-1000000, 0)).toThrowError();
    });
  });
  it('throws error with no arguments', () => {
    expect(() => calculator.add()).toThrowError();
    expect(() => calculator.subtract()).toThrowError();
    expect(() => calculator.multiply()).toThrowError();
    expect(() => calculator.divide()).toThrowError();
  });
  it('throws error with non number arguments', () => {
    expect(() => calculator.add('a', 'b')).toThrowError();
    expect(() => calculator.subtract('a', {})).toThrowError();
    expect(() => calculator.multiply([], {})).toThrowError();
    expect(() => calculator.divide('', 3)).toThrowError();
  });
  it('throws error with NaN arguments', () => {
    expect(() => calculator.add(NaN, NaN)).toThrowError();
    expect(() => calculator.subtract(NaN, 2)).toThrowError();
    expect(() => calculator.multiply(30, NaN)).toThrowError();
    expect(() => calculator.divide(NaN, 0)).toThrowError();
  });
  it('works with extra arguments', () => {
    expect(calculator.add(1, 2, 3)).toBe(3);
    expect(calculator.subtract(1, 2, 3)).toBe(-1);
    expect(calculator.multiply(1, 2, 3)).toBe(2);
    expect(calculator.divide(1, 2, 3)).toBe(0.5);
  });
});
