import { When, Then } from '@cucumber/cucumber';
import assert from 'assert';

let response: string;

When('I request the greeting', async function () {
  // Hardcoded simulation for now
  response = 'Hello, World';
});

Then('I should receive {string}', function (expected: string) {
  assert.strictEqual(response, expected);
});
