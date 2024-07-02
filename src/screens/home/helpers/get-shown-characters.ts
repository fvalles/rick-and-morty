import {CharacterDto} from '../../../types';
import {characterMapper} from './character-mapper';

export const getShownCharacters = (
  paginationNumber: number,
  results?: CharacterDto[],
) => {
  const characters = characterMapper(results);
  const firstPageItems = characters.slice(0, 5);
  const secondPageItems = characters.slice(5);

  const remainder = paginationNumber % 2;

  let shownCharacters;

  if (remainder === 1) {
    shownCharacters = firstPageItems;
  } else {
    shownCharacters = secondPageItems;
  }

  return shownCharacters;
};
