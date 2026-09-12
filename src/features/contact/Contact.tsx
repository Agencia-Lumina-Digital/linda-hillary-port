import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
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
        py: { xs: 10, md: 14 },
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
      <Stack
        spacing={{ xs: '24px', md: '56px' }}
        alignItems="center"
        sx={{
          position: 'relative',
          zIndex: 2, // Garante que fica por cima dos grafismos
          maxWidth: '800px',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Stack spacing={{ xs: '24px', md: '16px' }} alignItems="center">
          {/* Título */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: tokens.typography.fontFamily.display,
              color: tokens.colors.text.primary,
              fontSize: { xs: '24px', md: '48px' }, // 48 no desktop
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            Vamos construir algo que faça sentido?
          </Typography>

          {/* Descrição */}
          <Typography
            sx={{
              fontFamily: tokens.typography.fontFamily.display,
              color: tokens.colors.text.secondary, // rgba(103, 113, 108, 1) mapeado para secondary
              fontSize: { xs: '16px', md: '18px' }, // 18 no desktop
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: '800px',
            }}
          >
            Se você tem um problema de produto para resolver, quero ouvir sobre ele. Sinta-se à vontade para entrar em contato ou apenas dar um oi.
          </Typography>
        </Stack>

        {/* Formulário */}
        <Box 
          component="form" 
          onSubmit={handleSubmit}
          sx={{ 
            width: '100%', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px',
            mt: '32px'
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
              padding: '16px 24px',
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
              padding: '16px 24px',
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
              padding: '16px 24px',
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
              opacity: isSubmitting ? 0.7 : 1,
              '&:hover': {
                backgroundColor: 'rgba(15, 91, 82, 1)',
                transform: 'scale(1.05)',
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
      </Stack>
    </Box>
  );
};
