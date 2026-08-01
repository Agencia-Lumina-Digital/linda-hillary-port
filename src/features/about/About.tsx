import { Box, Stack, Typography } from '@mui/material';
import { tokens } from '../../theme/tokens';

export const About = () => {
  return (
    <Box
      sx={{
        mx: { xs: '-24px', md: 'calc(-50vw + 50%)' }, // Rompe o container pai
        px: { xs: '24px', md: 'calc(50vw - 50%)' },
        mt: { xs: '48px', md: '80px' },
        py: { xs: '64px', md: '88px' }, // Espaçamento generoso
        backgroundColor: tokens.colors.background.inverse, // Fundo escuro (verde)
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Stack
        spacing={{ xs: '24px', md: '56px' }}
        alignItems="center"
        sx={{
          maxWidth: '800px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* Título e Texto */}
        <Stack spacing={{ xs: '20px', md: '16px' }} alignItems="center">
          <Typography
            variant="h3"
            sx={{
              fontFamily: tokens.typography.fontFamily.display,
              fontSize: { xs: '24px', md: '36px' },
              fontWeight: 600,
              color: tokens.colors.text.onBrand,
            }}
          >
            Sobre mim
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: tokens.typography.fontFamily.display, // Epilogue shown in Figma
              fontSize: { xs: '18px', md: '18px' },
              fontWeight: 400,
              lineHeight: 1.6,
              color: tokens.colors.text.onBrand,
            }}
          >
            Product Designer com mais de 2 anos liderando a evolução do Design System da Bemol Digital. Atuo com uma abordagem orientada a dados e, mais recentemente, uso IA (Claude) para automatizar processos do time, com um projeto premiado internamente (Prêmio Japiim de Prata).
          </Typography>
        </Stack>

        {/* Grid de Métricas */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row', // No mobile continua em linha
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
            gap: { xs: '16px', sm: '24px' },
          }}
        >
          {/* Métrica 1 */}
          <Stack spacing={1} alignItems="center" sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: { xs: tokens.typography.fontFamily.display, md: "'Montserrat', sans-serif" },
                fontSize: { xs: '36px', md: '64px' },
                fontWeight: { xs: 600, md: 700 },
                color: 'rgba(140, 186, 137, 1)', // green/300 do figma
                lineHeight: 1,
              }}
            >
              3+
            </Typography>
            <Typography
              sx={{
                fontFamily: tokens.typography.fontFamily.display, // Epilogue shown in Figma
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 400,
                color: tokens.colors.text.onBrand,
              }}
            >
              Anos de experiência
            </Typography>
          </Stack>

          {/* Métrica 2 */}
          <Stack spacing={1} alignItems="center" sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: { xs: tokens.typography.fontFamily.display, md: "'Montserrat', sans-serif" },
                fontSize: { xs: '36px', md: '64px' },
                fontWeight: { xs: 600, md: 700 },
                color: 'rgba(140, 186, 137, 1)', // green/300
                lineHeight: 1,
              }}
            >
              8+
            </Typography>
            <Typography
              sx={{
                fontFamily: tokens.typography.fontFamily.display,
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 400,
                color: tokens.colors.text.onBrand,
              }}
            >
              Funcionalidades entregues
            </Typography>
          </Stack>

          {/* Métrica 3 */}
          <Stack spacing={1} alignItems="center" sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: { xs: tokens.typography.fontFamily.display, md: "'Montserrat', sans-serif" },
                fontSize: { xs: '36px', md: '64px' },
                fontWeight: { xs: 600, md: 700 },
                color: 'rgba(140, 186, 137, 1)', // green/300
                lineHeight: 1,
              }}
            >
              4
            </Typography>
            <Typography
              sx={{
                fontFamily: tokens.typography.fontFamily.display,
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 400,
                color: tokens.colors.text.onBrand,
              }}
            >
              Projetos entregues
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
