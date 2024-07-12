import { describe, expect, test } from 'vitest';
import { formatType, helloworld } from './helloworld';

test('helloworld function can be called without error', () => {
  helloworld('Romain')
});

test('helloworld function returns hello followed by name', () => {
  expect(helloworld('Romain')).toBe('Hello Romain !');
});

describe('formatType function', () => {
  test('returns red with Feu as param', () => {
    expect(formatType('Feu')).toBe('red');
  });

  test('returns blue with Eau as param', () => {
    expect(formatType('Eau')).toBe('blue');
  });

  test('returns empty string with other param', () => {
    expect(formatType('jkfdhgjkdf')).toBe('');
  });
});
