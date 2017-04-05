import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Generated';
const colors = {
  black: '#111111',
  white: '#FFFFFF',
  blue: '#5555FF',
  red: '#FF5555',
  green: '#55FF55',
  yellow: '#FFFF33'
}

const colorSet: IColorSet = {
  base: {
    background: colors.black,
    foreground: colors.white,
    color1: colors.blue,
    color2: colors.red,
    color3: colors.green,
    color4: colors.yellow
  }
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
