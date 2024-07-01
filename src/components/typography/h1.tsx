import styled from '@emotion/native';
import { TypographyProps } from './types';

/**
 * H1 Component
 */

export const H1 = styled.Text<TypographyProps>`
  text-align: ${({ textAlign = "left"}) => textAlign};
  text-transform: ${({ textTransform = "none"}) => textTransform};
  color: ${({theme, color = "nightBrown"}) => theme.Colors[color]};
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
`;
