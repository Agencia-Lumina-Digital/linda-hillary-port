import { Box, Stack, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { tokens } from '../../../theme/tokens';
import logoEscuro from '../../../theme/assets/logo-linda-escuro.png';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: tokens.colors.background.inverse, // Fundo verde escuro
        px: { xs: '16px', md: '64px' },
        py: { xs: '20px', md: '18px' },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      {/* Esquerda: Logo + Copyright */}
      <Stack direction="row" alignItems="center" spacing="20px">
        <Box
          component="img"
          src={logoEscuro}
          alt="Linda Souza Logo"
          sx={{
            height: '24px',
            width: 'auto',
            objectFit: 'contain',
          }}
        />
        <Typography
          sx={{
            fontFamily: tokens.typography.fontFamily.display, // Epilogue
            fontSize: '16px',
            fontWeight: 600, // SemiBold
            color: 'rgba(245, 240, 232, 0.5)', // text/on-inverse-muted
            lineHeight: 1, // Fix para alinhamento vertical
          }}
        >
          © 2025 Linda Souza · UI Design
        </Typography>
      </Stack>

      {/* Direita: Redes Sociais */}
      <Stack direction="row" alignItems="center" spacing="16px">
        <IconButton
          component="a"
          href="https://www.instagram.com/lindassouza?igsh=djdyenBiNXV6Zjc1"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#FFFFFF', // icon/on-inverse
            p: 0, // Remover padding padrão do IconButton
            '&:hover': {
              color: tokens.colors.text.accent,
            },
          }}
        >
          <InstagramIcon sx={{ fontSize: 24 }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/lindassouza/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#FFFFFF', // icon/on-inverse
            p: 0,
            '&:hover': {
              color: tokens.colors.text.accent,
            },
          }}
        >
          <LinkedInIcon sx={{ fontSize: 24 }} />
        </IconButton>
      </Stack>
    </Box>
  );
};
