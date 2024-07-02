import {UseQueryResult, useQuery} from '@tanstack/react-query';
import {ApiEndpoint, QueryKey} from '../../../constants';
import {CharacterDto} from '../../../types';

/**
 * fetchCharacter helper
 */

const fetchCharacter = async (id: number): Promise<CharacterDto> => {
  const response = await fetch(`${ApiEndpoint.CHARACTER}/${id}`);
  const result = await response.json();

  return result as CharacterDto;
};

/**
 * useFetchCharacters query
 */

export const useFetchCharacter = (
  id: number,
): UseQueryResult<CharacterDto, Error> =>
  useQuery({
    queryKey: [QueryKey.SINGLE_CHARACTER, id],
    queryFn: () => fetchCharacter(id),
  });
