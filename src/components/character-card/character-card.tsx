import {TouchableOpacity} from 'react-native';
import {H3} from '../../components/typography';
import styled from '@emotion/native';
import {Spacer} from '../spacer';
import {CharacterDto} from '../../screens/home/types';

/**
 * Constants
 */

const IMAGE_DIMENSIONES = 150;

/**
 * Types
 */

interface CharacterCardProps
  extends Pick<CharacterDto, 'id' | 'image' | 'name'> {
  onPress?: () => void;
}

/**
 * Styled Components
 */

const Card = styled.View`
  align-items: center;
  background-color: ${props => props.theme.Colors.loneHunter};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 210px;
  width: 150px;
`;

const StyledImage = styled.Image`
  border-radius: 10px 10px 0 0;
`;

const TextContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 44px;
`;

/**
 * CharacterCard Component
 */

export const CharacterCard = ({
  id,
  image,
  name,
  onPress,
}: CharacterCardProps) => {
  return (
    <TouchableOpacity key={id} onPress={onPress}>
      <Card>
        <StyledImage
          height={IMAGE_DIMENSIONES}
          width={IMAGE_DIMENSIONES}
          source={{
            uri: image,
          }}
        />
        <Spacer size="xs" />
        <TextContainer>
          <H3 textAlign="center" numberOfLines={2}>
            {name}
          </H3>
        </TextContainer>
      </Card>
    </TouchableOpacity>
  );
};
