import styled from '@emotion/native';
import { TypographyProps } from './types';

/**
 * H2 Component
 */

export const H2 = styled.Text<TypographyProps>`
  text-align: ${({ textAlign = "left"}) => textAlign};
  text-transform: ${({ textTransform = "none"}) => textTransform};
  color: ${({theme, color = "nightBrown"}) => theme.Colors[color]};
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
`;
