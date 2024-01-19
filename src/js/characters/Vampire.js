import Character from '../Character.js';

export default class Vampire extends Character {
  constructor(level) {
    super(level);
    this.level = level;
    this.attack = 25;
    this.defence = 25;
    this.type = 'vampire'
    this.attackDistance = 2;
    this.stepDistance = 2;
  }
}
