import { Box, Typography } from '@mui/material';
import { tokens } from '../../../theme/tokens';

interface TagProps {
  label: string;
}

export const Tag = ({ label }: TagProps) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: tokens.colors.background.brand,
        borderRadius: '100px',
        px: '14px',
        py: '6px',
        userSelect: 'none',
      }}
    >
      <Typography
        sx={{
          color: tokens.colors.text.onBrand,
          fontFamily: tokens.typography.fontFamily.body,
          fontSize: '11px', // Fixo conforme instrução do usuário para ambos os formatos de tela
          fontWeight: tokens.typography.fontWeight.medium,
          lineHeight: 1.2,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};
