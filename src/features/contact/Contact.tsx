import { useState } from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';
import { Button } from '../../components/atoms/Button/Button';
import { tokens } from '../../theme/tokens';
import { useContactForm } from '../../hooks/useContactForm';
import heroBg from '../../theme/assets/Hero Section Bg.png';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // Substitua pelas suas chaves!
  const SERVICE_ID = 'service_ow6w40l';
  const TEMPLATE_ID = 'template_w2nvdfc';
  const PUBLIC_KEY = '3MhvIdpo2l7bI5KHI';
  
  const { submitForm, isSubmitting, isSuccess, error } = useContactForm(
    SERVICE_ID,
    TEMPLATE_ID,
    PUBLIC_KEY
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
    if (!error) {
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <Box 
      sx={{ 
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 10 },
        backgroundColor: tokens.colors.background.surface, // Fundo claro (#EDE8DF)
        mx: { xs: '-24px', md: 'calc(-50vw + 50%)' }, // Sangramento lateral total
        px: { xs: '24px', md: 'calc(50vw - 50%)' }, // Alinhamento interno com o site
        position: 'relative',
        overflow: 'hidden', // Importante para não quebrar a tela com os grafismos
      }}
    >
      {/* Imagem de Fundo (Hero Section Bg) */}
      <Box
        component="img"
        src={heroBg}
        alt=""
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0,
          pointerEvents: 'none',
          display: 'block',
        }}
      />

      {/* Conteúdo Central */}
      <Grid
        id="contact-anchor"
        container
        spacing={{ xs: 5, md: 4 }}
        justifyContent="space-between"
        sx={{
          position: 'relative',
          zIndex: 2,
          maxWidth: tokens.layout.maxWidth,
          mx: 'auto',
        }}
      >
        {/* Coluna Esquerda: Textos e Ícones */}
        <Grid 
          item 
          xs={12} 
          md={6}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Box sx={{ maxWidth: '650px' }}>
            {/* Título */}
            <Typography
              variant="h3"
              sx={{
                fontFamily: tokens.typography.fontFamily.display,
                color: 'rgba(24, 27, 26, 1)',
                fontSize: { xs: '24px', md: '36px' },
                fontWeight: 600,
                lineHeight: 1.4,
                mb: { xs: '16px', md: '24px' }
              }}
            >
              Vamos criar algo incrível que realmente faça a diferença?
            </Typography>

            {/* Descrição */}
            <Typography
              sx={{
                fontFamily: tokens.typography.fontFamily.display,
                color: 'rgba(74, 79, 78, 1)',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.4,
                mb: { xs: '24px', md: '42px' }
              }}
            >
              Se você tem um desafio de design que precisa de solução, estou aqui para ouvir. Não hesite em me contatar ou apenas para trocar uma ideia.
            </Typography>

            {/* Ícones */}
            <Stack direction="row" spacing="24px">
              <Box 
                component="a"
                href="https://instagram.com/lindassouza"
                target="_blank"
                sx={{
                  color: 'rgba(15, 91, 82, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.1)' }
                }}
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Box>
              <Box 
                component="a"
                href="https://www.linkedin.com/in/lindassouza/"
                target="_blank"
                sx={{
                  color: 'rgba(15, 91, 82, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.1)' }
                }}
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Box>
            </Stack>
          </Box>
        </Grid>

        {/* Coluna Direita: Formulário */}
        <Grid 
          item 
          xs={12} 
          md={5}
          data-aos="fade-left"
          data-aos-anchor="#contact-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{ 
              width: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: { xs: '8px', md: '16px' },
            }}
          >
            <Box
              component="input"
              required
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              sx={{
                width: '100%',
                backgroundColor: '#F3F5F5',
                border: 'none',
                borderRadius: '8px',
                padding: { xs: '16px', md: '16px 24px' },
                fontFamily: tokens.typography.fontFamily.display,
                fontSize: '16px',
                outline: 'none',
                '&::placeholder': {
                  color: 'rgba(74, 79, 78, 1)',
                }
              }}
            />
            <Box
              component="input"
              required
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              sx={{
                width: '100%',
                backgroundColor: '#F3F5F5',
                border: 'none',
                borderRadius: '8px',
                padding: { xs: '16px', md: '16px 24px' },
                fontFamily: tokens.typography.fontFamily.display,
                fontSize: '16px',
                outline: 'none',
                '&::placeholder': {
                  color: 'rgba(74, 79, 78, 1)',
                }
              }}
            />
            <Box
              component="textarea"
              required
              name="message"
              placeholder="Mensagem"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              sx={{
                width: '100%',
                backgroundColor: '#F3F5F5',
                border: 'none',
                borderRadius: '8px',
                padding: { xs: '16px', md: '16px 24px' },
                fontFamily: tokens.typography.fontFamily.display,
                fontSize: '16px',
                outline: 'none',
                resize: 'none',
                '&::placeholder': {
                  color: 'rgba(74, 79, 78, 1)',
                }
              }}
            />

            
            <Button
              type="submit"
              disabled={isSubmitting}
              sx={{
                alignSelf: { xs: 'center', md: 'flex-start' },
                backgroundColor: 'rgba(15, 91, 82, 1)',
                color: '#FFFFFF',
                borderRadius: '50px',
                px: '32px',
                py: '16px',
                fontSize: '16px',
                fontWeight: 600,
                fontFamily: tokens.typography.fontFamily.display,
                textTransform: 'none',
                mt: '8px',
                transition: 'transform 0.2s',
                '&:hover': {
                  backgroundColor: 'rgba(15, 91, 82, 1)',
                  transform: 'scale(1.05)',
                },
                '&.Mui-disabled': {
                  backgroundColor: 'rgba(15, 91, 82, 1)',
                  color: '#FFFFFF',
                  opacity: 0.7,
                }
              }}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
            </Button>

            {isSuccess && (
              <Typography sx={{ color: 'green', mt: 2, fontFamily: tokens.typography.fontFamily.display }}>
                Mensagem enviada com sucesso!
              </Typography>
            )}
            {error && (
              <Typography sx={{ color: 'red', mt: 2, fontFamily: tokens.typography.fontFamily.display }}>
                {error}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
