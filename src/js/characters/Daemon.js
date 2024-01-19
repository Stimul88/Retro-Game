import Stoned from '../Character.js';

export default class Daemon extends Stoned {
  constructor(level) {
    super(level);
    this.level = level;
    this.attack = 10;
    this.defence = 10;
    this.type = 'daemon';
    this.attackDistance = 4;
    this.stepDistance = 1;
  }
}
