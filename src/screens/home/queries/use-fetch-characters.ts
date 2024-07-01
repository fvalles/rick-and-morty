import {UseQueryResult, useQuery} from '@tanstack/react-query';
import {ApiEndpoint, QueryKey} from '../../../constants';
import {CharactersDto} from '../types';

/**
 * fetchCharacters helper
 */

const fetchCharacters = async (page: number): Promise<CharactersDto> => {
  const response = await fetch(`${ApiEndpoint.CHARACTERS}?page=${page}`);
  const result = await response.json();

  return result as CharactersDto;
};

/**
 * useFetchCharacters query
 */

export const useFetchCharacters = (
  page: number,
): UseQueryResult<CharactersDto, Error> =>
  useQuery({
    queryKey: [QueryKey.CHARACTERS, page],
    queryFn: () => fetchCharacters(page),
  });
