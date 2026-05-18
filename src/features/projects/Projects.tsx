import { Box, Stack, Typography } from '@mui/material';
import { tokens } from '../../theme/tokens';
import { ProjectCard } from './ProjectCard';

const projectsData = [
  {
    title: 'Redesign do Login — App Bemol',
    description: 'Reduzimos a fricção no primeiro acesso de um app financeiro.',
    tag: 'UX Research',
    metric: '+67% conclusão',
    bannerBgColor: '#B6A38B', // Muted brownish beige
  },
  {
    title: 'Fundamentos do Design System — Bemol Varejo',
    description: 'Estruturação, definição e documentação dos fundamentos visuais do Design System da Bemol.',
    tag: 'UX Research',
    metric: '+67% conclusão',
    bannerBgColor: '#93A993', // Muted sage green
  },
  {
    title: 'Bemol Saúde — Agendamento de Exames',
    description: 'Criação do fluxo de agendamento de exames laboratoriais domiciliares no app Bemol.',
    tag: 'UX Research',
    metric: '+67% conclusão',
    bannerBgColor: '#B6A38B',
  },
  {
    title: 'Bemol Run — Redesign do Fluxo de Inscrição',
    description: 'Redesign completo da experiência de inscrição em eventos de corrida no app Bemol.',
    tag: 'UX Research',
    metric: '+67% conclusão',
    bannerBgColor: '#93A993',
  },
];

export const Projects = () => {
  return (
    <Box 
      sx={{ 
        pt: { xs: '40px', md: '88px' },
        pb: { xs: 8, md: 12 },
        backgroundColor: tokens.colors.background.elevated,
        mx: { xs: '-24px', md: 'calc(-50vw + 50%)' }, // Quebra o container para full-width
        px: { xs: '24px', md: 'calc(50vw - 50%)' } // Restaura padding interno perfeitamente alinhado
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
            <ProjectCard {...project} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
