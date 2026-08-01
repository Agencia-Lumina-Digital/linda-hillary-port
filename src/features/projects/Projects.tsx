import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { tokens } from '../../theme/tokens';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import bgTopografico from '../../theme/assets/bg-topografico-claro.png';
import logo from '../../theme/assets/logo-linda-claro.png';
import loginBemolBg from '../../theme/assets/projects/loginBemolContent/background.png';
import designSystemBg from '../../theme/assets/projects/DesignSystemBemolContent/background.png';
import saudeBemolBg from '../../theme/assets/projects/SaudeBemolContent/background.png';
import bemolRunBg from '../../theme/assets/projects/BemolRunContent/background.png';

const projectsData = [
  {
    title: 'Redesign do Login — App Bemol',
    description: 'Reduzimos a fricção no primeiro acesso de um app financeiro.',
    tag: 'UX Research',
    metric: '+67% conclusão',
    bannerBgColor: '#B6A38B', // Muted brownish beige
    headerBgImage: loginBemolBg,
  },
  {
    title: 'Fundamentos do Design System — Bemol Varejo',
    description: 'Estruturação, definição e documentação dos fundamentos visuais do Design System da Bemol.',
    tag: 'UX Research',
    metric: '+67% conclusão',
    bannerBgColor: '#93A993', // Muted sage green
    headerBgImage: designSystemBg,
  },
  {
    title: 'Bemol Saúde — Agendamento de Exames',
    description: 'Criação do fluxo de agendamento de exames laboratoriais domiciliares no app Bemol.',
    tag: 'UX Design',
    metric: '+67% conclusão',
    bannerBgColor: '#B6A38B',
    headerBgImage: saudeBemolBg,
  },
  {
    title: 'Bemol Run — Redesign do Fluxo de Inscrição',
    description: 'Redesign completo da experiência de inscrição em eventos de corrida no app Bemol.',
    tag: 'UX Design',
    metric: '+67% conclusão',
    bannerBgColor: '#93A993',
    headerBgImage: bemolRunBg,
  },
];

export const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  return (
    <Box
      sx={{
        pt: { xs: '40px', md: '88px' },
        pb: { xs: 8, md: 12 },
        backgroundColor: tokens.colors.background.elevated,
        mx: { xs: '-24px', md: 'calc(-50vw + 50%)' }, // Quebra o container para full-width
        px: { xs: '24px', md: 'calc(50vw - 50%)' }, // Restaura padding interno perfeitamente alinhado
      }}
    >
      <Stack spacing={{ xs: '8px', md: '16px' }} alignItems="center" textAlign="center">
        {/* Título da Seção */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: tokens.typography.fontFamily.display,
            color: tokens.colors.text.brand,
            fontSize: { xs: tokens.typography.fontSize[26], md: '36px' },
            fontWeight: 600,
            lineHeight: 1.2
          }}
        >
          Projetos
        </Typography>

        {/* Descrição */}
        <Typography
          variant="body1"
          sx={{
            color: tokens.colors.text.secondary,
            fontSize: { xs: '14px', md: '18px' },
            maxWidth: '560px',
            lineHeight: 1.6
          }}
        >
          Problemas reais, processos honestos e resultados que você pode medir.
        </Typography>
      </Stack>

      {/* Container de Cards de Projetos */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap', // Agora quebra a linha no desktop para formar o grid 2x2
          gap: '24px', // Espaçamento igual e consistente entre todos os cards
          mt: { xs: '32px', md: '56px' }
        }}
      >
        {projectsData.map((project, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: '100%',
                md: 'calc(50% - 12px)' // Divisão perfeita de 2 colunas com gap de 24px
              },
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <ProjectCard {...project} onClick={() => setSelectedProjectIndex(index)} />
          </Box>
        ))}
      </Box>

      

      {/* Modal de Detalhes do Projeto */}
      <ProjectModal
        open={selectedProjectIndex !== null}
        onClose={() => setSelectedProjectIndex(null)}
        project={selectedProjectIndex !== null ? projectsData[selectedProjectIndex] : null}
        onPrev={() => setSelectedProjectIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))}
        onNext={() => setSelectedProjectIndex((prev) => (prev !== null && prev < projectsData.length - 1 ? prev + 1 : prev))}
        hasPrev={selectedProjectIndex !== null && selectedProjectIndex > 0}
        hasNext={selectedProjectIndex !== null && selectedProjectIndex < projectsData.length - 1}
        onContactClick={() => {
          setSelectedProjectIndex(null);
          const element = document.getElementById('contact');
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - offset,
              behavior: 'smooth'
            });
          }
        }}
      />
    </Box>
  );
};
