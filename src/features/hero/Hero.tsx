import { Box, Grid, Stack, Typography } from '@mui/material';
import { Button } from '../../components/atoms/Button/Button';
import { tokens } from '../../theme/tokens';
import 'hover.css/css/hover.css';

import heroImagem from '../../theme/assets/hero-imagem.png';
import heroVectorLaranja from '../../theme/assets/hero-vector-laranja.svg';
import heroVectorVerde from '../../theme/assets/hero-vector-verde.svg';
import heroUnionDiagonal from '../../theme/assets/hero-union-diagonal.svg';
import heroUnionHorizontal from '../../theme/assets/hero-union-horizontal.svg';
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
    <Box sx={{ position: 'relative', pt: { xs: 12, md: 20 }, pb: { xs: 12, md: 20 } }}>
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
      <Grid id="example-anchor" container columnSpacing={{ xs: 0, md: 8 }} rowSpacing={{ xs: 4, md: 8 }} alignItems="center" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Coluna Esquerda: Conteúdo */}
        <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 1 }, height: { xs: 'auto', md: '440px' } }}>
          <Stack 
            spacing={{ xs: '32px', md: '48px' }} 
            sx={{ display: 'flex', justifyContent: 'center', height: { xs: 'auto', md: '440px' } }}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Box>
              {/* Título */}
              <Typography
                variant="h1"
                sx={{
                  fontFamily: tokens.typography.fontFamily.display,
                  fontSize: { xs: '36px', md: '64px' },
                  fontWeight: 600,
                  lineHeight: { xs: 1.4, md: 1.2 },
                  color: 'rgba(15, 91, 82, 1)',
                  whiteSpace: 'pre-line',
                  mb: { xs: '24px', md: '32px' }, // Espaçamento entre Título e Parágrafo
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
                  fontSize: { xs: '16px', md: '18px' },
                  fontWeight: 400,
                  lineHeight: { xs: 1.4, md: 1.6 },
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
        <Grid 
          item 
          xs={12} 
          md={5} 
          sx={{ position: 'relative', order: { xs: 1, md: 2 } }}
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%', mx: 'auto' }}>
            
            <Box sx={{ position: 'relative', width: { xs: '261px', md: '360px' }, height: { xs: '350px', md: '480px' }, mt: { xs: 4, md: 0 } }}>
              
              {/* Elementos SVG decorativos */}
              <Box component="img" src={heroVectorLaranja} alt="" sx={{ position: 'absolute', top: { xs: -10, md: -10 }, right: { xs: -15, md: -20 }, zIndex: 3, width: { xs: '60px', md: '80px' } }} />
              <Box component="img" src={heroVectorVerde} alt="" sx={{ position: 'absolute', bottom: { xs: 20, md: 30 }, left: { xs: -20, md: -30 }, zIndex: 3, width: { xs: '60px', md: '80px' } }} />
              <Box component="img" src={heroUnionDiagonal} alt="" sx={{ position: 'absolute', top: 50, left: -20, zIndex: 3, width: { xs: '40px', md: '50px' } }} />
              <Box component="img" src={heroUnionHorizontal} alt="" sx={{ position: 'absolute', bottom: 50, right: { xs: -40, md: -50 }, zIndex: 3, width: { xs: '60px', md: '80px' } }} />

              {/* Imagem da Profissional (com shape em arco) */}
              <Box
                component="img"
                src={heroImagem}
                alt="Linda Souza"
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '999px 999px 0 0', // Borda arredondada no topo
                  transform: 'scaleX(-1)', // Corrige a imagem que estava invertida
                }}
              />
            </Box>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
