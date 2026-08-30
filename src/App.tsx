import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from './components/organisms/Navbar/Navbar';
import { Hero } from './features/hero/Hero';
import { Values } from './features/values/Values';
import { Projects } from './features/projects/Projects';
import { About } from './features/about/About';
import { Contact } from './features/contact/Contact';
import { Footer } from './components/organisms/Footer/Footer';
import { tokens } from './theme/tokens';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: tokens.colors.background.elevated, overflowX: 'hidden' }}>
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

        <Values />

        <Box id="projects">
          <Projects />
        </Box>

        <Box id="about">
          <About />
        </Box>

        <Box id="contact">
          <Contact />
        </Box>
      </Container>
      
      {/* Rodapé Full Width */}
      <Footer />
    </Box>
  )
}

export default App
