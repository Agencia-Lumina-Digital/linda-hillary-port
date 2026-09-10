import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { tokens } from '../../theme/tokens';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import bgTopografico from '../../theme/assets/bg-topografico-claro.png';
import logo from '../../theme/assets/logo-linda-claro.png';
import loginBemolBg from '../../theme/assets/projects/loginBemolContent/bg-card.png';
import designSystemBg from '../../theme/assets/projects/DesignSystemBemolContent/bg-card.png';
import saudeBemolBg from '../../theme/assets/projects/SaudeBemolContent/bg-card.png';
import bemolRunBg from '../../theme/assets/projects/BemolRunContent/bg-card.png';

import loginBemolModalBg from '../../theme/assets/projects/loginBemolContent/background.png';
import designSystemModalBg from '../../theme/assets/projects/DesignSystemBemolContent/background.png';
import saudeBemolModalBg from '../../theme/assets/projects/SaudeBemolContent/background.png';
import bemolRunModalBg from '../../theme/assets/projects/BemolRunContent/background.png';
import checkoutBemolBg from '../../theme/assets/projects/CheckoutBemolContent/bg-card.png';
import checkoutBemolModalBg from '../../theme/assets/projects/CheckoutBemolContent/checkout.png';

const projectsData = [
  {
    title: 'Redesign do Login — App Bemol',
    description: 'Reestruturação completa do fluxo de autenticação do app Bemol, eliminando a dependência exclusiva do e-mail e introduzindo múltiplos métodos de acesso alinhados ao Design System da marca.',
    tag: 'UX Research',
    metric: '+67% conclusão',
    bannerBgColor: '#B6A38B', // Muted brownish beige
    headerBgImage: loginBemolBg,
    modalBgImage: loginBemolModalBg,
  },
  {
    title: 'Bemol Saúde — Agendamento de Exames',
    description: 'Criação do fluxo de agendamento de exames laboratoriais domiciliares no app Bemol — inaugurando a frente de saúde digital da Bemol Farma e traduzindo regras médicas, logísticas e operacionais em uma experiência simples e confiável.',
    tag: 'UX Design',
    metric: '+67% conclusão',
    bannerBgColor: '#B6A38B',
    headerBgImage: saudeBemolBg,
    modalBgImage: saudeBemolModalBg,
  },
  {
    title: 'Bemol Run — Redesign do Fluxo de Inscrição',
    description: 'Redesign completo da experiência de inscrição em eventos de corrida no app Bemol, orientado por dados reais de abandono, reclamações do suporte e análise heurística — corrigindo falhas estruturais e reconstruindo a confiança do atleta na jornada digital.',
    tag: 'UX Design',
    metric: '+67% conclusão',
    bannerBgColor: '#93A993',
    headerBgImage: bemolRunBg,
    modalBgImage: bemolRunModalBg,
  },
  {
    title: 'Fundamentos do Norte Design System — Bemol Varejo',
    description: 'Estruturação, definição e documentação dos fundamentos visuais do Norte Design System da Bemol — unificando múltiplos produtos digitais sob uma única fonte de verdade, da cor ao código.',
    tag: 'UX Research',
    metric: '+67% conclusão',
    bannerBgColor: '#93A993',
    headerBgImage: designSystemBg,
    modalBgImage: designSystemModalBg,
  },
  {
    title: 'Quebra de Pacotes – Checkout Bemol',
    description: 'Tornar visível, no checkout, uma complexidade logística que o backend já resolvia – múltiplas origens de expedição (Centro de Distribuição, lojas físicas, embarcações) – sem transformar essa complexidade em ansiedade para o cliente.',
    tag: 'UX Design',
    metric: '+67% conclusão',
    bannerBgColor: '#EBE3D0', // Beige tone from the image background roughly
    headerBgImage: checkoutBemolBg,
    modalBgImage: checkoutBemolModalBg,
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
      <Stack spacing="16px" alignItems="center" textAlign="center">
        {/* Título da Seção */}
        <Typography
          variant="h3"
          sx={{
            fontFamily: tokens.typography.fontFamily.display,
            color: 'rgba(24, 27, 26, 1)',
            fontSize: { xs: '24px', md: '36px' },
            fontWeight: 600,
            lineHeight: 1.4
          }}
        >
          Projetos
        </Typography>

        {/* Descrição */}
        <Typography
          variant="body1"
          sx={{
            fontFamily: tokens.typography.fontFamily.display,
            color: 'rgba(74, 79, 78, 1)',
            fontSize: { xs: '16px', md: '18px' },
            maxWidth: '1312px',
            lineHeight: { xs: 1.4, md: 1.6 }
          }}
        >
          Transformando desafios em experiências memoráveis, com clareza e resultados que falam por si.
        </Typography>
      </Stack>

      {/* Container de Cards de Projetos */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap', // Agora quebra a linha no desktop para formar o grid 2x2
          gap: '24px', // Espaçamento igual e consistente entre todos os cards
          mt: { xs: '24px', md: '56px' }
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
