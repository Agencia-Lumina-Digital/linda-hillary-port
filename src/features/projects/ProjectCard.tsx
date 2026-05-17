import { Box, Stack, Typography } from '@mui/material';
import { tokens } from '../../theme/tokens';

export interface ProjectCardProps {
  title: string;
  description: string;
  tag: string;
  metric: string;
  bannerBgColor: string;
}

export const ProjectCard = ({ title, description, tag, metric, bannerBgColor }: ProjectCardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: tokens.colors.background.canvas,
        borderRadius: `${tokens.borderRadius.md}px`,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(44, 62, 53, 0.06)',
        },
      }}
    >
      {/* Banner Superior com Cor Sólida Alternada */}
      <Box
        sx={{
          height: { xs: '180px', md: '200px' },
          backgroundColor: bannerBgColor,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Tag / Badge no canto superior esquerdo */}
        <Box
          sx={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            backgroundColor: tokens.colors.background.elevated,
            borderRadius: '100px',
            px: '12px',
            py: '6px',
          }}
        >
          <Typography
            sx={{
              color: tokens.colors.text.primary,
              fontSize: tokens.typography.fontSize[10],
              fontWeight: tokens.typography.fontWeight.semibold,
              lineHeight: 1,
              letterSpacing: '0.02em',
            }}
          >
            {tag}
          </Typography>
        </Box>
      </Box>

      {/* Conteúdo do Card */}
      <Stack
        spacing={2}
        sx={{
          p: '24px',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Stack spacing={1.5}>
          {/* Título do Projeto */}
          <Typography
            variant="h3"
            sx={{
              color: tokens.colors.text.brand,
              fontSize: tokens.typography.fontSize[15],
              fontWeight: tokens.typography.fontWeight.semibold,
              lineHeight: 1.3,
              // Garante altura mínima para alinhamento uniforme em desktop
              minHeight: { md: '42px' },
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {title}
          </Typography>

          {/* Descrição */}
          <Typography
            variant="body2"
            sx={{
              color: tokens.colors.text.secondary,
              fontSize: tokens.typography.fontSize[12],
              lineHeight: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: { md: '54px' },
            }}
          >
            {description}
          </Typography>
        </Stack>

        {/* Rodapé do Card */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pt: '16px',
            borderTop: `1px solid rgba(44, 62, 53, 0.06)`,
            mt: 'auto',
          }}
        >
          {/* Métrica de Sucesso */}
          <Typography
            sx={{
              color: tokens.colors.text.accent,
              fontSize: tokens.typography.fontSize[11],
              fontWeight: tokens.typography.fontWeight.medium,
            }}
          >
            {metric}
          </Typography>

          {/* Botão Ver Caso (Apenas visual com animação sutil no hover) */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              color: tokens.colors.text.secondary,
              transition: 'color 0.2s ease',
              '&:hover': {
                color: tokens.colors.text.primary,
                '& .arrow': {
                  transform: 'translateX(4px)',
                },
              },
            }}
          >
            <Typography
              sx={{
                fontSize: tokens.typography.fontSize[11],
                fontWeight: tokens.typography.fontWeight.medium,
              }}
            >
              Ver caso
            </Typography>
            <Typography
              className="arrow"
              sx={{
                fontSize: tokens.typography.fontSize[11],
                fontWeight: tokens.typography.fontWeight.medium,
                transition: 'transform 0.2s ease',
              }}
            >
              →
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
