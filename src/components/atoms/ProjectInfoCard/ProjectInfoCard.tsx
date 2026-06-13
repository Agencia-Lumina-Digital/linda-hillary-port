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
        borderRadius: `${tokens.borderRadius.xl}px`,
        border: `1px solid ${tokens.colors.border.default}`,
        p: { xs: '8px 12px', md: '20px 24px' },
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minWidth: 0,
      }}
    >
      {/* Título: Peso 300, Itálico, Tamanho 20px (mobile) / 24px (desktop), Cor brand */}
      <Typography
        sx={{
          fontFamily: tokens.typography.fontFamily.display,
          fontWeight: tokens.typography.fontWeight.light, // 300
          fontStyle: 'italic',
          fontSize: { xs: '20px', md: '24px' },
          color: tokens.colors.text.brand,
          lineHeight: 1.1,
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
        }}
      >
        {title}
      </Typography>

      {/* Texto: Peso medium (500), Tamanho 11px, Cor secondary, Espaçamento de 6px do título */}
      <Typography
        sx={{
          fontFamily: tokens.typography.fontFamily.body,
          fontWeight: tokens.typography.fontWeight.medium, // 500
          fontSize: '11px',
          color: tokens.colors.text.secondary,
          mt: '6px',
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
