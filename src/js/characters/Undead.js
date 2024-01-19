import Character from '../Character.js';

export default class Undead extends Character {
  constructor(level) {
    super(level);
    this.level = level;
    this.attack = 40;
    this.defence = 10;
    this.type = 'undead'
    this.attackDistance = 1;
    this.stepDistance = 4;
  }
}
