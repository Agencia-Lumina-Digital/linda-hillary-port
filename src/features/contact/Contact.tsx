import { Box, Stack, Typography } from '@mui/material';
import { Button } from '../../components/atoms/Button/Button';
import { tokens } from '../../theme/tokens';
import grafismoHero from '../../theme/assets/grafismo-rios-hero.png';

export const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:linda.15brandao@gmail.com';
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/lindassouza/', '_blank');
  };

  return (
    <Box 
      sx={{ 
        py: { xs: 10, md: 14 },
        backgroundColor: tokens.colors.background.inverse, // Verde escuro (#2C3E35)
        mx: { xs: '-24px', md: 'calc(-50vw + 50%)' }, // Sangramento lateral total
        px: { xs: '24px', md: 'calc(50vw - 50%)' }, // Alinhamento interno com o site
        position: 'relative',
        overflow: 'hidden', // Importante para não quebrar a tela com os grafismos
      }}
    >
      {/* Círculo decorativo no canto inferior esquerdo - projeta-se mais para dentro em telas maiores */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '-150px', sm: '-220px', md: '-320px', lg: '-420px' },
          left: { xs: '-150px', sm: '-220px', md: '-320px', lg: '-420px' },
          width: { xs: '300px', sm: '500px', md: '750px', lg: '950px' },
          height: { xs: '300px', sm: '500px', md: '750px', lg: '950px' },
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.12)', // Círculo escuro sutil sobre o fundo verde
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Grafismo decorativo claro no lado direito */}
      <Box
        component="img"
        src={grafismoHero}
        alt=""
        sx={{
          position: 'absolute',
          top: '50%',
          right: { xs: '-30%', sm: '-20%', md: '-10%' },
          transform: 'translateY(-50%) scaleX(-1)', // Espelhado
          width: { xs: '100%', sm: '70%', md: '50%' },
          maxWidth: '600px',
          zIndex: 1,
          pointerEvents: 'none',
          filter: 'brightness(0) invert(1) opacity(0.08)', // Transforma as linhas em branco bem suave
        }}
      />

      {/* Conteúdo Central */}
      <Stack
        spacing={4}
        alignItems="center"
        sx={{
          position: 'relative',
          zIndex: 2, // Garante que fica por cima dos grafismos
          maxWidth: '640px',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow / Tagline */}
        <Typography
          sx={{
            color: tokens.colors.text.accent,
            fontWeight: tokens.typography.fontWeight.medium,
            fontSize: tokens.typography.fontSize[11],
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          — Vamos conversar —
        </Typography>

        {/* Título */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: tokens.typography.fontFamily.display,
            color: tokens.colors.text.onBrand,
            fontSize: { xs: tokens.typography.fontSize[38], md: tokens.typography.fontSize[48] },
            fontWeight: tokens.typography.fontWeight.light,
            lineHeight: 1.2,
          }}
        >
          Vamos construir algo que faça sentido?
        </Typography>

        {/* Descrição */}
        <Typography
          sx={{
            fontFamily: tokens.typography.fontFamily.body,
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: { xs: tokens.typography.fontSize[14], md: tokens.typography.fontSize[16] },
            lineHeight: 1.6,
            fontWeight: tokens.typography.fontWeight.regular,
            px: { xs: 2, md: 4 },
          }}
        >
          Se você tem um problema de produto para resolver, quero ouvir sobre ele. Sinta-se à vontade para entrar em contato ou apenas dar um oi.
        </Typography>

        {/* Botões de Ação */}
        <Stack 
          direction="row" 
          spacing={3} 
          sx={{ 
            mt: 2, 
            width: { xs: '100%', md: 'auto' }, 
            justifyContent: 'center' 
          }}
        >
          {/* Botão Enviar e-mail (Contorno claro) */}
          <Button
            variant="outlined"
            onClick={handleEmailClick}
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: '#FFFFFF',
              px: { xs: 3, md: 0 },
              py: '12px',
              width: { xs: '100%', md: '120px' },
              flex: { xs: 1, md: 'none' },
              '&:hover': {
                borderColor: '#FFFFFF',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            Enviar e-mail
          </Button>

          {/* Botão LinkedIn (Fundo verde marca) */}
          <Button
            variant="primary"
            onClick={handleLinkedinClick}
            sx={{
              backgroundColor: '#5C8C5A', // Verde semântico do design system
              color: '#FFFFFF',
              px: { xs: 3, md: 0 },
              py: '12px',
              width: { xs: '100%', md: '120px' },
              flex: { xs: 1, md: 'none' },
              '&:hover': {
                backgroundColor: '#3D5548',
              },
            }}
          >
            LinkedIn
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
