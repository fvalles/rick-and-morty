import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProps} from '../../stacks/home-stack/types';
import {useFetchCharacters} from './queries/use-fetch-characters';
import {Spacer} from '../../components/spacer';
import {H3} from '../../components/typography';
import {CharacterCard} from '../../components/character-card';
import {Fragment, useCallback, useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {
  CenteredContainer,
  CharacterRow,
  RickAndMortyImage,
  ScreenContainer,
  StyledScrollView,
} from './styled-components';
import Pagination from '@cherry-soft/react-native-basic-pagination';
import {Colors} from '../../theme';
import rickAndMortyImage from '../../../assets/images/rick-and-morty.png';
import {getShownCharacters} from './helpers/get-shown-characters';
import {SearchBar} from '../../components/search-bar';

/**
 * Constants
 */

const ITEMS_PER_PAGE = 10;

/**
 * Home Screen
 */

export const Home = () => {
  const {navigate} = useNavigation<HomeStackNavigationProps>();
  const [apiPage, setApiPage] = useState(1);
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [filterSearch, setFilterSearch] = useState('');
  const [filterQueryParam, setFilterQueryParam] = useState('');
  const {isPending, isError, data, isSuccess, refetch, isFetching} =
    useFetchCharacters(apiPage, filterQueryParam);

  const shownCharacters = useMemo(
    () => getShownCharacters(paginationNumber, data?.results),
    [paginationNumber, data?.results],
  );

  const handleChangeText = useCallback((text: string) => {
    setFilterSearch(text.toLowerCase());
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      const division = Math.floor(page / 2);
      const remainder = page % 2;
      const newPage = division + remainder;

      if (newPage !== apiPage) {
        setApiPage(newPage);
      }

      setPaginationNumber(page);
    },
    [apiPage],
  );

  const handleCancelPress = useCallback(() => {
    setPaginationNumber(1);
    setApiPage(1);
    setFilterQueryParam('');
    setFilterSearch('');
    refetch();
  }, []);

  const handleSearchPress = useCallback(() => {
    setPaginationNumber(1);
    setApiPage(1);
    setFilterQueryParam(filterSearch);
    refetch();
  }, [filterSearch]);

  if (isPending || isFetching) {
    return (
      <CenteredContainer>
        <H3>Loading animation lootie</H3>
      </CenteredContainer>
    );
  }

  if (isError) {
    return (
      <SafeAreaView>
        <ScreenContainer>
          <H3>Empty State component with refetch button - {data?.error}</H3>
        </ScreenContainer>
      </SafeAreaView>
    );
  }

  return isSuccess ? (
    <SafeAreaView>
      <ScreenContainer>
        <Spacer size="s" />
        <RickAndMortyImage source={rickAndMortyImage} />
        <Spacer size="m" />
        <SearchBar
          filterSearch={filterSearch}
          showCancelButton={filterSearch !== ''}
          onCancelPress={handleCancelPress}
          onChangeText={handleChangeText}
          onSearchPress={handleSearchPress}
        />
        <Spacer size="m" />
        {data?.error ? (
          <CenteredContainer>
            <H3>No characters found - Please try again</H3>
          </CenteredContainer>
        ) : (
          <StyledScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}>
            {shownCharacters.map((characterRow, index) => (
              <Fragment key={index}>
                <CharacterRow>
                  {characterRow.map(({id, name, image}) => (
                    <CharacterCard
                      id={id}
                      name={name}
                      image={image}
                      onPress={() => navigate('Character', {id})}
                      key={id}
                    />
                  ))}
                </CharacterRow>
                <Spacer size="s" />
              </Fragment>
            ))}
            <Pagination
              totalItems={data.info.count}
              pageSize={ITEMS_PER_PAGE}
              currentPage={paginationNumber}
              pagesToDisplay={2}
              btnStyle={{
                backgroundColor: Colors.nightBrown,
                borderColor: Colors.nightBrown,
              }}
              activeBtnStyle={{
                opacity: 0.8,
              }}
              onPageChange={handlePageChange}
              showLastPagesButtons
            />
          </StyledScrollView>
        )}
      </ScreenContainer>
    </SafeAreaView>
  ) : null;
};
