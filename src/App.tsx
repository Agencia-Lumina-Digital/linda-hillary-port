import { Box, Container, Typography } from '@mui/material';
import { Navbar } from './components/organisms/Navbar/Navbar';
import { Hero } from './features/hero/Hero';
import { Projects } from './features/projects/Projects';
import { tokens } from './theme/tokens';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: tokens.colors.background.canvas, overflowX: 'hidden' }}>
      <Navbar />
      
      {/* Container Principal que limita a largura do conteúdo */}
      <Container 
        maxWidth={false} 
        disableGutters
        sx={{ 
          maxWidth: tokens.layout.maxWidth,
          pt: 16, // 16 * 4px = 64px
          px: '24px' // Padding horizontal fixo de 24px
        }}
      >
        {/* Seções Esqueléticas para Scroll */}
        <Box id="hero">
          <Hero />
        </Box>

        <Box id="projects">
          <Projects />
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
