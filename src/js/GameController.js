import Bowman from "./characters/Bowman";
import Swordsman from "./characters/Swordsman";
import Magician from "./characters/Magician";
import Undead from "./characters/Undead";
import Vampire from "./characters/Vampire";
import Daemon from "./characters/Daemon";
import {generateTeam} from "./generators";
import PositionedCharacter from "./PositionedCharacter";
import GamePlay from "./GamePlay";
import cursors from "./cursors";
import Themes from "./Themes.js";



export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.playerTypesGeneration = [];
    this.computerTypesGeneration = [];
    this.allTypesGeneration = [];
    this.playerTypesList = [];
    this.computerTypesList = [];
    this.selectedIndex = null;
    this.computerIndex = null;
    this.selectedCharacter = null;
    this.positionedCharacterArray =[];
    this.selected = false;
  }

  init() {
    this.gamePlay.drawUi(Themes.selectThemes(1))
    this.setPosition()
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this))
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this))
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this))


    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  setPosition() {

    const playerTypes = [Bowman, Swordsman, Magician];
    const computerTypes = [Undead, Vampire, Daemon];
    const team1 = generateTeam(playerTypes, 1, 2);
    const team2 = generateTeam(computerTypes, 1, 2);



    this.playerTypesGeneration.push(...team1.characters)
    this.playerTypesList = this.playerTypesGeneration.map(i => i.type)


    this.computerTypesGeneration.push(...team2.characters)
    this.computerTypesList = this.computerTypesGeneration.map(i => i.type)

    this.allTypesGeneration.push(...team1.characters,...team2.characters)

    this.positionedCharacterArray = [
      new PositionedCharacter(team1.characters[0], this.randomPosition(0)),
      new PositionedCharacter(team1.characters[1], this.randomPosition(1)),
      new PositionedCharacter(team2.characters[0], this.randomPosition(2)),
      new PositionedCharacter(team2.characters[1], this.randomPosition(3))
    ];

    // this.positionedCharacterArray = positionedCharacterArray
    this.gamePlay.redrawPositions(this.positionedCharacterArray)
  }

  randomPosition(numberInTeam) {

    if(numberInTeam === 0) {
      const zeroArray = [0, 8, 16, 24, 32, 40, 48, 56]
      return zeroArray[Math.floor(Math.random() * zeroArray.length)]
    }
    if(numberInTeam === 1) {
      const zeroArray = [1, 9, 17, 25, 33, 41, 49, 57]
      return zeroArray[Math.floor(Math.random() * zeroArray.length)]
    }
    if(numberInTeam === 2) {
      const zeroArray = [6, 14, 22, 30, 38, 46, 54, 62]
      return zeroArray[Math.floor(Math.random() * zeroArray.length)]
    }
    if(numberInTeam === 3) {
      const zeroArray = [7, 15, 23, 31, 39, 47, 55, 63]
      return zeroArray[Math.floor(Math.random() * zeroArray.length)]
    }
  }

  characterInfo(characterName) {
    const icons = {
      level: '\u{1F396}',
      attack: '\u{2694}',
      defence: '\u{1F6E1}',
      health: '\u{2764}',
    };

    return `${icons.level}${characterName.level} ${icons.attack}${characterName.attack} ${icons.defence}${characterName.defence} ${icons.health}${characterName.health}`;
  }

  roundStepDistance(index, distance) {
    const values = [];
    const indexRow = Math.floor(index / this.gamePlay.boardSize);
    const indexColumn = index % this.gamePlay.boardSize;

    for (let i = 1; i <= distance; i += 1) {
      if (indexColumn + i < this.gamePlay.boardSize) {
        values.push(indexRow * this.gamePlay.boardSize + (indexColumn + i));
      }
      if (indexColumn - i >= 0) {
        values.push(indexRow * this.gamePlay.boardSize + (indexColumn - i));
      }
      if (indexRow + i < this.gamePlay.boardSize) {
        values.push((indexRow + i) * this.gamePlay.boardSize + indexColumn);
      }
      if (indexRow - i >= 0) {
        values.push((indexRow - i) * this.gamePlay.boardSize + indexColumn);
      }
      if (indexRow + i < this.gamePlay.boardSize && indexColumn + i < this.gamePlay.boardSize) {
        values.push((indexRow + i) * this.gamePlay.boardSize + (indexColumn + i));
      }
      if (indexRow - i >= 0 && indexColumn - i >= 0) {
        values.push((indexRow - i) * this.gamePlay.boardSize + (indexColumn - i));
      }
      if (indexRow + i < this.gamePlay.boardSize && indexColumn - i >= 0) {
        values.push((indexRow + i) * this.gamePlay.boardSize + (indexColumn - i));
      }
      if (indexRow - i >= 0 && indexColumn + i < this.gamePlay.boardSize) {
        values.push((indexRow - i) * this.gamePlay.boardSize + (indexColumn + i));
      }
    }
    return values;
  }


  roundAttackDistance(index, distance) {
    const attackCell = [];
    const indexRow = Math.floor(index / this.gamePlay.boardSize);
    const indexColumn = index % this.gamePlay.boardSize;
    // console.log(indexColumn)
    // console.log(indexRow)
    // console.log(index)
    // console.log(distance)

    for (let i = 1; i <= distance; i += 1) {
      if (indexColumn + i < this.gamePlay.boardSize) {
        attackCell.push(indexRow * this.gamePlay.boardSize + (indexColumn + i));
      }
      if (indexColumn - i >= 0) {
        attackCell.push(indexRow * this.gamePlay.boardSize + (indexColumn - i));
      }
      if (indexRow + i < this.gamePlay.boardSize) {
        attackCell.push((indexRow + i) * this.gamePlay.boardSize + indexColumn);
      }
      if (indexRow - i >= 0) {
        attackCell.push((indexRow - i) * this.gamePlay.boardSize + indexColumn);
      }
      if (indexRow + i < this.gamePlay.boardSize && indexColumn + i < this.gamePlay.boardSize) {
        attackCell.push((indexRow + i) * this.gamePlay.boardSize + (indexColumn + i));
      }
      if (indexRow - i >= 0 && indexColumn - i >= 0) {
        attackCell.push((indexRow - i) * this.gamePlay.boardSize + (indexColumn - i));
      }
      if (indexRow + i < this.gamePlay.boardSize && indexColumn - i >= 0) {
        attackCell.push((indexRow + i) * this.gamePlay.boardSize + (indexColumn - i));
      }
      if (indexRow - i >= 0 && indexColumn + i < this.gamePlay.boardSize) {
        attackCell.push((indexRow - i) * this.gamePlay.boardSize + (indexColumn + i));
      }
    }
    return attackCell;
  }


  levelUp (character) {
    // this.gamePlay.drawUi(themes.prairie)

    if (character.health <= 0) {
      throw new Error('it is impossible to raise the level of the deceased')
    }
    character.level++;
    character.attack = Math.max(character.attack, character.attack * (80 + character.health) / 100);
    character.defence = Math.max(character.defence, character.defence * (80 + character.health) / 100);
    if(character.health + 80 >= 100) {
      character.health = 100
    } else {
      character.health = character.health + 80;
    }
  }


  async computerAttack(index) {
    const position = document.querySelectorAll('.cell');
    let character =  position[index].querySelector('.character');

    const computerCharacter = this.computerTypesGeneration.find( i =>
      i.type === character.classList[1]
    );

    const damage = this.calculationDamage(computerCharacter, this.selectedCharacter);

    // if(position[index].className.includes('selected-red')) {
      if(this.roundAttackDistance(index, computerCharacter.attackDistance).includes(this.selectedIndex)) {
        await this.gamePlay.showDamage(this.selectedIndex, damage)
        let pos = this.positionedCharacterArray.find(item => item.character.type === this.selectedCharacter.type)
        const indexHeroInArray = this.positionedCharacterArray.findIndex(item => item.character.type === this.selectedCharacter.type)
        const indexHero = this.playerTypesGeneration.findIndex(item => item.type === character.type)
        pos.character.health -= damage
        if (pos.character.health <= 0) {
          this.positionedCharacterArray.splice(indexHeroInArray, 1)
          this.playerTypesGeneration.splice(indexHero, 1)
          this.gamePlay.redrawPositions(this.positionedCharacterArray)
          this.gamePlay.setCursor(cursors.auto)
          this.gamePlay.deselectCell(this.selectedIndex)
          this.gamePlay.deselectCell(index)
          this.selected = false;
        }
      } else {
        this.computerMove(index)
        this.gamePlay.redrawPositions(this.positionedCharacterArray)
      }
    // }
    // this.gamePlay.redrawPositions(this.positionedCharacterArray)
  }


  computerMove(index) {
    const position = document.querySelectorAll('.cell');
    let character =  position[index].querySelector('.character');

    const computerCharacter = this.computerTypesGeneration.find( i =>
      i.type === character.classList[1]
    );

    const pos = this.positionedCharacterArray.find(item => item.position === index)
    // position.forEach((item1, selectedIndex) => {
    //   if(item1.className.includes('selected-red')) {
    //     this.gamePlay.deselectCell(selectedIndex)
    //   }
    // })
    // console.log(pos)
    pos.position = index - 1
    // this.selectedIndex = index
    this.gamePlay.redrawPositions(this.positionedCharacterArray)
    this.gamePlay.deselectCell(index)


  }

  calculationDamage(attacker, target) {
    return Math.max(attacker.attack - target.defence, attacker.attack * 0.1)
  }

  // выделение персонажа

  async onCellClick(index) {
    const position = Array.from(document.querySelectorAll('.cell'));
    const character = position[index].querySelector('.character');
    const board = document.querySelector('.board');

    if(!this.selected) {
      if(position[index].children.length !== 0 && !this.playerTypesList.includes(character.classList[1])) {
        GamePlay.showError('Необходимо выделить персонажа')
      }
      if(position[index].children.length === 0) {
        GamePlay.showError('Необходимо выделить персонажа')
      }

      if(position[index].hasChildNodes()) {
        if(this.playerTypesList.includes(character.classList[1])) {
          let result = this.playerTypesGeneration.find( i =>
            i.type === character.classList[1]
          );

          this.gamePlay.selectCell(index)
          this.selectedIndex = index;
          this.selectedCharacter = result;
          this.selected = true;
        }
      }
    }

    // манипуляции с выделенным персонажем

    if(this.selected) {

      // первый выбор персонажа
      if(position.find(item => item.className.includes('selected-green'))) {
        let pos = this.positionedCharacterArray.find(item => item.position === this.selectedIndex)
        position.forEach((item1, selectedIndex) => {
          if(item1.className.includes('selected-yellow')) {
            this.gamePlay.deselectCell(selectedIndex)
          }
        })
        pos.position = index
        this.selectedIndex = index
        this.gamePlay.redrawPositions(this.positionedCharacterArray)
        this.gamePlay.deselectCell(index)
        this.gamePlay.selectCell(index)
      }

      if (board.style.cursor.includes('not-allowed')) {
        if (!position[index].hasChildNodes()) {
          GamePlay.showError('Перемещение невозможно!')
        } else {
          GamePlay.showError('Враг находится далеко!')
        }
      }

      // выбор другого персонажа
      if(position[index].hasChildNodes()) {
        if (index !== this.selectedIndex) {
          let result = this.playerTypesGeneration.find( i =>
            i.type === character.classList[1]
          );
          if(result) {
            position.forEach((item1, selectedIndex) => {
              if(item1.className.includes('selected-yellow')) {
                this.gamePlay.deselectCell(selectedIndex)
              }
            })

            this.gamePlay.selectCell(index)
            this.selectedIndex = index;
            this.selectedCharacter = result;
            this.selected = true;
          }
        }


        // атака по сопернику
        if (board.style.cursor.includes('crosshair')) {
          let targetCharacter = this.computerTypesGeneration.find( i =>
                i.type === character.classList[1]
              );

          const damage = this.calculationDamage(this.selectedCharacter, targetCharacter);

          if(!board.style.cursor.includes('not-allowed')) {
            await this.gamePlay.showDamage(index, damage)
            let pos = this.positionedCharacterArray.find(item => item.character.type === targetCharacter.type)
            const indexComputerInArray = this.positionedCharacterArray.findIndex(item => item.character.type === targetCharacter.type)
            const indexComputer = this.computerTypesGeneration.findIndex(item => item.type === targetCharacter.type)
            pos.character.health -= damage
            this.computerIndex = index;

            if (pos.character.health <= 0) {
              this.positionedCharacterArray.splice(indexComputerInArray, 1)
              this.gamePlay.setCursor(cursors.auto)
              this.computerTypesGeneration.splice(indexComputer, 1)
              this.gamePlay.redrawPositions(this.positionedCharacterArray)
            } else {
              await this.computerAttack(index)
              this.gamePlay.redrawPositions(this.positionedCharacterArray)
            }


            if(this.computerTypesGeneration.length === 0) {

              this.playerTypesGeneration.forEach(item => {
                this.levelUp (item)
              })


              this.gamePlay.drawUi(Themes.selectThemes(this.playerTypesGeneration[0].level))

              // console.log(this.playerTypesGeneration[0].level)


              // const positionedCharacterArray = [
              //   new PositionedCharacter(team1.characters[0], this.randomPosition(0)),
              //   new PositionedCharacter(team1.characters[1], this.randomPosition(1)),
              //   new PositionedCharacter(team2.characters[0], this.randomPosition(2)),
              //   new PositionedCharacter(team2.characters[1], this.randomPosition(3))
              // ];

              // this.positionedCharacterArray = positionedCharacterArray
              this.gamePlay.redrawPositions(this.positionedCharacterArray)
            }


          }
        }
      }
    }
    // TODO: react to click
  }

  async onCellEnter(index) {
    const position = document.querySelectorAll('.cell')
    let character =  position[index].querySelector('.character')

    if (position[index].hasChildNodes()) {
      if(this.playerTypesList.includes(character.classList[1])) {
        this.gamePlay.setCursor(cursors.pointer)
      }
      this.allTypesGeneration.forEach(item => {
        if(position[index].children[0].className.includes(item.type)) {
          this.gamePlay.showCellTooltip(this.characterInfo(item), index)
        }
      })
      await position.forEach((item) => {
        if(item.className.includes('selected')) {
          if(this.computerTypesList.includes(character.classList[1])) {
            if(!this.roundAttackDistance(index, this.selectedCharacter.attackDistance).includes(this.selectedIndex)) {
              this.gamePlay.setCursor(cursors.notallowed)
            } if(this.roundAttackDistance(index, this.selectedCharacter.attackDistance).includes(this.selectedIndex)) {
              this.gamePlay.selectCell(index, 'red')
              this.gamePlay.setCursor(cursors.crosshair)
            }
          }
        }
      })
    } else if (position[index].children.length === 0){


      await position.forEach((item) => {
        if(item.className.includes('selected-yellow')) {
          if(!this.roundStepDistance(index, this.selectedCharacter.stepDistance).includes(this.selectedIndex)){
            // console.log(this.roundStepDistance(index, this.selectedCharacter.stepDistance))
            this.gamePlay.setCursor(cursors.notallowed)
          } else {
            this.gamePlay.selectCell(index, 'green')
          }
        }
      })
    }
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    const position = document.querySelectorAll('.cell')
    let character =  position[index].querySelector('.character')

    if (position[index].children.length !== 0) {
      this.gamePlay.setCursor(cursors.auto)
      if(this.computerTypesList.includes(character.classList[1])) {
        this.gamePlay.deselectCell(index)
      }
    } else {
      position.forEach((item) => {
        if(item.className.includes('selected')) {
          this.gamePlay.deselectCell(index)
        }
      })
    }
    this.gamePlay.hideCellTooltip(index)
    this.gamePlay.setCursor(cursors.auto)
    // TODO: react to mouse leave
  }
}
