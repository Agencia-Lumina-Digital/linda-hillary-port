import { Box, Grid, Stack, Typography } from '@mui/material';
import { Button } from '../../components/atoms/Button/Button';
import { tokens } from '../../theme/tokens';
import grafismoHero from '../../theme/assets/grafismo-rios-hero.png';
import lindaImage from '../../theme/assets/linda-image.png';

export const Hero = () => {
  return (
    <Box sx={{ position: 'relative', pt: 10, pb: 10 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Coluna Esquerda: Conteúdo */}
        <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 1 }, height: { xs: 'auto', md: '440px' } }}>
          <Stack spacing={5} sx={{ display: 'flex', justifyContent: 'center', height: { xs: 'auto', md: '440px' } }}>
            {/* Tagline / Eyebrow */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: 24, height: '1.5px', backgroundColor: tokens.colors.background.brand }} />
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
                }}
              >
                Ver currículo
              </Button>
              <Button
                variant="primary"
                sx={{
                  flex: { xs: 1, md: 'initial' },
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
          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', width: { xs: '100%', md: '440px' }, mx: 'auto' }}>

            {/* Grafismo de fundo (Posicionamento absoluto para ficar atrás) */}
            <Box
              component="img"
              src={grafismoHero}
              alt=""
              sx={{
                position: 'absolute',
                top: '74%',
                left: '50%',
                transform: 'translate(-40%, -50%)', // Ajuste para centralizar visualmente
                width: '150%', // Grafismo vaza para fora do container da imagem
                maxWidth: 'none',
                zIndex: 2,
                pointerEvents: 'none'
              }}
            />

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

      {/* Características / Valores (Bottom Section) */}
      <Box 
        sx={{ 
          mt: { xs: 8, md: '88px' }, 
          py: 6, 
          backgroundColor: tokens.colors.background.elevated,
          borderTop: `1px solid ${tokens.colors.border.default}`,
          borderBottom: `1px solid ${tokens.colors.border.default}`,
          mx: { xs: '-24px', md: 'calc(-50vw + 50%)' }, // Quebra o container para full-width
          px: { xs: '24px', md: 'calc(50vw - 50%)' }, // Restaura padding interno perfeitamente alinhado
        }}
      >
        <Grid container columnSpacing={4} rowSpacing={{ xs: 4, md: 2 }}>
          {/* Feature 1 */}
          <Grid item xs={4}>
            <Typography variant="h4" sx={{ color: tokens.colors.text.accent, fontFamily: tokens.typography.fontFamily.display, mb: 1, fontSize: tokens.typography.fontSize[26] }}>01</Typography>
            <Typography variant="h6" sx={{ color: tokens.colors.text.brand, fontWeight: tokens.typography.fontWeight.semibold, mb: 1, fontSize: tokens.typography.fontSize[15] }}>Problema antes de solução</Typography>
            <Typography variant="body2" sx={{ color: tokens.colors.text.secondary, fontSize: tokens.typography.fontSize[12] }}>Não abro o Figma sem entender o contexto.</Typography>
          </Grid>
          
          {/* Feature 2 */}
          <Grid item xs={4}>
            <Typography variant="h4" sx={{ color: tokens.colors.text.accent, fontFamily: tokens.typography.fontFamily.display, mb: 1, fontSize: tokens.typography.fontSize[26] }}>02</Typography>
            <Typography variant="h6" sx={{ color: tokens.colors.text.brand, fontWeight: tokens.typography.fontWeight.semibold, mb: 1, fontSize: tokens.typography.fontSize[15] }}>Design é conversa</Typography>
            <Typography variant="body2" sx={{ color: tokens.colors.text.secondary, fontSize: tokens.typography.fontSize[12] }}>Trabalho junto com produto e engenharia.</Typography>
          </Grid>

          {/* Feature 3 */}
          <Grid item xs={4}>
            <Typography variant="h4" sx={{ color: tokens.colors.text.accent, fontFamily: tokens.typography.fontFamily.display, mb: 1, fontSize: tokens.typography.fontSize[26] }}>03</Typography>
            <Typography variant="h6" sx={{ color: tokens.colors.text.brand, fontWeight: tokens.typography.fontWeight.semibold, mb: 1, fontSize: tokens.typography.fontSize[15] }}>Entrego, meço, melhoro</Typography>
            <Typography variant="body2" sx={{ color: tokens.colors.text.secondary, fontSize: tokens.typography.fontSize[12] }}>Lançamento não é o fim.</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
