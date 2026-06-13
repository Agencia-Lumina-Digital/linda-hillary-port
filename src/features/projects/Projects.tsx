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
      <Stack spacing={{ xs: '8px', md: '10px' }}>
        {/* Tagline / Eyebrow */}
        <Typography
          sx={{
            color: tokens.colors.text.accent,
            fontWeight: tokens.typography.fontWeight.medium,
            fontSize: { xs: tokens.typography.fontSize[11], md: tokens.typography.fontSize[14] },
            letterSpacing: '0.05em',
          }}
        >
          — Trabalhos selecionados
        </Typography>

        {/* Título da Seção */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: tokens.typography.fontFamily.display,
            color: tokens.colors.text.brand,
            fontSize: { xs: tokens.typography.fontSize[26], md: tokens.typography.fontSize[38] },
            fontWeight: tokens.typography.fontWeight.medium,
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
            fontSize: { xs: tokens.typography.fontSize[14], md: tokens.typography.fontSize[16] },
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
          flexWrap: { xs: 'wrap', md: 'nowrap' }, // Garante todos na mesma linha no desktop
          gap: '24px', // Espaçamento igual e consistente entre todos os cards
          mt: { xs: '32px', md: '40px' } // Espaçamento elegante superior (menor que 56px)
        }}
      >
        {projectsData.map((project, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: '100%',
                sm: 'calc(50% - 12px)',
                md: 'calc((100% - 72px) / 4)' // Divisão perfeita de 4 colunas com gap de 24px
              },
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <ProjectCard {...project} onClick={() => setSelectedProjectIndex(index)} />
          </Box>
        ))}
      </Box>

      {/* Bloco de Citação / Testemunhal (Sangramento total de ponta a ponta da tela) */}
      <Box
        sx={{
          mx: { xs: '-24px', md: 'calc(-50vw + 50%)' }, // Rompe o container pai e estica até as bordas da janela
          px: { xs: '24px', md: 'calc(50vw - 50%)' }, // Mantém o conteúdo alinhado à régua geral do site
          mt: { xs: '48px', md: '80px' },
          py: { xs: '40px', md: '56px' }, // Adiciona espaçamento vertical para respiro
          minHeight: { xs: '180px', md: '260px' },
          borderRadius: 0, // Retangular de ponta a ponta
          backgroundColor: '#EDE8DF', // Cor creme suave correspondente ao fundo da citação
          backgroundImage: `url(${bgTopografico})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderTop: `1px solid rgba(44, 62, 53, 0.05)`, // Acabamento premium horizontal
          borderBottom: `1px solid rgba(44, 62, 53, 0.05)`,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Stack
          spacing={{ xs: '24px', md: '40px' }}
          alignItems="center"
          sx={{
            maxWidth: '720px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          {/* 1. Monograma */}
          <Box
            component="img"
            src={logo}
            alt="Monograma Linda Souza"
            sx={{
              height: { xs: '32px', md: '40px' },
              width: 'auto',
              display: 'block',
              opacity: 0.8,
            }}
          />

          {/* 2. Citação */}
          <Typography
            sx={{
              fontFamily: tokens.typography.fontFamily.display,
              fontSize: { xs: tokens.typography.fontSize[20], md: tokens.typography.fontSize[24] },
              fontWeight: tokens.typography.fontWeight.light,
              fontStyle: 'italic',
              color: tokens.colors.text.brand,
              lineHeight: 1.5,
              // px: { xs: 2, md: 0 },
            }}
          >
            "Linda fez a transição da área de desenvolvimento para o design e, desde o início, demonstrou uma energia contagiante para aprender e colaborar com a equipe. Sua chegada trouxe muitas melhorias e agilidade para o time, é de fato um privilégio tê-la conosco! É uma profissional que dá gosto de trabalhar e que faz a diferença. Minha rotina de trabalho é mais eficaz e feliz com ela."
          </Typography>

          {/* 3. Autor */}
          <Typography
            sx={{
              fontFamily: tokens.typography.fontFamily.body,
              fontSize: { xs: tokens.typography.fontSize[11], md: tokens.typography.fontSize[13] },
              fontWeight: tokens.typography.fontWeight.medium,
              color: tokens.colors.text.secondary,
              letterSpacing: '0.05em',
            }}
          >
            Giovanna Chiarion · UX/UI Designer Specialist, VEM Sistemi
          </Typography>
        </Stack>
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
