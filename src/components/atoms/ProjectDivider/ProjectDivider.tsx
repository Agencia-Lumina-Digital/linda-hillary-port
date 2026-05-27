import { Box } from '@mui/material';
import { tokens } from '../../../theme/tokens';

export const ProjectDivider = () => {
  return (
    <Box
      sx={{
        height: '0.5px',
        backgroundColor: tokens.colors.border.default,
        my: { xs: '16px', md: '32px' },
        width: '100%',
      }}
    />
  );
};
