import { test } from 'node:test'
import assert from 'node:assert'
import { sum } from './sum.js'

// Flip the expected value to 3 to make CI fail on purpose — that is how you
// exercise the check_suite rule and the requires-human guard.
test('sum adds two numbers', () => {
  assert.strictEqual(sum(1, 1), 2)
})
