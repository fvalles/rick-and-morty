import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Colors, Spacers} from './src/theme';
import {ThemeProvider} from '@emotion/react';
import {HomeStack} from './src/stacks/home-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={{Colors, Spacers}}>
          <HomeStack />
        </ThemeProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
