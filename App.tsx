import React from 'react';
import styled from '@emotion/native';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Colors, Spacers} from './src/theme';
import {ThemeProvider} from '@emotion/react';

const StyledText = styled.Text`
  color: ${props => props.theme.Colors.loneHunter};
`;

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={{Colors, Spacers}}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <StyledText>Hello world</StyledText>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
