import { defineConfig } from '@stryker-mutator/api/core';

export default defineConfig({
  mutator: 'typescript',
  packageManager: 'pnpm',
  testRunner: 'vitest',
  coverageAnalysis: 'off', // use 'perTest' or 'all' if coverage maps are needed
  reporters: ['html', 'clear-text', 'progress'],
  tempDirName: '.stryker-tmp',
  mutate: ['src/**/*.ts'],
  vitest: {
    configFile: 'vitest.config.ts',
  },
});
