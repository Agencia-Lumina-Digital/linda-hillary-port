import { Dialog, Box, Stack, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '../../components/atoms/Button/Button';
import { tokens } from '../../theme/tokens';
import { LoginBemolContent } from './content/LoginBemolContent';

interface Project {
  title: string;
  description: string;
  tag: string;
  metric: string;
  bannerBgColor: string;
}

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: Project | null;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  onContactClick: () => void;
}

const renderProjectContent = (title: string) => {
  switch (title) {
    case 'Redesign do Login — App Bemol':
      return <LoginBemolContent />;
    default:
      return null;
  }
};

export const ProjectModal = ({
  open,
  onClose,
  project,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  onContactClick,
}: ProjectModalProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="body"
      PaperProps={{
        sx: {
          borderRadius: `${tokens.borderRadius.lg}px`,
          backgroundColor: tokens.colors.background.canvas,
          overflow: 'hidden',
          margin: { xs: '16px', md: '32px' },
        },
      }}
    >
      {/* 1. Topo do Modal (Espaço para imagem futura, atualmente fundo verde) */}
      <Box
        sx={{
          height: { xs: '160px', md: '220px' },
          backgroundColor: '#5C8C5A', // Verde semântico do tema
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-end', // Alinha o botão de fechar à direita
          p: '24px',
        }}
      >
        {/* Botão de Fechar Modal da Direita */}
        <IconButton
          onClick={onClose}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            },
            p: '8px',
          }}
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      {/* 2. Corpo do Modal (Exibe o título e o conteúdo dinâmico do projeto) */}
      <Box
        sx={{
          p: { xs: '32px 24px', md: '56px 40px' },
          minHeight: '200px',
        }}
      >
        {renderProjectContent(project.title) || (
          <Typography
            variant="h2"
            sx={{
              fontFamily: tokens.typography.fontFamily.display,
              color: tokens.colors.text.brand,
              fontSize: { xs: tokens.typography.fontSize[26], md: tokens.typography.fontSize[38] },
              fontWeight: tokens.typography.fontWeight.medium,
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </Typography>
        )}
      </Box>

      {/* 3. Rodapé do Modal (Ações de Navegação e Contato) */}
      <Box
        sx={{
          p: '20px 24px',
          borderTop: `1px solid rgba(44, 62, 53, 0.08)`,
          backgroundColor: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Lado Esquerdo: Projeto Anterior */}
        <Box sx={{ width: { xs: '80px', sm: '150px' }, display: 'flex', justifyContent: 'flex-start' }}>
          {hasPrev && (
            <Button
              variant="ghost"
              onClick={onPrev}
              sx={{
                fontSize: tokens.typography.fontSize[12],
                px: { xs: 0.5, sm: 1.5 },
                py: 1,
              }}
            >
              {isMobile ? 'Anterior' : '← Projeto anterior'}
            </Button>
          )}
        </Box>

        {/* Centro: Entrar em contato */}
        <Button
          variant="primary"
          onClick={onContactClick}
          sx={{
            fontSize: tokens.typography.fontSize[13],
            px: { xs: 1.5, sm: 3 },
            py: '10px',
            backgroundColor: tokens.colors.background.inverse,
            color: '#FFFFFF',
            width: { xs: 'auto', sm: '150px' }, // Flexível no mobile, 150px no desktop
            flexGrow: { xs: 1, sm: 0 },
            '&:hover': {
              backgroundColor: tokens.colors.background.inverseSoft,
            },
          }}
        >
          {isMobile ? 'Contato' : 'Entrar em contato'}
        </Button>

        {/* Lado Direito: Próximo Projeto */}
        <Box sx={{ width: { xs: '80px', sm: '150px' }, display: 'flex', justifyContent: 'flex-end' }}>
          {hasNext && (
            <Button
              variant="ghost"
              onClick={onNext}
              sx={{
                fontSize: tokens.typography.fontSize[12],
                px: { xs: 0.5, sm: 1.5 },
                py: 1,
              }}
            >
              {isMobile ? 'Próximo' : 'Próximo projeto →'}
            </Button>
          )}
        </Box>
      </Box>
    </Dialog>
  );
};
