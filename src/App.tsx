import { Box, Container, Typography } from '@mui/material';
import { Navbar } from './components/organisms/Navbar/Navbar';
import { tokens } from './theme/tokens';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: tokens.colors.background.canvas }}>
      <Navbar />
      
      {/* Container Principal que limita a largura do conteúdo */}
      <Container 
        maxWidth={false} 
        sx={{ 
          maxWidth: tokens.layout.maxWidth,
          pt: 16, // 16 * 4px = 64px
        }}
      >
        {/* Seções Esqueléticas para Scroll */}
        <Box id="hero" sx={{ height: '80vh', borderBottom: '1px dashed' }}>
          <Typography variant="h1" sx={{ lineHeight: '1.3 !important' }}>Hero Section</Typography>
        </Box>

        <Box id="projects" sx={{ height: '100vh', borderBottom: '1px dashed' }}>
          <Typography variant="h2">Projetos</Typography>
        </Box>

        <Box id="about" sx={{ height: '100vh', borderBottom: '1px dashed' }}>
          <Typography variant="h2">Sobre</Typography>
        </Box>

        <Box id="resume" sx={{ height: '100vh', borderBottom: '1px dashed' }}>
          <Typography variant="h2">Currículo</Typography>
        </Box>

        <Box id="contact" sx={{ height: '80vh' }}>
          <Typography variant="h2">Contato</Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default App
