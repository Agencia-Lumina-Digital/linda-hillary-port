import { Box, Grid, Typography } from '@mui/material';
import { tokens } from '../../theme/tokens';
import rect19 from '../../theme/assets/Rectangle 19.png';
import rect21 from '../../theme/assets/Rectangle 21.png';
import rect25 from '../../theme/assets/Rectangle 25.png';

export const Values = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 10 }, 
        backgroundColor: tokens.colors.background.brandSubtle, // Cor verde bem clara de fundo
        mx: { xs: '-24px', md: 'calc(-50vw + 50%)' }, // Quebra o container para full-width
        px: { xs: '24px', md: 'calc(50vw - 50%)' }, // Restaura padding interno perfeitamente alinhado
      }}
    >
      <Grid container columnSpacing={{ xs: 0, md: 6 }} rowSpacing={6}>
        {/* Feature 1 */}
        <Grid item xs={12} md={4} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
          <Box component="img" src={rect19} alt="Ícone Discovery" sx={{ width: '41px', height: '41px', flexShrink: 0 }} />
          <Box>
            <Typography variant="h4" sx={{ color: tokens.colors.text.brand, fontFamily: tokens.typography.fontFamily.display, mb: 1, fontSize: { xs: '16px', md: '24px' }, fontWeight: 600, lineHeight: 1.4 }}>
              Discovery e comportamento
            </Typography>
            <Typography variant="body1" sx={{ color: tokens.colors.text.secondary, fontFamily: tokens.typography.fontFamily.body, fontSize: { xs: '14px', md: '18px' }, fontWeight: 400, lineHeight: 1.6 }}>
              Uso ferramentas de analytics e pesquisas para mapear o contexto real antes de desenhar.
            </Typography>
          </Box>
        </Grid>
        
        {/* Feature 2 */}
        <Grid item xs={12} md={4} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
          <Box component="img" src={rect21} alt="Ícone Design Systems" sx={{ width: '41px', height: '41px', flexShrink: 0 }} />
          <Box>
            <Typography variant="h4" sx={{ color: tokens.colors.text.brand, fontFamily: tokens.typography.fontFamily.display, mb: 1, fontSize: { xs: '16px', md: '24px' }, fontWeight: 600, lineHeight: 1.4 }}>
              Design Systems escaláveis
            </Typography>
            <Typography variant="body1" sx={{ color: tokens.colors.text.secondary, fontFamily: tokens.typography.fontFamily.body, fontSize: { xs: '14px', md: '18px' }, fontWeight: 400, lineHeight: 1.6 }}>
              Lidero a criação de tokens e componentes reutilizáveis, hoje mentorando outras designers nesse processo.
            </Typography>
          </Box>
        </Grid>

        {/* Feature 3 */}
        <Grid item xs={12} md={4} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
          <Box component="img" src={rect25} alt="Ícone Acessibilidade" sx={{ width: '41px', height: '41px', flexShrink: 0 }} />
          <Box>
            <Typography variant="h4" sx={{ color: tokens.colors.text.brand, fontFamily: tokens.typography.fontFamily.display, mb: 1, fontSize: { xs: '16px', md: '24px' }, fontWeight: 600, lineHeight: 1.4 }}>
              Acessibilidade e refinamento
            </Typography>
            <Typography variant="body1" sx={{ color: tokens.colors.text.secondary, fontFamily: tokens.typography.fontFamily.body, fontSize: { xs: '14px', md: '18px' }, fontWeight: 400, lineHeight: 1.6 }}>
              Aplicação das diretrizes WCAG para criar produtos verdadeiramente inclusivos.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
