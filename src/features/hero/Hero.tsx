import { Box, Grid, Stack, Typography } from '@mui/material';
import { Button } from '../../components/atoms/Button/Button';
import { tokens } from '../../theme/tokens';
import 'hover.css/css/hover.css';

import lindaImage from '../../theme/assets/linda-image.png';
import heroBg from '../../theme/assets/Hero Section Bg.png';

export const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box sx={{ position: 'relative', pt: { xs: 4, md: 6 }, pb: { xs: 8, md: 12 } }}>
      {/* Imagem de Fundo (Hero Section Bg) - Exibida no Desktop e Mobile */}
      <Box
        component="img"
        src={heroBg}
        alt=""
        sx={{
          position: 'absolute',
          top: 0,
          left: { xs: '-24px', md: 'calc(-50vw + 50%)' },
          width: { xs: 'calc(100% + 48px)', md: '100vw' },
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'left top',
          zIndex: 0,
          pointerEvents: 'none',
          display: 'block',
        }}
      />
      <Grid container columnSpacing={{ xs: 0, md: 8 }} rowSpacing={{ xs: 4, md: 8 }} alignItems="center" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Coluna Esquerda: Conteúdo */}
        <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 1 }, height: { xs: 'auto', md: '440px' } }}>
          <Stack spacing="48px" sx={{ display: 'flex', justifyContent: 'center', height: { xs: 'auto', md: '440px' } }}>
            <Box>
              {/* Título */}
              <Typography
                variant="h1"
                sx={{
                  fontFamily: tokens.typography.fontFamily.display,
                  fontSize: { xs: '38px', md: '64px' },
                  fontWeight: 600,
                  lineHeight: 1.2,
                  color: 'rgba(15, 91, 82, 1)',
                  whiteSpace: 'pre-line',
                  mb: '32px', // Espaçamento entre Título e Parágrafo
                }}
              >
                Olá, eu sou a{'\n'}Linda Souza.
              </Typography>

              {/* Descrição */}
              <Typography
                variant="body1"
                sx={{
                  fontFamily: tokens.typography.fontFamily.display,
                  color: 'rgba(74, 79, 78, 1)',
                  fontSize: { xs: '15px', md: '18px' },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  maxWidth: '995px'
                }}
              >
                Meu objetivo é transformar desafios em soluções criativas. Trabalho em colaboração com equipes multidisciplinares para desenvolver interfaces que não apenas encantam, mas também geram resultados significativos.
              </Typography>
            </Box>

            {/* Ações */}
            <Stack direction="row" spacing="12px" sx={{ width: { xs: '100%', md: 'fit-content' } }}>
              <Button
                variant="primary"
                onClick={handleScrollToProjects}
                className="hvr-grow"
                sx={{
                  flex: { xs: 1, md: 'initial' },
                  backgroundColor: 'rgba(15, 91, 82, 1)',
                  color: '#FFFFFF',
                  borderRadius: '50px',
                  px: '24px',
                  height: '52px',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: tokens.typography.fontFamily.display,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(15, 91, 82, 1)',
                  }
                }}
              >
                Ver projetos
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const offset = 80;
                    window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
                  }
                }}
                className="hvr-grow"
                sx={{
                  flex: { xs: 1, md: 'initial' },
                  borderColor: 'rgba(15, 91, 82, 1)',
                  color: 'rgba(15, 91, 82, 1)',
                  borderRadius: '50px',
                  px: '24px',
                  height: '52px',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: tokens.typography.fontFamily.display,
                  textTransform: 'none',
                  borderWidth: '1px',
                  '&:hover': {
                    borderColor: 'rgba(15, 91, 82, 1)',
                    borderWidth: '1px',
                    backgroundColor: 'transparent',
                  }
                }}
              >
                Falar comigo
              </Button>
            </Stack>
          </Stack>
        </Grid>

        {/* Coluna Direita: Visual / Apresentação */}
        <Grid item xs={12} md={5} sx={{ position: 'relative', order: { xs: 1, md: 2 } }}>
          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', width: { xs: '100%', md: '440px' }, mx: 'auto' }}>


            {/* Imagem da Profissional */}
            <Box sx={{ position: 'relative', zIndex: 2, width: { xs: '100%', md: '400px' }, maxWidth: '420px' }}>
              <Box
                component="img"
                src={lindaImage}
                alt="Linda Souza"
                sx={{
                  width: '100%',
                  height: { xs: 'auto', md: '440px' },
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: `${tokens.borderRadius.md}px`,
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
