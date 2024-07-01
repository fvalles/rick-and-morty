import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomeStackParamList = {
  Home: undefined;
  Character: undefined;
};

export type HomeStackNavigationProps =
  NativeStackNavigationProp<HomeStackParamList>;
