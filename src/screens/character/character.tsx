import {Dimensions, SafeAreaView} from 'react-native';
import styled from '@emotion/native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackParamList} from '../../stacks/home-stack/types';
import {useFetchCharacter} from './queries/use-fetch-character';
import {H1, H3} from '../../components/typography';
import {Spacer} from '../../components/spacer';
import {Pill} from '../../components/pill';
import {Icon} from 'react-native-eva-icons';
import {Colors} from '../../theme';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {useEffect} from 'react';

/**
 * Styled Components
 */

const StyledImage = styled.Image`
  border-radius: 150px;
  height: 250px;
  width: 250px;
`;

const ImageContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InfoContainer = styled.View`
  padding: 0px 40px;
`;

const Row = styled.View<{justifyContent?: string}>`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: ${({justifyContent = 'center'}) => justifyContent};
`;

const PillContainer = styled.View`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const IconContainer = styled.View`
  margin-left: 5px;
`;

export const StyledScrollView = styled.ScrollView`
  height: 100%;
`;

/**
 * Character Screen
 */

export const Character = () => {
  const {
    params: {id},
  } = useRoute<RouteProp<HomeStackParamList, 'Character'>>();
  const {isPending, isError, data, error, isSuccess} = useFetchCharacter(id);
  const width = useSharedValue(60);
  const windowWidth = Dimensions.get('window').width;

  if (isPending) {
    <H3>Loading animation lootie</H3>;
  }

  if (isError) {
    <H3>Empty State component with refetch button - {error.message}</H3>;
  }

  useEffect(() => {
    width.value = withSpring(windowWidth);
  }, [id]);

  return isSuccess ? (
    <SafeAreaView>
      <StyledScrollView>
        <Animated.View style={{width}}>
          <Spacer size="m" />
          <H1 textAlign="center">{data.name}</H1>
          <Spacer size="m" />
          <ImageContainer>
            <StyledImage
              source={{
                uri: data.image,
              }}
            />
          </ImageContainer>
          <InfoContainer>
            <Spacer size="l" />
            <Row justifyContent="space-between">
              <PillContainer>
                <H3>Species</H3>
                <Spacer size="xs" />
                <Pill
                  text={data.species}
                  backgroundColor="goldenSnitch"
                  textColor="nightBrown"
                />
              </PillContainer>
              <Spacer size="m" />
              <PillContainer>
                <H3>Status</H3>
                <Spacer size="xs" />
                <Pill
                  text={data.status}
                  backgroundColor="sultanOfPink"
                  textColor="nightBrown"
                />
              </PillContainer>
            </Row>
            <Spacer size="l" />
            <Row justifyContent="space-between">
              <PillContainer>
                <Row>
                  <H3>Origin</H3>
                  <IconContainer>
                    <Icon
                      name="globe-2-outline"
                      width={25}
                      height={25}
                      fill={Colors.nightBrown}
                    />
                  </IconContainer>
                </Row>
                <Spacer size="xs" />
                <Pill
                  text={data.origin.name}
                  backgroundColor="almostApricot"
                  textColor="nightBrown"
                />
              </PillContainer>
              <PillContainer>
                <Row>
                  <H3>Location</H3>
                  <IconContainer>
                    <Icon
                      name="pin-outline"
                      width={25}
                      height={25}
                      fill={Colors.nightBrown}
                    />
                  </IconContainer>
                </Row>
                <Spacer size="xs" />
                <Pill
                  text={data.location.name}
                  backgroundColor="loneHunter"
                  textColor="nightBrown"
                />
              </PillContainer>
            </Row>
          </InfoContainer>
        </Animated.View>
      </StyledScrollView>
    </SafeAreaView>
  ) : null;
};
