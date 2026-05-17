import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { tokens } from '../../../theme/tokens';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'outlined' | 'ghost';
}

export const Button = ({ variant = 'primary', sx, children, ...props }: ButtonProps) => {
  let variantStyles = {};

  switch (variant) {
    case 'primary':
      variantStyles = {
        backgroundColor: tokens.colors.background.inverse,
        color: tokens.colors.text.onInverse,
        borderRadius: `${tokens.borderRadius.md}px`,
        px: '16px',
        py: '12px',
        '&:hover': {
          opacity: 0.9,
        }
      };
      break;
    case 'outlined':
      variantStyles = {
        border: '2px solid ' + tokens.colors.border.accent,
        color: tokens.colors.text.brand,
        borderRadius: `${tokens.borderRadius.lg}px`,
        fontSize: tokens.typography.fontSize[13],
        px: '16px',
        py: '12px',
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.04)',
        }
      };
      break;
    case 'ghost':
      variantStyles = {
        backgroundColor: 'transparent',
        color: tokens.colors.text.secondary,
        borderRadius: `${tokens.borderRadius.xl}px`,
        px: 3,
        py: 1,
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.04)',
        }
      };
      break;
  }

  return (
    <MuiButton
      disableElevation
      sx={{
        textTransform: 'none',
        fontWeight: tokens.typography.fontWeight.medium,
        fontSize: tokens.typography.fontSize[13],
        ...variantStyles,
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
