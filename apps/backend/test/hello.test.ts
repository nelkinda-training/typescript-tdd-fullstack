import { describe, it, expect } from 'vitest';
import { greet } from '../src/greet';

describe('Hello', () => {
  it('says world', () => {
    expect(greet()).toBe('world');
  });
});
