import styled from '@emotion/native';
import {KeyColors} from '../../theme/colors';
import {Paragraph} from '../typography';

/**
 * Types
 */

interface PillProps {
  backgroundColor: KeyColors;
  text: string;
  textColor: KeyColors;
}

interface ContainerProps extends Omit<PillProps, 'text'> {}

/**
 * Styled Components
 */

const Container = styled.View<ContainerProps>`
  background-color: ${({backgroundColor, theme}) =>
    theme.Colors[backgroundColor]};
  border-radius: 15px;
  color: ${({textColor, theme}) => theme.Colors[textColor]};
  padding: 5px;
  width: 120px;
`;

/**
 * Pill Component
 */

export const Pill = ({backgroundColor, text, textColor}: PillProps) => (
  <Container backgroundColor={backgroundColor} textColor={textColor}>
    <Paragraph textAlign="center">{text}</Paragraph>
  </Container>
);
