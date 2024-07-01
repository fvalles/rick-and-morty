import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProps} from '../../stacks/home-stack/types';

const StyledText = styled.Text`
  color: ${props => props.theme.Colors.loneHunter};
`;

export const Home = () => {
  const {navigate} = useNavigation<HomeStackNavigationProps>();

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <StyledText>Home Screen</StyledText>
          <TouchableOpacity
            onPress={() => {
              navigate('Character');
            }}>
            <StyledText>Go to Character screen</StyledText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
