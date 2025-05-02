import { describe, it } from 'node:test';
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
});
