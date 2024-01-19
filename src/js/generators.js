import Team from "./Team";

/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  while (true) {
    const generation = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
    const randomLevel = Math.floor(Math.random() * ((maxLevel + 1) - 1)  + 1);
    yield new generation(randomLevel)
  }
  // TODO: write logic here
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const teamArray = [];
  const playerGenerator = characterGenerator(allowedTypes, maxLevel);
  while(teamArray.length < characterCount) {
    if(teamArray.length === 0){
      const character = playerGenerator.next().value
      teamArray.push(character)
    } else {
      const character = playerGenerator.next().value
      if(teamArray[0].constructor.name !== character.constructor.name) {
        teamArray.push(character)
      }
    }
  }
  return new Team(teamArray)
  // TODO: write logic here
}
