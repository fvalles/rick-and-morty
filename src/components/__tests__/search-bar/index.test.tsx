import {render, screen, userEvent} from '@testing-library/react-native';
import {SearchBar} from '../../search-bar';
import {ThemeProvider} from '@emotion/react';
import {Colors, Spacers} from '../../../theme';

const onCancelPress = jest.fn();
const onSearchPress = jest.fn();
const onChangeText = jest.fn();

test('search bar search button press should execute onSearchPress function', async () => {
  const filterSearch = '';
  const showCancelButton = false;

  const searchBarProps = {
    filterSearch,
    showCancelButton,
    onCancelPress,
    onSearchPress,
    onChangeText,
  };

  const user = userEvent.setup();

  render(
    <ThemeProvider theme={{Colors, Spacers}}>
      <SearchBar {...searchBarProps} />
    </ThemeProvider>,
  );

  await user.press(screen.getByTestId('search-button'));
  expect(onSearchPress).toHaveBeenCalled();
});

test('search bar cancel button press should execute onCancelPress function', async () => {
  const filterSearch = '';
  const showCancelButton = true;

  const searchBarProps = {
    filterSearch,
    showCancelButton,
    onCancelPress,
    onSearchPress,
    onChangeText,
  };

  const user = userEvent.setup();

  render(
    <ThemeProvider theme={{Colors, Spacers}}>
      <SearchBar {...searchBarProps} />
    </ThemeProvider>,
  );

  await user.press(screen.getByTestId('cancel-button'));
  expect(onCancelPress).toHaveBeenCalled();
});

test('search bar filterSearch text should be present', async () => {
  const filterSearch = 'rick';
  const showCancelButton = true;

  const searchBarProps = {
    filterSearch,
    showCancelButton,
    onCancelPress,
    onSearchPress,
    onChangeText,
  };

  render(
    <ThemeProvider theme={{Colors, Spacers}}>
      <SearchBar {...searchBarProps} />
    </ThemeProvider>,
  );

  const filterSearchText = screen.getByPlaceholderText(
    'Search character by name...',
  );
  expect(filterSearchText.props.value).toStrictEqual(filterSearch);
});
