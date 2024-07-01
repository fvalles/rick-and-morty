import {SafeAreaView, View} from 'react-native';
import styled from '@emotion/native';

const StyledText = styled.Text`
  color: ${props => props.theme.Colors.loneHunter};
`;

export const Character = () => {
  return (
    <SafeAreaView>
      <View>
        <StyledText>Character Screen</StyledText>
      </View>
    </SafeAreaView>
  );
};
