/**
 * Design Tokens extraídos do Figma
 * Representam as variáveis primitivas e semânticas do design system.
 */

export const tokens = {
  colors: {
    // Primitivos
    neutral: {
      0: '#FFFFFF',
      50: '#F5F0E8',
      100: '#EDE8DF',
      200: '#C8C5BC',
      400: '#9DA39A',
      600: '#6B7068',
      900: '#2C3230',
      950: '#1A1F1C',
    },
    green: {
      50: '#EAF3E8',
      200: '#C2DCC0',
      400: '#8CBA89',
      600: '#5C8C5A',
      800: '#3D5548',
      900: '#2C3E35',
    },
    amber: {
      50: '#F8F2E2',
      100: '#ECDAAA',
      300: '#D4AD55',
      500: '#B58820',
      700: '#8B6914',
    },
    // Semânticos (Light Mode)
    background: {
      canvas: '#F5F0E8',
      surface: '#EDE8DF',
      elevated: '#FFFFFF',
      inverse: '#2C3E35',
      inverseSoft: '#3D5548',
      brand: '#5C8C5A',
      brandSubtle: '#EAF3E8',
      amberSubtle: '#F8F2E2',
    },
    text: {
      primary: '#1A1F1C',
      secondary: '#6B7068',
      brand: '#2C3E35',
      accent: '#5C8C5A',
      onInverse: '#F5F0E8',
      onBrand: '#FFFFFF',
      amber: '#8B6914',
    },
    border: {
      default: 'rgba(44, 62, 53, 0.12)', // green-900 12%
      medium: 'rgba(44, 62, 53, 0.25)', // green-900 25%
      strong: 'rgba(44, 62, 53, 0.40)', // green-900 40%
      accent: '#5C8C5A',
      inverse: 'rgba(245, 240, 232, 0.15)', // neutral-50 15%
    },
  },
  spacing: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    8: 32,
    10: 40,
    12: 48,
    16: 64,
    22: 88,
  },
  typography: {
    fontFamily: {
      display: '"Cormorant Garamond", serif',
      body: '"DM Sans", sans-serif',
      mono: '"JetBrains Mono", monospace',
    },
    fontSize: {
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      20: 20,
      24: 24,
      26: 26,
      38: 38,
      48: 48,
      56: 56,
      66: 66,
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
    },
    lineHeight: {
      none: 1,
      tight: 1.1,
      snug: 1.2,
      normal: 1.4,
      relaxed: 1.65,
      loose: 1.75,
      spacious: 1.8,
    },
  },
  borderRadius: {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 10,
    xl: 16,
    pill: 999,
  },
  breakpoints: {
    mobileSm: 375,
    mobileLg: 430,
    tablet: 768,
    tabletLg: 1024,
    desktop: 1280,
    desktopXl: 1440,
  },
  layout: {
    maxWidth: 1080,
  }
};
