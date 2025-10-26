import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: /.*\.spec\.ts/,
  reporter: [
    ['html', { open: 'never' }],   // HTML report
    ['list'],                      // console output
    ['json', { outputFile: 'test-results.json' }], // optional JSON
  ],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
});
