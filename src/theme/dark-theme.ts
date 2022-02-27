import { Theme, ThemeNames } from './types';

const DarkTheme: Theme = {
  name: ThemeNames.DARK,
  colors: {
    backgroundColor: '#1E2127',
    borderLine: '#343740',
    text: '#D1D4D9',
    link: {
      text: '#1f5aff',
      textHover: '#0036cc'
    }
  }
}

export default DarkTheme;