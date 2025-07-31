import { describe, it, expect } from 'vitest';
import { runCucumberFeatures } from '../run-cucumber';

describe('Cucumber features', () => {
  it('should pass all features', async () => {
    const exitCode = await runCucumberFeatures();
    expect(exitCode).toBe(0);
  });
});
