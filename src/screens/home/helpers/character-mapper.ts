import {CharacterDto} from '../types';

export const characterMapper = (characterDto?: CharacterDto[]) => {
  if (!characterDto) {
    return [];
  }

  const numberOfCharacters = characterDto.length;

  const newCharacterArray: CharacterDto[][] = [];
  let tempArray: CharacterDto[] = [];

  characterDto.forEach((character, index) => {
    const isLastArrayItem = index + 1 === numberOfCharacters;
    const isSecondTempArrayItem = index !== 0 && (index + 1) % 2 === 0;

    tempArray.push(character);

    if (isSecondTempArrayItem || isLastArrayItem) {
      newCharacterArray.push(tempArray);
      tempArray = [];
    }
  });

  return newCharacterArray;
};
