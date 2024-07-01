import '@emotion/react';
import {ColorsType} from './src/theme/colors';
import {SpacersType} from './src/theme/spacers';

declare module '@emotion/react' {
  export interface Theme {
    Colors: ColorsType;
    Spacers: SpacersType;
  }
}
