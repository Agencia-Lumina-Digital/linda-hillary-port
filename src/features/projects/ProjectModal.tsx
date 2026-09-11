import { Dialog, Box, Stack, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '../../components/atoms/Button/Button';
import { tokens } from '../../theme/tokens';
import { LoginBemolContent } from './content/LoginBemolContent';
import { DesignSystemBemolContent } from './content/DesignSystemBemolContent';
import { SaudeBemolContent } from './content/SaudeBemolContent';
import { BemolRunContent } from './content/BemolRunContent';
import { CheckoutBemolContent } from './content/CheckoutBemolContent';

interface Project {
  title: string;
  description: string;
  tag: string;
  metric: string;
  bannerBgColor: string;
  headerBgImage?: string;
  modalBgImage?: string;
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
    case 'Quebra de Pacotes – Checkout Bemol':
      return <CheckoutBemolContent />;
    case 'Redesign do Login — App Bemol':
      return <LoginBemolContent />;
    case 'Fundamentos do Norte Design System — Bemol Varejo':
      return <DesignSystemBemolContent />;
    case 'Bemol Saúde — Agendamento de Exames':
      return <SaudeBemolContent />;
    case 'Bemol Run — Redesign do Fluxo de Inscrição':
      return <BemolRunContent />;
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
          height: { xs: '250px', md: '300px' },
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-end', // Alinha apenas o botão de fechar à direita
          p: { xs: '16px', md: '24px' },
          backgroundImage: project.modalBgImage 
            ? `url(${project.modalBgImage}), linear-gradient(180deg, rgba(61, 92, 77, 1) 0%, rgba(102, 148, 122, 1) 100%)` 
            : 'linear-gradient(180deg, rgba(61, 92, 77, 1) 0%, rgba(102, 148, 122, 1) 100%)',
          backgroundSize: project.modalBgImage ? 'cover, 100% 100%' : '100% 100%',
          backgroundPosition: project.modalBgImage
            ? { xs: 'center bottom -24px, center top', md: 'center bottom -56px, center top' }
            : 'center top',
          backgroundRepeat: 'no-repeat, no-repeat',
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
          p: { xs: '16px 24px', md: '20px 48px' },
          borderTop: `0.5px solid rgba(44, 62, 53, 0.12)`,
          backgroundColor: 'rgba(7, 44, 37, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Lado Esquerdo: Projeto Anterior */}
        <Box sx={{ width: { xs: 'auto', sm: '200px' }, display: 'flex', justifyContent: 'flex-start' }}>
          {hasPrev && (
            <Button
              variant="ghost"
              onClick={onPrev}
              sx={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#FFFFFF',
                p: 0,
                transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'transparent',
                  opacity: 0.8,
                  transform: 'scale(1.05)',
                },
              }}
            >
              {isMobile ? '← Anterior' : '← Projeto anterior'}
            </Button>
          )}
        </Box>

        {/* Centro: Entrar em contato (Some no mobile) */}
        <Button
          variant="outlined"
          onClick={onContactClick}
          sx={{
            display: { xs: 'none', md: 'flex' },
            fontSize: '16px',
            fontWeight: 600,
            padding: '12px 24px', // Adjusted to match visually, total height 44px
            border: '1.5px solid #FFFFFF',
            borderRadius: '50px',
            backgroundColor: 'transparent',
            color: '#FFFFFF',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1.5px solid #FFFFFF',
              transform: 'scale(1.05)',
            },
          }}
        >
          Entrar em contato
        </Button>

        {/* Lado Direito: Próximo Projeto */}
        <Box sx={{ width: { xs: 'auto', sm: '200px' }, display: 'flex', justifyContent: 'flex-end' }}>
          {hasNext && (
            <Button
              variant="ghost"
              onClick={onNext}
              sx={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#FFFFFF',
                p: 0,
                transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'transparent',
                  opacity: 0.8,
                  transform: 'scale(1.05)',
                },
              }}
            >
              {isMobile ? 'Próximo →' : 'Próximo projeto →'}
            </Button>
          )}
        </Box>
      </Box>
    </Dialog>
  );
};
