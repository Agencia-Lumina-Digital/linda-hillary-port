import { useState } from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { tokens } from '../../../theme/tokens';
import logo from '../../../theme/assets/logo-linda-claro.png';

const navItems = [
  { label: 'Início', id: 'hero' },
  { label: 'Projetos', id: 'projects' },
  { label: 'Sobre', id: 'about' },
  { label: 'Currículo', id: 'resume' },
];

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState('hero');

  const handleScroll = (id: string) => {
    setActiveItem(id);
    
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <AppBar 
      position="fixed" 
      color="transparent" 
      elevation={0} 
      sx={{ 
        backgroundColor: tokens.colors.background.canvas,
        zIndex: 1
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: tokens.layout.maxWidth }}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <img 
              src={logo} 
              alt="Linda Hillary Logo" 
              style={{ height: '40px', width: 'auto' }} 
            />
          </Box>

          {/* Centro: Nav Items */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navItems.map((item) => {
              const isActive = activeItem === item.id;
              
              return (
                <Button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  sx={{ 
                    color: isActive ? tokens.colors.text.amber : tokens.colors.text.secondary,
                    backgroundColor: isActive ? tokens.colors.background.elevated : 'transparent',
                    
                    // Estrutura
                    borderRadius: `${tokens.borderRadius.xl}px`,
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    fontWeight: tokens.typography.fontWeight.medium,
                    fontSize: tokens.typography.fontSize[16],
                    
                    '&:hover': {
                      backgroundColor: isActive 
                        ? tokens.colors.background.elevated 
                        : 'rgba(0,0,0,0.04)',
                    }
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Lado Direito: Botão Default */}
          <Box sx={{ flexShrink: 0 }}>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => handleScroll('contact')}
              sx={{
                background: tokens.colors.background.inverse,
                color: tokens.colors.text.onInverse,
                fontSize: tokens.typography.fontSize[16],
              }}
            >
              Contato
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
