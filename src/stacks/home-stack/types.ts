import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomeStackParamList = {
  Home: undefined;
  Character: {id: number};
};

export type HomeStackNavigationProps =
  NativeStackNavigationProp<HomeStackParamList>;
