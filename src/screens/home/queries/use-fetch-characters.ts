import {UseQueryResult, useQuery} from '@tanstack/react-query';
import {ApiEndpoint, QueryKey} from '../../../constants';
import {CharactersDto} from '../../../types';

/**
 * fetchCharacters helper
 */

const fetchCharacters = async (
  page: number,
  filterSearch: string,
): Promise<CharactersDto> => {
  const filterQueryParams = filterSearch !== '' ? `&name=${filterSearch}` : '';

  const response = await fetch(
    `${ApiEndpoint.CHARACTER}?page=${page}${filterQueryParams}`,
  );
  const result = await response.json();

  return result as CharactersDto;
};

/**
 * useFetchCharacters query
 */

export const useFetchCharacters = (
  page: number,
  filterSearch: string,
): UseQueryResult<CharactersDto, Error> =>
  useQuery({
    queryKey: [QueryKey.CHARACTERS, page, filterSearch],
    queryFn: () => fetchCharacters(page, filterSearch),
  });
