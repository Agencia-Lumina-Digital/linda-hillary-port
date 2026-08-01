import { Box, Stack, Typography, Button } from '@mui/material';
import { tokens } from '../../theme/tokens';

export interface ProjectCardProps {
  title: string;
  description: string;
  tag: string;
  metric: string; // Will keep metric prop in interface just in case, but won't use it in UI
  bannerBgColor: string;
  headerBgImage?: string;
  onClick?: () => void;
}

export const ProjectCard = ({ title, description, bannerBgColor, headerBgImage, onClick }: ProjectCardProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        backgroundColor: tokens.colors.background.elevated,
        borderRadius: `16px`,
        boxShadow: '0px 4px 24px rgba(112, 144, 176, 0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0px 12px 32px rgba(112, 144, 176, 0.15)',
        },
      }}
    >
      {/* Banner Superior com Cor Sólida Alternada ou Imagem de Fundo */}
      <Box
        sx={{
          height: { xs: '200px', md: '280px' },
          backgroundColor: bannerBgColor,
          backgroundImage: headerBgImage ? `url(${headerBgImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />

      {/* Conteúdo do Card */}
      <Stack
        spacing={{ xs: 2, md: 3 }}
        sx={{
          p: { xs: '24px 16px', md: '40px' },
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
          {/* Título do Projeto */}
          <Typography
            variant="h4"
            sx={{
              color: tokens.colors.text.brand,
              fontSize: { xs: '16px', md: '22px' },
              fontWeight: 600,
              lineHeight: 1.3,
            }}
          >
            {title}
          </Typography>

          {/* Descrição */}
          <Typography
            variant="body1"
            sx={{
              color: tokens.colors.text.secondary,
              fontSize: { xs: '14px', md: '18px' },
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>
        </Stack>

        {/* Botão Ver Projeto */}
        <Button
          variant="outlined"
          sx={{
            mt: 1,
            alignSelf: { xs: 'stretch', md: 'center' },
            borderRadius: '100px',
            borderColor: tokens.colors.text.accent,
            color: tokens.colors.text.accent,
            textTransform: 'none',
            fontSize: '14px',
            fontWeight: 500,
            py: '8px',
            px: '24px',
            '&:hover': {
              borderColor: tokens.colors.text.primary,
              color: tokens.colors.text.primary,
              backgroundColor: 'transparent',
            }
          }}
        >
          Ver projeto
        </Button>
      </Stack>
    </Box>
  );
};
