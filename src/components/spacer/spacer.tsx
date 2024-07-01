import React from 'react';
import styled from '@emotion/native';
import {SizesType} from '../../theme/spacers';

/**
 * Types
 */

interface SpacerProps {
  /** Sizes to separate components */
  size?: SizesType;
}

/**
 * Styled Components
 */

const StyledView = styled.View<{size: SizesType}>`
  height: ${({size, theme}) => theme.Spacers[size]};
`;

/**
 * Spacer Component
 */

export const Spacer = ({size = 'm'}: SpacerProps) => <StyledView size={size} />;
