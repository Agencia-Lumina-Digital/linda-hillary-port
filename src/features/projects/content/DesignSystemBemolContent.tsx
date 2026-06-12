import { Box } from '@mui/material';
import { Tag } from '../../../components/atoms/Tag/Tag';
import { ProjectTitle } from '../../../components/atoms/ProjectTitle/ProjectTitle';
import { ProjectDescription } from '../../../components/atoms/ProjectDescription/ProjectDescription';
import { ProjectInfoCard } from '../../../components/atoms/ProjectInfoCard/ProjectInfoCard';
import { ProjectDivider } from '../../../components/atoms/ProjectDivider/ProjectDivider';
import { ProjectSectionTitle } from '../../../components/atoms/ProjectSectionTitle/ProjectSectionTitle';
import { tokens } from '../../../theme/tokens';

// Importação das imagens do projeto
import imgSiteBemol from '../../../theme/assets/projects/DesignSystemBemolContent/site-bemol.png';
import imgAppBemol from '../../../theme/assets/projects/DesignSystemBemolContent/app-bemol.png';

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

      {/* Título da Seção: "O desafio" */}
      <ProjectSectionTitle title="O desafio" />

      {/* Espaçamento de 12px seguido do conteúdo do desafio */}
      <Box sx={{ mt: '12px' }}>
        <ProjectDescription text="O crescimento acelerado dos produtos digitais da Bemol expôs um problema estrutural: ausência de linguagem visual unificada. Cada produto acumulava decisões visuais independentes — paletas divergentes, hierarquia tipográfica inconsistente e ausência de tokens dificultavam a comunicação entre design e engenharia. A atualização recente do Brandbook tornou o problema urgente: era necessário redesenhar toda a base visual e garantir que ela fosse aplicável em código." />
      </Box>

      <Box sx={{ mt: '16px' }}>
        <ProjectDescription text="Problemas mapeados no diagnóstico:" />
      </Box>

      <Box
        component="ul"
        sx={{
          m: 0,
          pl: '20px',
          mt: '8px',
          color: tokens.colors.text.secondary,
          fontFamily: tokens.typography.fontFamily.body,
          fontSize: { xs: '14px', md: '16px' },
          fontWeight: tokens.typography.fontWeight.regular,
        }}
      >
        {[
          '20+ tons de azul em uso simultâneo no site',
          'Paletas diferentes entre app e e-commerce',
          'Uso indiscriminado de bold, sem hierarquia tipográfica definida',
          'Ausência de tokens — comunicação design/dev dependia de interpretação manual',
          'Nenhuma diretriz unificada para decisões visuais',
        ].map((item, idx) => (
          <Box
            component="li"
            key={idx}
            sx={{
              lineHeight: 1.6,
              mb: '4px',
            }}
          >
            {item}
          </Box>
        ))}
      </Box>

      {/* Imagens do projeto: margem do topo de 12px e gap de 16px */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: '16px',
          mt: '12px',
          width: '100%',
        }}
      >
        <Box
          component="img"
          src={imgSiteBemol}
          alt="Interface do site Bemol"
          sx={{
            width: { xs: '100%', md: 'calc(50% - 8px)' },
            height: 'auto',
            display: 'block',
          }}
        />
        <Box
          component="img"
          src={imgAppBemol}
          alt="Interface do app Bemol"
          sx={{
            width: { xs: '100%', md: 'calc(50% - 8px)' },
            height: 'auto',
            display: 'block',
          }}
        />
      </Box>

      {/* Divisória no final do bloco de imagens */}
      <ProjectDivider />
    </Box>
  );
};
