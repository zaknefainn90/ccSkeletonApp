import { ThemeProps } from 'styled-components';

export interface Theme {
  mainBG: string;
}

export interface DefaultTheme extends ThemeProps<Theme> {}
