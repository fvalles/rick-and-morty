import styled from '@emotion/native';
import { TypographyProps } from './types';

/**
 * H3 Component
 */

export const H3 = styled.Text<TypographyProps>`
  text-align: ${({ textAlign = "left"}) => textAlign};
  text-transform: ${({ textTransform = "none"}) => textTransform};
  color: ${({theme, color = "nightBrown"}) => theme.Colors[color]};
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`;
