import Stoned from '../Character.js';

export default class Magician extends Stoned {
  constructor(level) {
    super(level);
    this.level = level;
    this.attack = 10;
    this.defence = 40;
    this.type = 'magician';
    this.attackDistance = 4;
    this.stepDistance = 1;

  }
}
