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
          flexDirection: { xs: 'column', md: 'row' },
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
          text="Fluxo 100% unificado ao Design System Bemol"
        />
        <ProjectInfoCard
          title="3"
          text="Queda nas reclamações após o lançamento"
        />
      </Box>

      {/* Divisória com espaçamento de 16px (mobile) e 32px (desktop) */}
      <ProjectDivider />

      {/* Título da Seção: "O desafio" */}
      <ProjectSectionTitle title="O desafio" />

      {/* Espaçamento de 12px seguido da descrição do desafio */}
      <Box sx={{ mt: '12px' }}>
        <ProjectDescription text="A tela de login – o primeiro ponto de contato do app – havia se tornado o principal gargalo de entrada. A autenticação dependia exclusivamente do envio de um código por e-mail: um canal com alta taxa de falha, que gerava abandono, retrabalho do usuário e volume crescente de chamados no suporte. Para piorar, a interface destoava visualmente do restante do ecossistema Bemol, quebrando a consistência de marca justamente no momento mais crítico da jornada – a porta de entrada." />
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
            'Antes de propor qualquer solução, precisava entender a real dimensão do problema. Cruzei duas fontes: o comportamento dos usuários no UXCam (tentativas repetidas de solicitação de código, fluxos abandonados, pontos de saída concentrados na tela de login) e as avaliações nas lojas de aplicativo (App Store e Play Store), onde as reclamações revelavam algo além de usabilidade – havia perda de confiança no produto.',
            'Isso confirmou 4 achados que guiaram todo o resto do projeto:',
          ]}
          listItems={[
            'Dependência de um único canal (e-mail) com baixa confiabilidade de entrega',
            'Usuários sem acesso imediato ao e-mail simplesmente desistiam, sem alternativa',
            'Interface inconsistente com o restante do app, gerando estranhamento',
            'Volume crescente de chamados de suporte relacionados especificamente ao login',
          ]}
        />

        <ProjectContentBlock
          title="2. Benchmarking estratégico"
          paragraphs={[
            'Antes de decidir quais métodos de login implementar, mapeei como players de varejo, bancos digitais e apps de alto volume estruturaram seus fluxos de autenticação. O padrão era claro: SMS, WhatsApp e login social apareciam consolidados por confiabilidade e velocidade de entrega – em contraste direto com a fragilidade do e-mail que a Bemol usava sozinho. Essa análise orientou a escolha final dos métodos, com base em viabilidade técnica e aderência ao perfil do usuário Bemol (não bastava ser "moderno", precisava funcionar para a base real de clientes).',
          ]}
        />

        <ProjectContentBlock
          title="3. Redesenho da jornada"
          paragraphs={[
            'Com o diagnóstico e o benchmark em mãos, reposicionei a arquitetura do fluxo: em vez de um caminho linear com um único ponto de falha, a nova jornada apresenta uma tela de escolha de método antes da validação. O usuário passa a decidir por onde prefere receber o código (e-mail, WhatsApp) ou fazer login via Google, de acordo com o que tem disponível no momento – a decisão de segurança/conveniência sai da mão do sistema e vai para a mão de quem está usando.',
          ]}
        />

        <ProjectContentBlock
          title="4. Interface e microcopy alinhadas ao Design System"
          paragraphs={[
            'Reconstruí todos os componentes da tela dentro do Design System oficial da Bemol, o que resolveu de uma vez a inconsistência visual com o restante do ecossistema. Revisei a microcopy ponta a ponta: instruções mais objetivas, mensagens de erro acionáveis (que dizem o que fazer, não só o que deu errado) e um tom de voz alinhado à marca – reduzindo a sensação de fricção que os relatos de usuário deixavam clara.',
          ]}
        />

        <ProjectContentBlock
          title="5. Colaboração com engenharia e produto"
          paragraphs={[
            'Trabalhei lado a lado com o time técnico e de produto durante todo o desenvolvimento, para validar regras de negócio, mapear as limitações técnicas de cada método (nem todo canal tem a mesma taxa de entrega ou o mesmo custo) e garantir que as integrações fossem robustas o suficiente para um app com +3mil de acessos diários. O handoff foi feito com especificações detalhadas no Figma: fluxos completos, estados de erro, variantes de componente e anotações de comportamento – para que nada se perdesse entre o que foi desenhado e o que foi construído.',
          ]}
        />

        <ProjectContentBlock
          paragraphs={['Entregas:']}
          listItems={[
            'Tela de seleção de método de autenticação',
            'Login via WhatsApp (alta taxa de entrega)',
            'Login social com Google',
            'Fluxo 100% unificado ao Design System Bemol',
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
        <ProjectDescription text="O tom das avaliações nas lojas mudou de forma perceptível após o lançamento: reclamações sobre login reduziram significativamente. Mais do que resolver um problema técnico, o projeto transformou a porta de entrada do app – de um obstáculo que gerava desconfiança para uma experiência que transmite exatamente o oposto." />
        
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
            '✓ Eliminação do ponto único de falha no login',
            '✓ Múltiplos métodos de acesso, com alta confiabilidade de entrega',
            '✓ Interface 100% alinhada ao Design System Bemol',
            '✓ Redução perceptível de fricção e abandono na entrada do app',
            '✓ Redução de +70% dos comentários nas lojas de aplicativos relacionados ao login',
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
