import { createTheme } from '@mui/material/styles';
import { tokens } from './tokens';

const theme = createTheme({
  palette: {
    primary: {
      main: tokens.colors.background.brand,
      light: tokens.colors.background.brandSubtle,
      contrastText: tokens.colors.text.onBrand,
    },
    background: {
      default: tokens.colors.background.canvas,
      paper: tokens.colors.background.surface,
    },
    text: {
      primary: tokens.colors.text.primary,
      secondary: tokens.colors.text.secondary,
    },
    divider: tokens.colors.border.default,
  },
  typography: {
    fontFamily: tokens.typography.fontFamily.body,
    h1: {
      fontFamily: tokens.typography.fontFamily.display,
      fontWeight: tokens.typography.fontWeight.semibold,
      fontSize: tokens.typography.fontSize[66],
      lineHeight: tokens.typography.lineHeight.tight,
    },
    h2: {
      fontFamily: tokens.typography.fontFamily.display,
      fontWeight: tokens.typography.fontWeight.semibold,
      fontSize: tokens.typography.fontSize[56],
      lineHeight: tokens.typography.lineHeight.tight,
    },
    body1: {
      fontFamily: tokens.typography.fontFamily.body,
      fontWeight: tokens.typography.fontWeight.regular,
      fontSize: tokens.typography.fontSize[16],
      lineHeight: tokens.typography.lineHeight.normal,
    },
    button: {
      textTransform: 'none',
      fontWeight: tokens.typography.fontWeight.medium,
    },
  },
  shape: {
    borderRadius: tokens.borderRadius.md,
  },
  spacing: 4, // Unidade base de 4px conforme o figma (space/1)
  breakpoints: {
    values: {
      xs: 0,
      sm: tokens.breakpoints.tablet,
      md: tokens.breakpoints.tabletLg,
      lg: tokens.breakpoints.desktop,
      xl: tokens.breakpoints.desktopXl,
    },
  },
});

export default theme;
