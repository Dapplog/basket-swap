import { css } from 'styled-components';
import Breakpoints from './theme/breakpoints/breakpoints';
import Styles from './styles/styles';
import Theme from './theme/theme';
import Zindex from './theme/zindex/zindex';
import Colors from './colors/colors';

export const media = Object.keys(Breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${Breakpoints[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const value = 'Test 123 Design';

export const styles = Styles;
export const theme = Theme;
export const zindex = Zindex;
export const colors = Colors;
