import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toEcts } from '../site/grade.js';

test('межі кожної оцінки', () => {
  assert.equal(toEcts(100), 'A');
  assert.equal(toEcts(90), 'A');
  assert.equal(toEcts(89), 'B');
  assert.equal(toEcts(82), 'B');
  assert.equal(toEcts(81), 'C');
  assert.equal(toEcts(74), 'C');
  assert.equal(toEcts(73), 'D');
  assert.equal(toEcts(64), 'D');
  assert.equal(toEcts(63), 'E');
  assert.equal(toEcts(60), 'E');
  assert.equal(toEcts(59), 'FX');
  assert.equal(toEcts(35), 'FX');
  assert.equal(toEcts(34), 'F');
  assert.equal(toEcts(0), 'F');
});

test('неправильний бал відхиляється', () => {
  assert.throws(() => toEcts(-1), RangeError);
  assert.throws(() => toEcts(101), RangeError);
  assert.throws(() => toEcts('90'), RangeError);
  assert.throws(() => toEcts(NaN), RangeError);
});
