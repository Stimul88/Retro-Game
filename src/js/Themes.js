// const themes = {
//   prairie: 'prairie',
//   desert: 'desert',
//   arctic: 'arctic',
//   mountain: 'mountain',
// };

// export default themes;

export default class Themes {
  constructor() {
    // this.level = level;
    this.prairie = 'prairie';
    this.desert = 'desert';
    this.arctic = 'arctic';
    this.mountain = 'mountain';
  }

  static selectThemes (level) {
    switch(level) {
      case 1:
        return 'prairie';
      case 2:
        return 'desert';
      case 3:
        return 'arctic';
      case 4:
        return 'mountain';
    }
  }
}
