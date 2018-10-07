'use strict';

const { mockTHREE, mockCanvas } = require('ebabel-mocks');
const textSprite = require('../src/ebabel-text-sprite.js');

let THREE;
let canvas;

beforeEach(() => {
  THREE = mockTHREE;
  canvas = mockCanvas;
});

test('textSprite returns something other than undefined.', () => {
  const result = textSprite({ THREE, canvas, text: 'Gruesome Goblin' });
  expect(result !== undefined).toBe(true);
});

test('textSprite returns undefined when input is missing.', () => {
  const result = textSprite();
  expect(result).toBe(undefined);
});

test('textSprite returns undefined when THREE.js is missing.', () => {
  const result = textSprite({ canvas, text: 'Green Gargoyle' });
  expect(result).toBe(undefined);
});

test('textSprite returns undefined when canvas is missing.', () => {
  const result = textSprite({ THREE, text: 'Green Gargoyle' });
  expect(result).toBe(undefined);
});

test('textSprite returns undefined when text is missing.', () => {
  const result = textSprite({ THREE, canvas });
  expect(result).toBe(undefined);
});
