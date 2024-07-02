import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from './types';
import {Home} from '../../screens/home';
import {Character} from '../../screens/character';
import {Colors} from '../../theme';

const Stack = createNativeStackNavigator<HomeStackParamList>();

/**
 * HomeStack
 */

export const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen
      name="Character"
      component={Character}
      options={{
        headerStyle: {
          backgroundColor: Colors.blueWhale,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle: '',
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
);
