import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { tokens } from '../../theme/tokens';
import grafismoHero from '../../theme/assets/grafismo-rios-hero.png';
import lindaImage from '../../theme/assets/linda-image.png';

export const Hero = () => {
  return (
    <Box sx={{ position: 'relative', pt: 10, pb: 10 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Coluna Esquerda: Conteúdo */}
        <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 1 } }}>
          <Stack spacing={5} sx={{ display: 'flex', justifyContent: 'center', height: '100%', py: 4 }}>
            {/* Tagline / Eyebrow */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: 24, height: 1, backgroundColor: tokens.colors.background.brand }} />
              <Typography
                sx={{
                  color: tokens.colors.text.accent,
                  fontWeight: tokens.typography.fontWeight.semibold,
                  fontSize: { xs: tokens.typography.fontSize[11], md: tokens.typography.fontSize[14] }
                }}
              >
                Product Designer · Manaus, Brasil
              </Typography>
            </Box>

            {/* Título */}
            <Typography variant="h1" sx={{ fontSize: { md: tokens.typography.fontSize[48] }, color: tokens.colors.text.brand, whiteSpace: 'pre-line' }}>
              Olá, sou{'\n'}Linda Souza.
            </Typography>

            {/* Descrição */}
            <Typography variant="body1" sx={{ color: tokens.colors.text.secondary, fontSize: { xs: tokens.typography.fontSize[16], md: tokens.typography.fontSize[14] }, maxWidth: '500px' }}>
              Começo pelo problema real. Trabalho de perto com times de produto, negócio e tecnologia — e entrego interfaces que as pessoas usam com naturalidade, e que geram resultados mensuráveis.
            </Typography>

            {/* Ações */}
            <Stack direction="row" spacing={3} sx={{ width: { xs: '100%', md: 'fit-content' } }}>
              <Button
                variant="outlined"
                sx={{
                  flex: { xs: 1, md: 'initial' },
                  border: '2px solid' + tokens.colors.border.accent,
                  color: tokens.colors.text.brand,
                  borderRadius: `${tokens.borderRadius.lg}px`,
                  fontSize: tokens.typography.fontSize[13],
                  px: '16px',
                  py: '12px'
                }}
              >
                Ver currículo
              </Button>
              <Button
                variant="contained"
                sx={{
                  flex: { xs: 1, md: 'initial' },
                  backgroundColor: tokens.colors.background.inverse,
                  color: tokens.colors.text.onInverse,
                  borderRadius: `${tokens.borderRadius.md}px`,
                  px: '16px',
                  py: '12px'
                }}
              >
                Ver projetos
              </Button>
            </Stack>

            {/* Métricas */}
            <Box sx={{ display: 'flex', gap: 6, pt: 3, borderTop: '.5px solid ' + tokens.colors.border.default, width: 'fit-content' }}>
              <Box>
                <Typography variant="h4" sx={{ color: tokens.colors.text.brand, fontFamily: tokens.typography.fontFamily.display, fontSize: tokens.typography.fontSize[26] }}>
                  3+
                </Typography>
                <Typography sx={{ color: tokens.colors.text.secondary, fontSize: tokens.typography.fontSize[13] }}>
                  Anos de exp.
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ color: tokens.colors.text.brand, fontFamily: tokens.typography.fontFamily.display, fontSize: tokens.typography.fontSize[26] }}>
                  4+
                </Typography>
                <Typography sx={{ color: tokens.colors.text.secondary, fontSize: tokens.typography.fontSize[13] }}>
                  Produtos lançados
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ color: tokens.colors.text.brand, fontFamily: tokens.typography.fontFamily.display, fontSize: tokens.typography.fontSize[26] }}>
                  12+
                </Typography>
                <Typography sx={{ color: tokens.colors.text.secondary, fontSize: tokens.typography.fontSize[13] }}>
                  Projetos entregues
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>

        {/* Coluna Direita: Visual / Apresentação */}
        <Grid item xs={12} md={5} sx={{ position: 'relative', order: { xs: 1, md: 2 } }}>
          <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>

            {/* Grafismo de fundo (Posicionamento absoluto para ficar atrás) */}
            <Box
              component="img"
              src={grafismoHero}
              alt=""
              sx={{
                position: 'absolute',
                top: '68%',
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
