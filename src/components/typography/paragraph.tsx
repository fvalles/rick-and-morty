import styled from '@emotion/native';
import {TypographyProps} from './types';

/**
 * Paragraph Component
 */

export const Paragraph = styled.Text<TypographyProps>`
  text-align: ${({textAlign = 'left'}) => textAlign};
  text-transform: ${({textTransform = 'none'}) => textTransform};
  color: ${({theme, color = 'nightBrown'}) => theme.Colors[color]};
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;
