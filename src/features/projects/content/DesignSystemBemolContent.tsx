import { Box } from '@mui/material';
import { Tag } from '../../../components/atoms/Tag/Tag';
import { ProjectTitle } from '../../../components/atoms/ProjectTitle/ProjectTitle';
import { ProjectDescription } from '../../../components/atoms/ProjectDescription/ProjectDescription';
import { ProjectInfoCard } from '../../../components/atoms/ProjectInfoCard/ProjectInfoCard';
import { ProjectDivider } from '../../../components/atoms/ProjectDivider/ProjectDivider';

export const DesignSystemBemolContent = () => {
  return (
    <Box>
      {/* Linha de Badges (Tags) */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: { xs: '8px', md: '12px' },
          alignItems: 'center',
        }}
      >
        {['Figma', 'FigJam', 'Design System', 'Brandbook'].map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </Box>

      {/* Espaçamento de 8px (mobile) e 10px (desktop) seguido do título */}
      <Box sx={{ mt: { xs: '8px', md: '10px' } }}>
        <ProjectTitle title="Fundamentos do Design System — Bemol Varejo" />
      </Box>

      {/* Espaçamento de 8px (mobile) e 10px (desktop) seguido da descrição */}
      <Box sx={{ mt: { xs: '8px', md: '10px' } }}>
        <ProjectDescription text="Estruturação, definição e documentação dos fundamentos visuais do Design System da Bemol — cobrindo 5 produtos digitais e estabelecendo a base de tokens, tipografia, cores e grid para design e engenharia." />
      </Box>

      {/* Margem do topo de 16px (mobile) e 32px (desktop) seguida dos cards */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: { xs: '12px', md: '16px' },
          mt: { xs: '16px', md: '32px' },
          width: '100%',
        }}
      >
        <ProjectInfoCard
          title="5 produtos cobertos"
          text="Uma base visual para todos os produtos digitais Bemol Varejo"
        />
        <ProjectInfoCard
          title="Paleta unificada"
          text="De 20+ tons arbitrários para sistema semântico estruturado"
        />
        <ProjectInfoCard
          title="Handoff"
          text="Tokens documentados acessíveis a design, dev e marketing"
        />
      </Box>

      {/* Divisória com espaçamento de 16px (mobile) e 32px (desktop) */}
      <ProjectDivider />
    </Box>
  );
};
