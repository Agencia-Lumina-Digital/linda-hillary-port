import { Box, Stack, Typography } from '@mui/material';
import { tokens } from '../../theme/tokens';

export const Projects = () => {
  return (
    <Box 
      sx={{ 
        pt: { xs: '40px', md: '88px' },
        pb: { xs: 8, md: 12 },
        backgroundColor: tokens.colors.background.elevated,
        mx: { xs: '-24px', md: 'calc(-50vw + 50%)' }, // Quebra o container para full-width
        px: { xs: '24px', md: 'calc(50vw - 50%)' } // Restaura padding interno perfeitamente alinhado
      }}
    >
      <Stack spacing={{ xs: '8px', md: '10px' }}>
        {/* Tagline / Eyebrow */}
        <Typography
          sx={{
            color: tokens.colors.text.accent,
            fontWeight: tokens.typography.fontWeight.medium,
            fontSize: { xs: tokens.typography.fontSize[11], md: tokens.typography.fontSize[14] },
            letterSpacing: '0.05em',
          }}
        >
          — Trabalhos selecionados
        </Typography>

        {/* Título da Seção */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: tokens.typography.fontFamily.display,
            color: tokens.colors.text.brand,
            fontSize: { xs: tokens.typography.fontSize[26], md: tokens.typography.fontSize[38] },
            fontWeight: tokens.typography.fontWeight.medium,
            lineHeight: 1.2
          }}
        >
          Projetos
        </Typography>

        {/* Descrição */}
        <Typography
          variant="body1"
          sx={{
            color: tokens.colors.text.secondary,
            fontSize: { xs: tokens.typography.fontSize[14], md: tokens.typography.fontSize[16] },
            maxWidth: '560px',
            lineHeight: 1.6
          }}
        >
          Problemas reais, processos honestos e resultados que você pode medir.
        </Typography>
      </Stack>
    </Box>
  );
};
