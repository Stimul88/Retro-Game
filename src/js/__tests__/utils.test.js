import { calcHealthLevel, calcTileType } from '../utils.js';


test('calcTileType test', () => {

  expect(calcTileType(3, 8)).toBe('top');
});
