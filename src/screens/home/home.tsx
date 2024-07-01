import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProps} from '../../stacks/home-stack/types';
import {useFetchCharacters} from './queries/use-fetch-characters';
import {Spacer} from '../../components/spacer';
import {H1, H3} from '../../components/typography';
import {CharacterCard} from '../../components/character-card';
import {Fragment, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {characterMapper} from './helpers/character-mapper';
import {
  CharacterRow,
  ScreenContainer,
  StyledScrollView,
} from './styled-components';
import Pagination from '@cherry-soft/react-native-basic-pagination';
import {Colors} from '../../theme';

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
  const {isPending, isError, data, error, isSuccess} =
    useFetchCharacters(apiPage);

  if (isPending) {
    <H3>Loading animation lootie</H3>;
  }

  if (isError) {
    <H3>Empty State component - Implement refetch button {error.message}</H3>;
  }

  const characters = characterMapper(data?.results);
  const firstPageItems = characters.slice(0, 5);
  const secondPageItems = characters.slice(5);

  const remainder = paginationNumber % 2;

  let shownCharacters;

  if (remainder === 1) {
    shownCharacters = firstPageItems;
  } else {
    shownCharacters = secondPageItems;
  }

  return isSuccess ? (
    <SafeAreaView>
      <ScreenContainer>
        <Spacer size="xs" />
        <H1>Rick and Morty</H1>
        <Spacer size="s" />
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
                    onPress={() => navigate('Character')}
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
            onPageChange={page => {
              const division = Math.floor(page / 2);
              const remainder = page % 2;
              const newPage = division + remainder;

              if (newPage !== apiPage) {
                setApiPage(newPage);
              }

              setPaginationNumber(page);
            }}
            showLastPagesButtons
          />
        </StyledScrollView>
      </ScreenContainer>
    </SafeAreaView>
  ) : null;
};
