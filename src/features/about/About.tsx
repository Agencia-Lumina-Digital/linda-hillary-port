import { Box, Grid, Stack, Typography, keyframes } from '@mui/material';
import { Button } from '../../components/atoms/Button/Button';
import { tokens } from '../../theme/tokens';
import 'hover.css/css/hover.css';

import aboutImagem from '../../theme/assets/about-imagem.png';
import heroVectorLaranja from '../../theme/assets/hero-vector-laranja.svg';
import heroVectorVerde from '../../theme/assets/hero-vector-verde.svg';
import heroUnionDiagonal from '../../theme/assets/hero-union-diagonal.svg';
import heroUnionHorizontal from '../../theme/assets/hero-union-horizontal.svg';

const floatUpDown = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-30px); }
  100% { transform: translateY(0px); }
`;

const floatDownUp = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(30px); }
  100% { transform: translateY(0px); }
`;

export const About = () => {
  return (
    <Box sx={{ position: 'relative', pt: { xs: 8, md: 16 }, pb: { xs: 8, md: 16 } }}>
      <Grid 
        id="about-anchor" 
        container 
        columnSpacing={{ xs: 0, md: 8 }} 
        rowSpacing={{ xs: '20px', md: '64px' }} 
        alignItems="center" 
        sx={{ position: 'relative', zIndex: 2, justifyContent: 'center' }}
      >
        {/* Coluna Esquerda: Imagem */}
        <Grid 
          item 
          xs={12} 
          md={5} 
          sx={{ position: 'relative', order: { xs: 1, md: 1 } }}
          data-aos="fade-right"
          data-aos-anchor="#about-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%', mx: 'auto' }}>
            
            <Box sx={{ position: 'relative', width: { xs: '261px', md: '360px' }, height: { xs: '350px', md: '480px' }, mt: { xs: 0, md: 0 } }}>
              
              {/* Elementos SVG decorativos */}
              <Box 
                component="img" 
                src={heroVectorLaranja} 
                alt="" 
                sx={{ 
                  position: 'absolute', 
                  top: { xs: -10, md: -10 }, 
                  right: { xs: -15, md: -20 }, 
                  zIndex: 3, 
                  width: { xs: '60px', md: '80px' },
                  animation: `${floatUpDown} 4s ease-in-out infinite`
                }} 
              />
              <Box 
                component="img" 
                src={heroVectorVerde} 
                alt="" 
                sx={{ 
                  position: 'absolute', 
                  bottom: { xs: 20, md: 30 }, 
                  left: { xs: -20, md: -30 }, 
                  zIndex: 3, 
                  width: { xs: '60px', md: '80px' },
                  animation: `${floatDownUp} 4s ease-in-out infinite`
                }} 
              />
              <Box component="img" src={heroUnionDiagonal} alt="" sx={{ position: 'absolute', top: 50, left: -20, zIndex: 3, width: { xs: '40px', md: '50px' } }} />
              <Box component="img" src={heroUnionHorizontal} alt="" sx={{ position: 'absolute', bottom: 50, right: { xs: -40, md: -50 }, zIndex: 3, width: { xs: '60px', md: '80px' } }} />

              {/* Imagem principal da seção About */}
              <Box
                component="img"
                src={aboutImagem}
                alt="Linda Hillary Brandão Souza"
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '999px 999px 0 0', // Borda arredondada no topo
                }}
              />
            </Box>

          </Box>
        </Grid>

        {/* Coluna Direita: Conteúdo de Texto */}
        <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 2 } }}>
          <Box 
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            data-aos="fade-up"
            data-aos-anchor="#about-anchor"
            data-aos-duration="1000"
          >
            {/* Título */}
            <Typography
              variant="h3"
              sx={{
                fontFamily: tokens.typography.fontFamily.display,
                fontSize: { xs: '24px', md: '36px' },
                fontWeight: 600,
                lineHeight: 1.4,
                color: 'rgba(15, 91, 82, 1)',
                mb: { xs: '24px', md: '56px' },
              }}
            >
              Designer de Produtos focada em experiências digitais inovadoras.
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
                mb: { xs: '32px', md: '56px' },
              }}
            >
              Sou Linda Hillary Brandão Souza, uma Product Designer apaixonada por criar experiências digitais impactantes. Com mais de 3 anos de experiência, tenho liderado a construção e a governança do Norte Design System na Bemol Digital. Minha abordagem é centrada em dados, utilizando IA (Claude) para otimizar processos e mentorando outros designers na equipe. Recentemente, fui reconhecida com o Prêmio Japiim de Prata por um projeto inovador que automatizou fluxos de trabalho, reduzindo o tempo de tarefas operacionais em até 95%. Estou sempre em busca de novas maneiras de integrar tecnologia e design para melhorar a acessibilidade e a usabilidade dos produtos.
            </Typography>

            {/* Ações */}
            <Stack direction="row" spacing="12px" sx={{ width: { xs: '100%', md: 'fit-content' } }}>
              <Button
                variant="primary"
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
                  backgroundColor: 'rgba(15, 91, 82, 1)',
                  color: '#FFFFFF',
                  borderRadius: '50px',
                  px: '24px',
                  py: { xs: '16px', md: '20px' },
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: tokens.typography.fontFamily.display,
                  textTransform: 'none',
                  lineHeight: 1.4,
                  '&:hover': {
                    backgroundColor: 'rgba(15, 91, 82, 1)',
                  }
                }}
              >
                Falar comigo
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  window.open('/Linda_Souza_Product_Designer.pdf', '_blank');
                }}
                className="hvr-grow"
                sx={{
                  flex: { xs: 1, md: 'initial' },
                  borderColor: 'rgba(15, 91, 82, 1)',
                  color: 'rgba(15, 91, 82, 1)',
                  borderRadius: '50px',
                  px: '24px',
                  py: { xs: '16px', md: '20px' },
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: tokens.typography.fontFamily.display,
                  textTransform: 'none',
                  borderWidth: '1px',
                  lineHeight: 1.4,
                  '&:hover': {
                    borderColor: 'rgba(15, 91, 82, 1)',
                    borderWidth: '1px',
                    backgroundColor: 'transparent',
                  }
                }}
              >
                Ver currículo
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
