'use strict';

const scaleWidthFactor = 0.002090;

/**
 * `ebabelTextSprite`
 * Create a 2D text sprite that can be added to any THREE.js mesh.
 * @param {Object} input - Collection of input properties.
 * @param {Object} input.THREE - Library THREE.js object.
 * @param {Object} input.canvas - DOM canvas, i.e. document.createElement('canvas')
 * @param {string} input.text - String of text to display above a sprite.
 * @returns {Object} THREE.js sprite that can be added to a mesh. 
 */
const textSprite = (input) => {
  if (!input) return;

  const {
    THREE,
    canvas,
    text,
  } = input;

  if (!THREE || !canvas || !text) return;

  const fontface = 'Verdana';
  const fontsize = 32;

  const context = canvas.getContext('2d');
  context.font = `${fontsize}px ${fontface}`;
  context.fillStyle = '#ffffff';
  context.fillText(text, 10, fontsize);

  const texture = new THREE.Texture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.needsUpdate = true;

  const spriteMaterial = new THREE.SpriteMaterial({ map: texture });

  const sprite = new THREE.Sprite(spriteMaterial);
  sprite.name = 'text';
  sprite.scale.set(2, 1, 1.0);

  // Dynamically centre based on actual size of text.
  const size = context.measureText(text);
  sprite.center.set(size.width * scaleWidthFactor, 0.4);

  return sprite;
};

module.exports = textSprite;
