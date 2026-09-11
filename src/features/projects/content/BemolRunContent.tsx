import { Box, Stack } from '@mui/material';
import { Tag } from '../../../components/atoms/Tag/Tag';
import { ProjectTitle } from '../../../components/atoms/ProjectTitle/ProjectTitle';
import { ProjectDescription } from '../../../components/atoms/ProjectDescription/ProjectDescription';
import { ProjectInfoCard } from '../../../components/atoms/ProjectInfoCard/ProjectInfoCard';
import { ProjectDivider } from '../../../components/atoms/ProjectDivider/ProjectDivider';
import { ProjectSectionTitle } from '../../../components/atoms/ProjectSectionTitle/ProjectSectionTitle';
import { ProjectContentBlock } from '../../../components/atoms/ProjectContentBlock/ProjectContentBlock';
import { tokens } from '../../../theme/tokens';

// Importação das imagens do processo
import imgMapeamento from '../../../theme/assets/projects/BemolRunContent/mapeamento.png';
import imgAnalise from '../../../theme/assets/projects/BemolRunContent/analise.png';
import imgDesign from '../../../theme/assets/projects/BemolRunContent/design.png';
import imgReconstrucao from '../../../theme/assets/projects/BemolRunContent/reconstrução.png';
import imgResultadoDesktop from '../../../theme/assets/projects/BemolRunContent/resultado desktop.png';
import imgResultadoMobile from '../../../theme/assets/projects/BemolRunContent/resultado mobile.png';

