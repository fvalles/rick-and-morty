import {UseQueryResult, useQuery} from '@tanstack/react-query';
import {QueryKey} from '../../../constants';
import {CharactersDto} from '../types';

/**
 * fetchCharacters helper
 */

const fetchCharacters = async (): Promise<CharactersDto> => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const result = await response.json();

  return result as CharactersDto;
};

/**
 * useFetchCharacters query
 */

export const useFetchCharacters = (): UseQueryResult<CharactersDto, Error> =>
  useQuery({
    queryKey: [QueryKey],
    queryFn: fetchCharacters,
  });
