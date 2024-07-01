import {TextStyle} from 'react-native';
import {KeyColors} from '../../theme/colors';

export interface TypographyProps
  extends Pick<TextStyle, 'textAlign' | 'textTransform'> {
  color?: KeyColors;
}
