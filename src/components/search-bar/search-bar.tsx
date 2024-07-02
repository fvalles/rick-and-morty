import styled from '@emotion/native';
import {Icon} from 'react-native-eva-icons';
import {Colors} from '../../theme';

/**
 * Types
 */

interface SearchBarProps {
  filterSearch: string;
  showCancelButton: boolean;
  onCancelPress: () => void;
  onSearchPress: () => void;
  onChangeText: (test: string) => void;
}

/**
 * Styled Components
 */

const SearchBarContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const StyledTextInput = styled.TextInput`
  background-color: ${({theme}) => theme.Colors.ardcoat};
  color: ${({theme}) => theme.Colors.nightBrown};
  padding: 10px;
  flex: 1;
`;

const IconButtonContainer = styled.TouchableOpacity`
  padding-left: 5px;
`;

/**
 * SearchBar Component
 */

export const SearchBar = ({
  filterSearch,
  showCancelButton,
  onCancelPress,
  onSearchPress,
  onChangeText,
}: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <StyledTextInput
        onChangeText={onChangeText}
        value={filterSearch}
        placeholder="Search character by name..."
        placeholderTextColor={Colors.nightBrown}
      />
      <IconButtonContainer onPress={onSearchPress}>
        <Icon
          name="search-outline"
          width={25}
          height={25}
          fill={Colors.nightBrown}
        />
      </IconButtonContainer>
      {showCancelButton && (
        <IconButtonContainer onPress={onCancelPress}>
          <Icon
            name="close-circle-outline"
            width={25}
            height={25}
            fill={Colors.nightBrown}
          />
        </IconButtonContainer>
      )}
    </SearchBarContainer>
  );
};
