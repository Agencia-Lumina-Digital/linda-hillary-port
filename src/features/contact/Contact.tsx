import { Box, Stack, Typography } from '@mui/material';
import { Button } from '../../components/atoms/Button/Button';
import { tokens } from '../../theme/tokens';
import heroBg from '../../theme/assets/Hero Section Bg.png';

export const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:linda.15brandao@gmail.com';
  };

  return (
    <Box 
      sx={{ 
        py: { xs: 10, md: 14 },
        backgroundColor: tokens.colors.background.surface, // Fundo claro (#EDE8DF)
        mx: { xs: '-24px', md: 'calc(-50vw + 50%)' }, // Sangramento lateral total
        px: { xs: '24px', md: 'calc(50vw - 50%)' }, // Alinhamento interno com o site
        position: 'relative',
        overflow: 'hidden', // Importante para não quebrar a tela com os grafismos
      }}
    >
      {/* Imagem de Fundo (Hero Section Bg) */}
      <Box
        component="img"
        src={heroBg}
        alt=""
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0,
          pointerEvents: 'none',
          display: 'block',
        }}
      />

      {/* Conteúdo Central */}
      <Stack
        spacing={{ xs: '24px', md: '56px' }}
        alignItems="center"
        sx={{
          position: 'relative',
          zIndex: 2, // Garante que fica por cima dos grafismos
          maxWidth: '800px',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Stack spacing={{ xs: '24px', md: '16px' }} alignItems="center">
          {/* Título */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: tokens.typography.fontFamily.display,
              color: tokens.colors.text.primary,
              fontSize: { xs: '24px', md: '48px' }, // 48 no desktop
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            Vamos construir algo que faça sentido?
          </Typography>

          {/* Descrição */}
          <Typography
            sx={{
              fontFamily: tokens.typography.fontFamily.display,
              color: tokens.colors.text.secondary, // rgba(103, 113, 108, 1) mapeado para secondary
              fontSize: { xs: '16px', md: '18px' }, // 18 no desktop
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: '800px',
            }}
          >
            Se você tem um problema de produto para resolver, quero ouvir sobre ele. Sinta-se à vontade para entrar em contato ou apenas dar um oi.
          </Typography>
        </Stack>

        {/* Botão */}
        <Button
          variant="primary"
          onClick={handleEmailClick}
          sx={{
            width: { xs: '100%', md: '250px' },
            height: '56px',
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          Entrar em contato
        </Button>
      </Stack>
    </Box>
  );
};
