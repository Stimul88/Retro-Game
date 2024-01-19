import Character from '../Character.js';

export default class Bowman extends Character {
  constructor(level) {
    super(level);
    this.level = level;
    this.attack = 25;
    this.defence = 25;
    this.type = 'bowman';
    this.attackDistance = 2;
    this.stepDistance = 4;
  }
}
