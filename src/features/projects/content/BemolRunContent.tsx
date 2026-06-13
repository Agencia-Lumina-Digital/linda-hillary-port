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
          flexDirection: 'row',
          gap: { xs: '12px', md: '16px' },
          mt: { xs: '16px', md: '32px' },
          width: '100%',
        }}
      >
        <ProjectInfoCard
          title="54,1% de abandono"
          text="Taxa identificada via funil no UXCam — principal evidência que orientou o redesign"
        />
        <ProjectInfoCard
          title="8 falhas críticas"
          text="Problemas reais relatados pelo suporte: duplicidade, status incorreto, falhas de estoque e desconto"
        />
        <ProjectInfoCard
          title="Fluxo pronto"
          text="Redesign completo entregue e documentado, aguardando priorização"
        />
      </Box>

      {/* Divisória com espaçamento de 16px (mobile) e 32px (desktop) */}
      <ProjectDivider />

      {/* Título da Seção: "O desafio" */}
      <ProjectSectionTitle title="O desafio" />

      {/* Espaçamento de 12px seguido do conteúdo do desafio */}
      <Box sx={{ mt: '12px' }}>
        <ProjectDescription text="A Bemol Run acumulava problemas estruturais que comprometiam a confiança do atleta em um momento crítico: a inscrição. A edição de 2025 expôs falhas que iam além da interface — inconsistências de status pós-pagamento, duplicidade de inscrição, erro no desconto automático para idosos, falhas no estoque de camisas e informações incompletas na confirmação. As reclamações chegavam ao suporte em volume, sinalizando que a experiência falhava em pilares fundamentais: comunicação, operação e confiança." />
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
            'Conduzi sessões com PO, desenvolvedor e QA para revisar cada tela do fluxo existente. O objetivo foi construir um diagnóstico preciso — falhas de clareza, inconsistências visuais e lacunas na arquitetura da informação. O resultado foi um "De x Para" que guiou todas as decisões do redesign.',
          ]}
        />

        <ProjectContentBlock
          title="2. Análise de dados no UXCam"
          paragraphs={[
            'Criei um funil dentro do UXCam para mapear o comportamento real dos usuários na jornada de inscrição. O dado mais crítico: 54,1% de abandono entre quem iniciava o fluxo. A instrumentação original registrava todas as etapas como uma única tela, impedindo identificar o ponto exato de saída — o que reforçou duas entregas do projeto: redesign da experiência e especificação de instrumentação correta para a próxima versão.',
          ]}
        />

        <ProjectContentBlock
          title="3. Reclamações do suporte como bússola"
          paragraphs={[
            'Utilizei os registros do CAB (suporte) como diretriz de redesign. Cada reclamação recorrente virou um requisito de melhoria:',
          ]}
          listItems={[
            'Status travado em "Em processamento" após pagamento confirmado',
            'Ausência de validação contra duplicidade de inscrição',
            'Divergências de dados entre etapas',
            'Falha na trava de estoque de camisas',
            'Erro na identificação automática de idosos para desconto',
            'Campo de personalização de número de peito ausente',
            'Informações incompletas na tela de confirmação',
          ]}
        />

        <ProjectContentBlock
          title="4. Alinhamento com marketing"
          paragraphs={[
            'Revisei todas as copys do fluxo junto ao time de marketing — regulamento, instruções de preparo, avisos e narrativa visual do evento. Em inscrições esportivas, precisão na comunicação é requisito de confiança, não detalhe.',
          ]}
        />

        <ProjectContentBlock
          title="5. Design Critique interno"
          paragraphs={[
            'Apresentei a primeira versão do redesign para critique com o time de design. Os insights refinaram decisões de hierarquia visual, densidade de conteúdo e clareza de instruções — garantindo que a experiência comunicasse responsabilidade e segurança.',
          ]}
        />

        <ProjectContentBlock
          title="6. Reconstrução do fluxo"
          paragraphs={[
            'Redesenhei a jornada completa com base em todos os insumos:',
          ]}
          listItems={[
            'Página inicial e listagem de eventos — reorganizadas com hierarquia clara',
            'Detalhes do evento — conteúdo estruturado em seções expansíveis, reduzindo fadiga cognitiva',
            'Fluxo de inscrição — dividido em etapas claras: dados pessoais, percurso, camisa, pagamento, resumo e confirmação',
            'Padronização com o fluxo de pagamento do Bemol Saúde — já validado em produção',
            'Reconstrução visual completa com o Design System Bemol',
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
        <ProjectDescription text="Por não ter sido priorizado para desenvolvimento, o projeto não gerou métricas reais. Mas a partir de todas as evidências levantadas, foram estabelecidas hipóteses sólidas para orientar a evolução da funcionalidade:" />
        
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
            '✓ Fluxo unificado ao Design System Bemol e padronizado com outros fluxos do app',
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
