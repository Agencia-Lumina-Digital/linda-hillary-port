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
import imgInterface from '../../../theme/assets/projects/loginBemolContent/interface.png';
import imgRelatos from '../../../theme/assets/projects/loginBemolContent/relatos.png';
import imgLoginGoogle from '../../../theme/assets/projects/loginBemolContent/login-google.png';
import imgLoginWhatsapp from '../../../theme/assets/projects/loginBemolContent/login-whatsapp.png';
import imgResultadosDesktop from '../../../theme/assets/projects/loginBemolContent/resultados-desktop.png';
import imgResultadosMobile from '../../../theme/assets/projects/loginBemolContent/resultados-mobile.png';

export const LoginBemolContent = () => {
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
        {['UX Design', 'Mobile', 'Design System', 'Figma'].map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </Box>

      {/* Espaçamento de 8px (mobile) e 10px (desktop) seguido do título */}
      <Box sx={{ mt: { xs: '8px', md: '10px' } }}>
        <ProjectTitle title="Redesign do Login — App Bemol" />
      </Box>

      {/* Espaçamento de 8px (mobile) e 10px (desktop) seguido da descrição */}
      <Box sx={{ mt: { xs: '8px', md: '10px' } }}>
        <ProjectDescription text="Reestruturação completa do fluxo de autenticação do app Bemol, eliminando a dependência exclusiva do e-mail e introduzindo múltiplos métodos de acesso alinhados ao Design System da marca." />
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
          title="1"
          text="Eliminação do ponto único de falha no login"
        />
        <ProjectInfoCard
          title="2"
          text="Fluxo unificado ao Design System Bemol"
        />
        <ProjectInfoCard
          title="3"
          text="Queda nas reclamações nas lojas após o lançamento"
        />
      </Box>

      {/* Divisória com espaçamento de 16px (mobile) e 32px (desktop) */}
      <ProjectDivider />

      {/* Título da Seção: "O desafio" */}
      <ProjectSectionTitle title="O desafio" />

      {/* Espaçamento de 12px seguido da descrição do desafio */}
      <Box sx={{ mt: '12px' }}>
        <ProjectDescription text="O fluxo de login era o principal gargalo de entrada do app. A autenticação dependia exclusivamente do envio de código por e-mail — um canal com alta taxa de falha — gerando abandono, retrabalho do usuário e volume crescente de chamados no suporte. A interface também destoava visualmente do restante do ecossistema Bemol, quebrando a consistência de marca em um point crítico da jornada." />
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
          src={imgInterface}
          alt="Interface do fluxo de login e ponto único de falha"
          sx={{
            width: { xs: '100%', md: 'calc(50% - 8px)' },
            height: 'auto',
            display: 'block',
          }}
        />
        <Box
          component="img"
          src={imgRelatos}
          alt="Relatos dos usuários sobre o fluxo antigo"
          sx={{
            width: { xs: '100%', md: 'calc(50% - 8px)' },
            height: 'auto',
            display: 'block',
          }}
        />
      </Box>

      {/* Divisória abaixo das imagens */}
      <ProjectDivider />

      {/* Título da Seção: "O processo" */}
      <ProjectSectionTitle title="O processo" />

      {/* Conteúdo da seção do processo com margem superior de 12px */}
      <Stack spacing="24px" sx={{ mt: '12px', width: '100%' }}>
        <ProjectContentBlock
          title="1. Diagnóstico com dados reais"
          paragraphs={[
            'Utilizei o UXCam para mapear padrões de comportamento: tentativas repetidas de solicitação de código, fluxos abandonados e pontos de saída concentrados na tela de login. Em paralelo, analisei avaliações nas lojas (App Store e Play Store) para identificar padrões de reclamação — as frustrações iam além da usabilidade e sinalizavam perda de confiança no produto.',
          ]}
          listTitle="Achados principais:"
          listItems={[
            'Dependência de um único canal com baixa confiabilidade',
            'Usuários sem acesso imediato ao e-mail desistiam sem alternativa',
            'Interface inconsistente com o restante do app',
            'Volume crescente de chamados no suporte relacionados ao login',
          ]}
        />

        <ProjectContentBlock
          title="2. Benchmarking de autenticação"
          paragraphs={[
            'Mapeei como players de varejo, bancos digitais e apps de alto volume estruturaram seus fluxos de auth.',
            'Padrões identificados: SMS, WhatsApp e login social como métodos consolidados por confiabilidade e velocidade de entrega. Isso orientou a decisão sobre quais métodos implementar com base em viabilidade técnica e aderência ao perfil do usuário Bemol.',
          ]}
        />

        <ProjectContentBlock
          title="3. Redesenho da jornada"
          paragraphs={[
            'Repositei a arquitetura do fluxo: em vez de um caminho linear com ponto único de falha, a nova jornada apresenta uma tela de escolha de método de autenticação antes da validação. O usuário seleciona o canal (e-mail, WhatsApp ou Google) com base na sua preferência e disponibilidade.',
          ]}
        />

        <ProjectContentBlock
          title="4. Interface e microcopy"
          paragraphs={[
            'Reconstruí todos os componentes dentro do Design System oficial da Bemol — garantindo consistência visual com o app Conta Bemol e o restante do ecossistema. Revisei a microcopy de ponta a ponta: instruções objetivas, mensagens de erro acionáveis e linguagem alinhada ao tom de voz da marca.',
          ]}
        />

        <ProjectContentBlock
          title="5. Colaboração com engenharia e produto"
          paragraphs={[
            'Trabalhei junto ao time técnico e produto para validar regras de negócio, mapear limitations de cada método e garantir robustez nas integrações. O handoff foi feito com especificações detalhadas no Figma — fluxos, estados de erro, variantes de componente e anotações de comportamento.',
          ]}
        />

        <ProjectContentBlock
          listTitle="Entregas:"
          listItems={[
            'Tela de seleção de método de autenticação',
            'Login via WhatsApp (alta taxa de entrega)',
            'Login Social com Google',
            'Fluxo visual unificado com o Design System Bemol',
            'Microcopy revisada em todos os estados do fluxo',
          ]}
        />
      </Stack>

      {/* Mais duas imagens de mockup: margem superior de 12px e gap de 16px */}
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
          src={imgLoginGoogle}
          alt="Interface de login via Google"
          sx={{
            width: { xs: '100%', md: 'calc(50% - 8px)' },
            height: 'auto',
            display: 'block',
          }}
        />
        <Box
          component="img"
          src={imgLoginWhatsapp}
          alt="Interface de escolha de autenticação entre E-mail e WhatsApp"
          sx={{
            width: { xs: '100%', md: 'calc(50% - 8px)' },
            height: 'auto',
            display: 'block',
          }}
        />
      </Box>

      {/* Divisória abaixo das imagens */}
      <ProjectDivider />

      {/* Título da Seção: "Resultado" */}
      <ProjectSectionTitle title="Resultado" />

      {/* Espaçamento de 12px seguido do conteúdo do resultado */}
      <Box sx={{ mt: '12px' }}>
        <ProjectDescription text="O tom das avaliações nas lojas mudou após o lançamento: reclamações sobre login deram lugar a feedbacks positivos sobre agilidade e simplicidade. Os objetivos do projeto foram atingidos:" />
        
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
            '✓ Eliminação do ponto único de falha',
            '✓ Múltiplos métodos de acesso com alta confiabilidade',
            '✓ Interface 100% alinhada ao Design System Bemol',
            '✓ Redução perceptível de fricção e abandono na entrada do app',
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
          src={imgResultadosMobile}
          alt="Telas de resultado do fluxo de login (versão mobile)"
          sx={{
            width: '100%',
            height: 'auto',
            display: { xs: 'block', md: 'none' },
          }}
        />
        {/* Versão Desktop */}
        <Box
          component="img"
          src={imgResultadosDesktop}
          alt="Telas de resultado do fluxo de login (versão desktop)"
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
