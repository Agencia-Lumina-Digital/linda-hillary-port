import { Box, Grid, Typography } from '@mui/material';
import { tokens } from '../../theme/tokens';
import grafismoHero from '../../theme/assets/grafismo-rios-hero.png';
import lindaImage from '../../theme/assets/linda-image.png';

export const Hero = () => {
  return (
    <Box sx={{ position: 'relative', pt: 10, pb: 10 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Coluna Esquerda: Conteúdo (Esqueleto por enquanto) */}
        <Grid item xs={12} md={7}>
          <Box sx={{ border: '1px dashed', borderColor: tokens.colors.border.medium, p: 4, height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h4" color="text.secondary">
              [Área de Conteúdo]
            </Typography>
          </Box>
        </Grid>

        {/* Coluna Direita: Visual / Apresentação */}
        <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
          <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
            
            {/* Grafismo de fundo (Posicionamento absoluto para ficar atrás) */}
            <Box
              component="img"
              src={grafismoHero}
              alt=""
              sx={{
                position: 'absolute',
                top: '63%',
                left: '50%',
                transform: 'translate(-40%, -50%)', // Ajuste para centralizar visualmente
                width: '150%', // Grafismo vaza para fora do container da imagem
                maxWidth: 'none',
                zIndex: 2,
                pointerEvents: 'none'
              }}
            />

            {/* Imagem da Profissional */}
            <Box sx={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '420px' }}>
              <Box
                component="img"
                src={lindaImage}
                alt="Linda Souza"
                sx={{
                  width: '100%',
                  height: 'auto',
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
