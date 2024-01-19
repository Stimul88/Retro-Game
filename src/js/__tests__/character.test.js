import Character from '../Character.js';
import Swordsman from "../characters/Swordsman";

test('character throw test', () => {
  expect(() => {
    new Character(1);
  }).toThrow();
});

test('character no throw test', () => {
  expect(() => {
    new Swordsman(1);
  }).not.toThrow();
});

