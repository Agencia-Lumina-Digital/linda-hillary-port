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
        backgroundColor: 'rgba(209, 224, 221, 1)',
        borderRadius: '100px',
        px: '12px',
        py: '8px',
        userSelect: 'none',
      }}
    >
      <Typography
        sx={{
          color: 'rgba(24, 27, 26, 1)',
          fontFamily: tokens.typography.fontFamily.display,
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: 1.4,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};