export const BemolRunContent = () => {
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
        {['Figma', 'FigJam', 'Design System'].map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </Box>

      {/* Espaçamento de 8px (mobile) e 10px (desktop) seguido do título */}
      <Box sx={{ mt: { xs: '8px', md: '10px' } }}>
        <ProjectTitle title="Bemol Run — Redesign do Fluxo de Inscrição" />
      </Box>

      {/* Espaçamento de 8px (mobile) e 10px (desktop) seguido da descrição */}
      <Box sx={{ mt: { xs: '8px', md: '10px' } }}>
        <ProjectDescription text="Redesign completo da experiência de inscrição em eventos de corrida no app Bemol, orientado por dados reais de abandono, reclamações do suporte e análise heurística — corrigindo falhas estruturais e reconstruindo a confiança do atleta na jornada digital." />
      </Box>

      {/* Margem do topo de 16px (mobile) e 32px (desktop) seguida dos cards (em linha em ambos os formatos) */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '12px', md: '16px' },
          mt: { xs: '16px', md: '32px' },
          width: '100%',
        }}
      >
        <ProjectInfoCard
          title="1"
          text="54,1% de abandono identificado via funil no UXCam – principal evidência que orientou o redesign"
        />
        <ProjectInfoCard
          title="2"
          text="8 falhas críticas reais relatadas pelo suporte, endereçadas uma a uma no redesign"
        />
        <ProjectInfoCard
          title="3"
          text="Fluxo completo redesenhado e documentado, pronto para priorização"
        />
      </Box>

      {/* Divisória com espaçamento de 16px (mobile) e 32px (desktop) */}
      <ProjectDivider />

      {/* Título da Seção: "O desafio" */}
      <ProjectSectionTitle title="O desafio" />

      {/* Espaçamento de 12px seguido do conteúdo do desafio */}
      <Box sx={{ mt: '12px' }}>
        <ProjectDescription text="A Bemol Run acumulava problemas estruturais que comprometiam a confiança do atleta justamente no momento mais crítico: a inscrição. A edição de 2025 expôs falhas que iam muito além da interface – inconsistências de status pós-pagamento, duplicidade de inscrição, erro no desconto automático para idosos, falhas no controle de estoque de camisas e informações incompletas na confirmação. As reclamações chegavam ao suporte (CAB) em volume, sinalizando que a experiência falhava em pilares fundamentais: comunicação, operação e confiança – não só estética." />
      </Box>

      {/* Divisória no final do desafio */}
      <ProjectDivider />

      {/* Título da Seção: "O processo" */}
      <ProjectSectionTitle title="O processo" />

      {/* Conteúdo da seção do processo com margem superior de 12px */}
      <Stack spacing="24px" sx={{ mt: '12px', width: '100%' }}>
        <ProjectContentBlock
          title="1. Mapeamento da jornada atual"
          paragraphs={[
            'Conduzi sessões junto com PO, desenvolvedor e QA para revisar cada tela do fluxo existente. O objetivo era construir um diagnóstico preciso – falhas de clareza, inconsistências visuais e lacunas na arquitetura da informação. O resultado foi um "De x Para" que guiou todas as decisões do redesign.',
          ]}
        />

        <ProjectContentBlock
          title="2. Análise de dados no UXCam"
          paragraphs={[
            'Criei um funil dentro do UXCam para mapear o comportamento real dos usuários na jornada de inscrição. O dado mais crítico: 54,1% de abandono entre quem iniciava o fluxo. Mas a análise também revelou um problema por trás do problema: a instrumentação original registrava toda a jornada como uma única tela, o que impedia identificar em qual etapa exata (dados pessoais, percurso, camisa, pagamento ou resumo) o usuário desistia. Isso reforçou duas entregas do projeto, não uma: o redesenho da experiência e a especificação de instrumentação correta para a próxima versão – sem isso, o time continuaria "voando às cegas" mesmo depois do redesign.',
          ]}
        />

        <ProjectContentBlock
          title="3. Reclamações do suporte como bússola"
          paragraphs={[
            'Usei os registros do CAB como diretriz direta de redesign – cada reclamação recorrente virou um requisito de melhoria: status travado em "em processamento" mesmo após pagamento confirmado, ausência de validação contra duplicidade de inscrição, divergências de dados entre etapas, falha na trava de estoque de camisas, erro na identificação automática de idosos para desconto, ausência de campo para personalização do número de peito e informações incompletas na tela de confirmação.',
          ]}
        />

        <ProjectContentBlock
          title="4. Alinhamento com marketing"
          paragraphs={[
            'Revisei todas as copys do fluxo junto ao time de marketing – regulamento, instruções de preparo, avisos e narrativa visual do evento. Em inscrições esportivas, precisão na comunicação não é detalhe: é requisito de confiança, já que envolve regras formais de participação.',
          ]}
        />

        <ProjectContentBlock
          title="5. Design Critique interno"
          paragraphs={[
            'Apresentei a primeira versão do redesign em critique com o time de design. Os insights desse encontro refinaram decisões de hierarquia visual, densidade de conteúdo e clareza das instruções – garantindo que a experiência final comunicasse responsabilidade e segurança, não só organização visual.',
          ]}
        />

        <ProjectContentBlock
          title="6. Reconstrução do fluxo"
          paragraphs={[
            'Redesenhei a jornada completa com base em todos os insumos anteriores: página inicial e listagem de eventos reorganizadas com hierarquia clara, detalhes do evento estruturados em seções expansíveis (reduzindo fadiga cognitiva em conteúdo denso), fluxo de inscrição dividido em etapas claras (dados pessoais, percurso, camisa, pagamento, resumo e confirmação), padronizado com o fluxo de pagamento do Bemol Saúde – já validado – e reconstruído visualmente com o Norte Design System.',
          ]}
        />

        <ProjectContentBlock
          paragraphs={['Entregas:']}
          listItems={[
            'Fluxo completo de inscrição redesenhado, do zero até a confirmação',
            '"De x Para" documentando cada falha corrigida',
            'Especificação de instrumentação granular para medir abandono por etapa',
            'Copys revisadas e validadas com marketing e regulamento oficial',
          ]}
        />
      </Stack>

      {/* Imagens do processo: mapeamento, analise, design e reconstrução empilhados verticalmente */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          mt: '12px',
          width: '100%',
        }}
      >
        <Box
          component="img"
          src={imgMapeamento}
          alt="Mapeamento da jornada atual"
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
        <Box
          component="img"
          src={imgAnalise}
          alt="Análise de dados no UXCam"
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
        <Box
          component="img"
          src={imgDesign}
          alt="Design Critique interno"
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
        <Box
          component="img"
          src={imgReconstrucao}
          alt="Reconstrução do fluxo"
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </Box>

      {/* Divisória no final das imagens do processo */}
      <ProjectDivider />

      {/* Título da Seção: "Resultado" */}
      <ProjectSectionTitle title="Resultado" />

      {/* Espaçamento de 12px seguido do conteúdo do resultado */}
      <Box sx={{ mt: '12px' }}>
        <ProjectDescription text="O projeto não foi priorizado para desenvolvimento, então não gerou métricas reais – mas as evidências levantadas sustentam hipóteses sólidas para quando a funcionalidade voltar ao roadmap:" />
        
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
            '✓ 54,1% de abandono mapeado e endereçado com fluxo mais claro e padronizado',
            '✓ 8 falhas críticas do suporte corrigidas no redesign',
            '✓ Instrumentação especificada para medir abandono por etapa na próxima versão',
            '✓ Fluxo unificado ao Norte Design System e padronizado com outros fluxos do app (Bemol Saúde)',
            '✓ Comunicação revisada e alinhada ao regulamento oficial do evento',
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

      {/* Imagem do Resultado responsiva (Mobile / Desktop) com margem superior de 12px */}
      <Box sx={{ mt: '12px', width: '100%' }}>
        {/* Versão Mobile */}
        <Box
          component="img"
          src={imgResultadoMobile}
          alt="Telas de resultado do fluxo (versão mobile)"
          sx={{
            width: '100%',
            height: 'auto',
            display: { xs: 'block', md: 'none' },
          }}
        />
        {/* Versão Desktop */}
        <Box
          component="img"
          src={imgResultadoDesktop}
          alt="Telas de resultado do fluxo (versão desktop)"
          sx={{
            width: '100%',
            height: 'auto',
            display: { xs: 'none', md: 'block' },
          }}
        />
      </Box>
    </Box>
  );
};
