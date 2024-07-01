import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Colors, Spacers} from './src/theme';
import {ThemeProvider} from '@emotion/react';
import {HomeStack} from './src/stacks/home-stack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider theme={{Colors, Spacers}}>
        <HomeStack />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
