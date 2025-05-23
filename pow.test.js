import { describe, test, expect } from 'eslint';

import { Pow } from "./pow";

describe('sum functions', () => {
  test('3 ** 2 to be equal 9', () => {
    expect(Pow(3, 2)).toBe(9);
  });
  test('4 ** 3 to be equal ', () => {
    expect(Pow(4, 3)).toBe(64);
  })
});