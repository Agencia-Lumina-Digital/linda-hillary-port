import { Box, Stack } from '@mui/material';
import { Tag } from '../../../components/atoms/Tag/Tag';
import { ProjectTitle } from '../../../components/atoms/ProjectTitle/ProjectTitle';
import { ProjectDescription } from '../../../components/atoms/ProjectDescription/ProjectDescription';
import { ProjectInfoCard } from '../../../components/atoms/ProjectInfoCard/ProjectInfoCard';
import { ProjectDivider } from '../../../components/atoms/ProjectDivider/ProjectDivider';
import { ProjectSectionTitle } from '../../../components/atoms/ProjectSectionTitle/ProjectSectionTitle';
import { ProjectContentBlock } from '../../../components/atoms/ProjectContentBlock/ProjectContentBlock';
import { tokens } from '../../../theme/tokens';

// Importação das imagens do projeto
import imgSiteBemol from '../../../theme/assets/projects/DesignSystemBemolContent/site-bemol.png';
import imgAppBemol from '../../../theme/assets/projects/DesignSystemBemolContent/app-bemol.png';
import imgDocumentacao from '../../../theme/assets/projects/DesignSystemBemolContent/documentacao.png';
import imgOrganizacao from '../../../theme/assets/projects/DesignSystemBemolContent/organizacao.png';
import imgAntesFund from '../../../theme/assets/projects/DesignSystemBemolContent/antes fund.png';
import imgDepoisFund from '../../../theme/assets/projects/DesignSystemBemolContent/depois fund.png';

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

      {/* Título da Seção: "O processo" */}
      <ProjectSectionTitle title="O processo" />

      {/* Conteúdo da seção do processo com margem superior de 12px */}
      <Stack spacing="24px" sx={{ mt: '12px', width: '100%' }}>
        <ProjectContentBlock
          title="1. Diagnóstico interno e alinhamento estratégico"
          paragraphs={[
            'Conduzi uma análise do cenário atual dos produtos digitais, mapeando inconsistências visuais por categoria: cores, tipografia, espaçamento, bordas e iconografia. Em paralelo, alinhei com marketing o novo Brandbook — o ponto de partida para redefinição de toda a paleta institucional. Esse alinhamento foi crítico para garantir que os Fundamentos traduzissem a identidade de marca para o ambiente digital sem distorções.',
          ]}
        />

        <ProjectContentBlock
          title="2. Benchmark de Design Systems"
          paragraphs={[
            'Analisei a estrutura de sistemas como Material Design 3 e referências do mercado para embasar decisões arquiteturais — especialmente na criação de tokens primitivos e semânticos e na definição de escalas modulares.',
          ]}
        />

        <ProjectContentBlock
          title="3. Criação dos tokens e fundamentos"
          paragraphs={['Estruturei os fundamentos em camadas:']}
          listItems={[
            <>
              <strong>Colors</strong> — Tokens primitivos (cores base) e semânticos (estados e contextos). Cor da marca reservada exclusivamente para ações primárias. Regras para cinzas, estados interativos e acessibilidade validada com o plugin Stark.
            </>,
            <>
              <strong>Typography</strong> — Refatoração completa da hierarquia. Tokens primitivos e semânticos (title-l, body-s, button-m). Substituição do uso indiscriminado de bold por pesos contextuais e corretos.
            </>,
            <>
              <strong>Spacing</strong> — Escala modular baseada em 4px. Tokens aplicáveis em padding, margin e gap — base para composição consistente entre produtos.
            </>,
            <>
              <strong>Border (Radius e Stroke)</strong> — Tokens padronizados de curva e espessura para botões, cards, inputs e containers.
            </>,
            <>
              <strong>Shadow</strong> — Escala de sombras com diretrizes de uso seguro em superfícies elevadas e modais.
            </>,
            <>
              <strong>Size</strong> — Tokens para alturas, larguras e ícones. Base para grids e responsividade.
            </>,
            <>
              <strong>Layout Grid</strong> — Grids específicos por breakpoint: 4 colunas (mobile), 8 (tablet), 12 (desktop). Sistema baseado em 8pt.
            </>,
            <>
              <strong>Iconography</strong> — Padronização com base no Material Design 3. Criação da biblioteca própria &ldquo;BemolVerso&rdquo; para necessidades específicas da marca. Regras de tamanho, área de toque e uso semântico.
            </>,
            <>
              <strong>Illustrations, Images & Brand</strong> — Diretrizes de estilo, proporções e alinhamento com a identidade institucional.
            </>,
          ]}
        />

        <ProjectContentBlock
          title="4. Documentação e handoff"
          paragraphs={[
            'Todos os fundamentos foram documentados no Figma com arquivos organizados por categoria — exemplos visuais, boas práticas, instruções de implementação e anotações para desenvolvedores. O objetivo foi eliminar ambiguidade: qualquer designer ou dev deveria conseguir aplicar os fundamentos sem depender de explicação verbal.',
          ]}
        />
      </Stack>

      {/* Imagens de Documentação e Organização: margem do topo de 12px e gap de 16px */}
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
          src={imgDocumentacao}
          alt="Documentação do Design System"
          sx={{
            width: { xs: '100%', md: 'calc(68% - 11px)' },
            height: 'auto',
            display: 'block',
          }}
        />
        <Box
          component="img"
          src={imgOrganizacao}
          alt="Organização do Design System"
          sx={{
            width: { xs: '100%', md: 'calc(32% - 5px)' },
            height: 'auto',
            display: 'block',
          }}
        />
      </Box>

      {/* Divisória no final */}
      <ProjectDivider />

      {/* Título da Seção: "Resultado" */}
      <ProjectSectionTitle title="Resultado" />

      {/* Espaçamento de 12px seguido do conteúdo do resultado */}
      <Box sx={{ mt: '12px' }}>
        <Box
          component="ul"
          sx={{
            m: 0,
            pl: '20px',
            color: tokens.colors.text.secondary,
            fontFamily: tokens.typography.fontFamily.body,
            fontSize: { xs: '14px', md: '16px' },
            fontWeight: tokens.typography.fontWeight.regular,
          }}
        >
          {[
            '✓ 5 produtos digitais unificados sob os mesmos Fundamentos',
            '✓ Paleta reduzida de 20+ tons arbitrários para sistema semântico com função definida',
            '✓ Tokens primitivos e semânticos implementados em design e código',
            '✓ Referência compartilhada entre design, engenharia e marketing — menos retrabalho, mais previsibilidade',
            '✓ Base estruturada para criação dos primeiros componentes reutilizáveis',
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
      </Box>

      {/* Imagens do Resultado responsivas (Mobile / Desktop) com margem superior de 12px */}
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
          src={imgAntesFund}
          alt="Antes dos fundamentos"
          sx={{
            width: { xs: '100%', md: 'calc(50% - 8px)' },
            height: 'auto',
            display: 'block',
          }}
        />
        <Box
          component="img"
          src={imgDepoisFund}
          alt="Depois dos fundamentos"
          sx={{
            width: { xs: '100%', md: 'calc(50% - 8px)' },
            height: 'auto',
            display: 'block',
          }}
        />
      </Box>
    </Box>
  );
};
