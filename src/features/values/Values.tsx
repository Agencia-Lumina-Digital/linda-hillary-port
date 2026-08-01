import { Box, Grid, Typography } from '@mui/material';
import { tokens } from '../../theme/tokens';

export const Values = () => {
  return (
    <Box 
      sx={{ 
        py: 6, 
        backgroundColor: tokens.colors.background.elevated,
        borderTop: `1px solid ${tokens.colors.border.default}`,
        borderBottom: `1px solid ${tokens.colors.border.default}`,
        mx: { xs: '-24px', md: 'calc(-50vw + 50%)' }, // Quebra o container para full-width
        px: { xs: '24px', md: 'calc(50vw - 50%)' }, // Restaura padding interno perfeitamente alinhado
        mt: { xs: 8, md: 0 } // Adicionando margin-top para descolar da section acima caso precise no mobile
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
  );
};
