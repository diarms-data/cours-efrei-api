import { describe, test, expect } from 'eslint';

import { Multiply } from "./multiply";

describe('testing multiply function', () => {
  test('4 * 4 to be equal 16', () => {
    expect(Multiply(4, 4)).toBe(16);
  })
})