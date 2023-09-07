// triangle.test.js

const {Triangle, Square, Circle, SVG} = require('./shapes') // Adjust the import path as needed

test('render method should return the correct SVG string', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('render method should return the correct SVG string', () => {
  const shape = new Square();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<rect x="75" y="25" width="150px" height="150px" fill="blue" />');
});

test('render method should return the correct SVG string', () => {
  const shape = new Circle();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
});