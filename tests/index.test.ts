import { describe, it, mock } from 'node:test';
import assert from 'node:assert';

import Debouncer from '../src/index.ts';
import npmPackage from '../src/index.ts';

describe('NPM Package', () => {
  it('should be a function', () => {
    assert.strictEqual(typeof npmPackage, 'function');
  });
});

describe('Debouncer Class', () => {
  it('should be a function', () => {
    assert.strictEqual(typeof Debouncer, 'function');
  });

  it('should debounce a function', () => {
    const DEBOUNCE_TIMEOUT = 1000;
    mock.timers.enable();

    const mockFn = mock.fn();
    const debouncer = new Debouncer(mockFn, DEBOUNCE_TIMEOUT);

    // Call debounce 3 times
    debouncer.debounce();
    debouncer.debounce();
    debouncer.debounce();

    // mockFn should only get called once
    assert.deepStrictEqual(mockFn.mock.calls.length, 1);

    mock.timers.tick(DEBOUNCE_TIMEOUT);

    // After timeout has elapsed, mockFn should get called one more time
    assert.deepStrictEqual(mockFn.mock.calls.length, 2);
  });
});
