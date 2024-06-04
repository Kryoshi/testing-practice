import { describe, expect, it } from 'vitest';
import { analyzeArray } from '../modules/analyze-array';

describe('Analyzing array of numbers', () => {
  it('works with an array of length 1', () => {
    expect(analyzeArray([1])).toEqual({
      average: 1,
      min: 1,
      max: 1,
      length: 1,
    });
    expect(analyzeArray([2])).toEqual({
      average: 2,
      min: 2,
      max: 2,
      length: 1,
    });
  });
  it('works with an array of length > 1', () => {
    expect(analyzeArray([1, 1])).toEqual({
      average: 1,
      min: 1,
      max: 1,
      length: 2,
    });
    expect(analyzeArray([1, 2])).toEqual({
      average: 1.5,
      min: 1,
      max: 2,
      length: 2,
    });
    expect(analyzeArray([2, 2, 8, 16])).toEqual({
      average: 10.5,
      min: 2,
      max: 16,
      length: 4,
    });
  });
  it('returns null values with empty arrays', () => {
    expect(analyzeArray([])).toEqual({
      average: null,
      min: null,
      max: null,
      length: 0,
    });
  });
  it('ignore non number values', () => {
    expect(analyzeArray([1, 2, '2', '4'])).toEqual({
      average: 1.5,
      min: 1,
      max: 2,
      length: 2,
    });
    expect(analyzeArray([NaN, false, 1, 2])).toEqual({
      average: 1.5,
      min: 1,
      max: 2,
      length: 2,
    });
    expect(analyzeArray([2, 4, [8], { 16: 16 }])).toEqual({
      average: 3,
      min: 2,
      max: 4,
      length: 2,
    });
    expect(analyzeArray([false, NaN, [8], { 16: 16 }])).toEqual({
      average: null,
      min: null,
      max: null,
      length: 0,
    });
  });
});
