import { Box, Grid, Stack, Typography } from '@mui/material';
import { tokens } from '../../theme/tokens';
import rect19 from '../../theme/assets/Rectangle 19.png';
import rect21 from '../../theme/assets/Rectangle 21.png';
import rect25 from '../../theme/assets/Rectangle 25.png';

export const Values = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 8 }, 
        backgroundColor: 'rgba(7, 44, 37, 1)', // Fundo verde escuro
        mx: { xs: '-24px', md: 'calc(-50vw + 50%)' }, 
        px: { xs: '24px', md: 'calc(50vw - 50%)' }, 
      }}
    >
      <Grid container columnSpacing="40px" rowSpacing="40px">
        {/* Card 1 */}
        <Grid 
          item 
          xs={12} 
          md={4}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Box 
            sx={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: '8px', 
              p: '16px', 
              height: '100%' 
            }}
          >
            <Stack spacing="24px">
              <Box component="img" src={rect19} alt="Ícone" sx={{ width: '32px', height: '32px' }} />
              <Stack spacing="16px">
                <Typography variant="h6" sx={{ color: 'rgba(15, 91, 82, 1)', fontFamily: tokens.typography.fontFamily.display, fontSize: '18px', fontWeight: 600, lineHeight: 1.4 }}>
                  Análise estratégica
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(74, 79, 78, 1)', fontFamily: tokens.typography.fontFamily.display, fontSize: '16px', fontWeight: 400, lineHeight: 1.4 }}>
                  Interpreto dados para orientar decisões e otimizar experiências.
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        
        {/* Card 2 */}
        <Grid 
          item 
          xs={12} 
          md={4}
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="200" // Um pequeno atraso para dar efeito cascata
        >
          <Box 
            sx={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: '8px', 
              p: '16px', 
              height: '100%' 
            }}
          >
            <Stack spacing="24px">
              <Box component="img" src={rect21} alt="Ícone" sx={{ width: '32px', height: '32px' }} />
              <Stack spacing="16px">
                <Typography variant="h6" sx={{ color: 'rgba(15, 91, 82, 1)', fontFamily: tokens.typography.fontFamily.display, fontSize: '18px', fontWeight: 600, lineHeight: 1.4 }}>
                  Componentes modulares
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(74, 79, 78, 1)', fontFamily: tokens.typography.fontFamily.display, fontSize: '16px', fontWeight: 400, lineHeight: 1.4 }}>
                  Desenvolvo sistemas flexíveis que garantem consistência e agilidade.
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Grid>

        {/* Card 3 */}
        <Grid 
          item 
          xs={12} 
          md={4}
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="400"
        >
          <Box 
            sx={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: '8px', 
              p: '16px', 
              height: '100%' 
            }}
          >
            <Stack spacing="24px">
              <Box component="img" src={rect25} alt="Ícone" sx={{ width: '32px', height: '32px' }} />
              <Stack spacing="16px">
                <Typography variant="h6" sx={{ color: 'rgba(15, 91, 82, 1)', fontFamily: tokens.typography.fontFamily.display, fontSize: '18px', fontWeight: 600, lineHeight: 1.4 }}>
                  Design inclusivo
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(74, 79, 78, 1)', fontFamily: tokens.typography.fontFamily.display, fontSize: '16px', fontWeight: 400, lineHeight: 1.4 }}>
                  Garantindo acesso e usabilidade para todos os perfis.
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
