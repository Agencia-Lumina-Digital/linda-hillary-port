import { Box, Typography } from '@mui/material';
import { tokens } from '../../../theme/tokens';

interface ProjectInfoCardProps {
  title: string;
  text: string;
}

export const ProjectInfoCard = ({ title, text }: ProjectInfoCardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        boxShadow: '0px 0px 5px rgba(15, 91, 82, 0.4)',
        p: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        flex: 1,
        minWidth: 0,
      }}
    >
      {/* Título (Número) */}
      <Typography
        sx={{
          fontFamily: tokens.typography.fontFamily.display,
          fontWeight: 600,
          fontSize: { xs: '16px', md: '18px' },
          color: 'rgba(15, 91, 82, 1)',
          lineHeight: 1.4,
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
        }}
      >
        {title}
      </Typography>

      {/* Texto */}
      <Typography
        sx={{
          fontFamily: tokens.typography.fontFamily.display,
          fontWeight: 400,
          fontSize: { xs: '14px', md: '16px' },
          color: 'rgba(74, 79, 78, 1)',
          lineHeight: 1.4,
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
