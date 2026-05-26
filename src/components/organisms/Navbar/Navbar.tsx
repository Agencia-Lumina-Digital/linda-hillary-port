import { useState, useEffect } from 'react';
import { AppBar, Box, Container, Toolbar, Typography, IconButton, Drawer, Stack } from '@mui/material';
import { Button } from '../../atoms/Button/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ['hero', 'projects', 'about', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Ativado quando a seção cruza a área de foco central
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleScroll = (id: string) => {
    setMobileOpen(false); // Fecha o menu mobile se estiver aberto

    if (id === 'resume') {
      window.open('/curriculo.pdf', '_blank');
      return;
    }

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
        zIndex: 10
      }}
    >
      <Container 
        maxWidth={false} 
        disableGutters 
        sx={{ 
          maxWidth: tokens.layout.maxWidth,
          px: '24px' // Padding horizontal fixo para alinhar com o App
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="Linda Hillary Logo"
              style={{ height: '40px', width: 'auto' }}
            />
          </Box>

          {/* Centro: Nav Items (Desktop) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => {
              const isActive = activeItem === item.id;

              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleScroll(item.id)}
                  sx={{
                    color: isActive ? tokens.colors.text.amber : tokens.colors.text.secondary,
                    backgroundColor: isActive ? tokens.colors.background.elevated : 'transparent',
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

          {/* Lado Direito: Botão Default (Desktop) */}
          <Box sx={{ flexShrink: 0, display: { xs: 'none', md: 'block' } }}>
            <Button
              variant="primary"
              onClick={() => handleScroll('contact')}
            >
              Contato
            </Button>
          </Box>

          {/* Menu Mobile (Hamburger) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ color: tokens.colors.text.primary }}
            >
              <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Melhora a performance no mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: '100%', // Tela cheia para um visual moderno e premium
            backgroundColor: tokens.colors.background.canvas,
            px: 4,
            py: 4
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 8 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: tokens.colors.text.primary }}>
            <CloseIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>

        <Stack spacing={4} alignItems="center">
          {navItems.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleScroll(item.id)}
                sx={{
                  color: isActive ? tokens.colors.text.amber : tokens.colors.text.primary,
                  fontSize: tokens.typography.fontSize[26], // Fonte grande para impacto
                  fontFamily: tokens.typography.fontFamily.display,
                }}
              >
                {item.label}
              </Button>
            );
          })}

          <Button
            variant="ghost"
            onClick={() => handleScroll('contact')}
            sx={{
              color: activeItem === 'contact' ? tokens.colors.text.amber : tokens.colors.text.primary,
              fontSize: tokens.typography.fontSize[26],
              fontFamily: tokens.typography.fontFamily.display,
            }}
          >
            Contato
          </Button>
        </Stack>
      </Drawer>
    </AppBar>
  );
};
