import { Box, Stack, Typography } from '@mui/material';
import { Tag } from '../../../components/atoms/Tag/Tag';
import { ProjectTitle } from '../../../components/atoms/ProjectTitle/ProjectTitle';
import { ProjectDescription } from '../../../components/atoms/ProjectDescription/ProjectDescription';
import { ProjectInfoCard } from '../../../components/atoms/ProjectInfoCard/ProjectInfoCard';
import { ProjectDivider } from '../../../components/atoms/ProjectDivider/ProjectDivider';
import { ProjectSectionTitle } from '../../../components/atoms/ProjectSectionTitle/ProjectSectionTitle';
import { ProjectContentBlock } from '../../../components/atoms/ProjectContentBlock/ProjectContentBlock';
import { tokens } from '../../../theme/tokens';

// Importação das imagens do projeto
import imgBenchmarking from '../../../theme/assets/projects/SaudeBemolContent/benchmarking.png';
import imgCliente from '../../../theme/assets/projects/SaudeBemolContent/cliente.png';
import imgResultadoDesktop from '../../../theme/assets/projects/SaudeBemolContent/resultado desktop.png';
import imgResultadoMobile from '../../../theme/assets/projects/SaudeBemolContent/resultado mobile.png';

export const SaudeBemolContent = () => {
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
        <ProjectTitle title="Bemol Saúde — Agendamento de Exames" />
      </Box>

      {/* Espaçamento de 8px (mobile) e 10px (desktop) seguido da descrição */}
      <Box sx={{ mt: { xs: '8px', md: '10px' } }}>
        <ProjectDescription text="Criação do fluxo de agendamento de exames laboratoriais domiciliares no app Bemol — inaugurando a frente de saúde digital da Bemol Farma e traduzindo regras médicas, logísticas e operacionais em uma experiência simples e confiável." />
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
          text="Primeira frente de saúde digital da Bemol, dentro do app principal"
        />
        <ProjectInfoCard
          title="2"
          text="Complexidade logística (buffers, elegibilidade, roteirização) totalmente invisível ao usuário"
        />
        <ProjectInfoCard
          title="3"
          text="Metas definidas: 75-80% de taxa de conclusão e NPS +50 como critérios de sucesso pós-lançamento"
        />
      </Box>

      {/* Divisória com espaçamento de 16px (mobile) e 32px (desktop) */}
      <ProjectDivider />

      {/* Título da Seção: "O desafio" */}
      <ProjectSectionTitle title="O desafio" />

      {/* Espaçamento de 12px seguido do conteúdo do desafio */}
      <Box sx={{ mt: '12px' }}>
        <ProjectDescription text="A Bemol Farma opera mais de 42 unidades físicas e já tinha presença consolidada em exames laboratoriais e vacinação – o próximo passo natural era levar essa confiança para o digital. O desafio não era só desenhar uma boa interface: era absorver, no design, um modelo operacional cheio de restrições invisíveis ao usuário – agendamento restrito a maiores de idade, atendimento 100% domiciliar (sem opção presencial), equipes móveis com deslocamento via Uber e buffers obrigatórios de 60 minutos entre atendimentos. Toda essa complexidade precisava desaparecer na experiência final, sem comprometer a confiança que a marca já tinha construído fisicamente." />
      </Box>

      {/* Divisória no final */}
      <ProjectDivider />

      {/* Título da Seção: "O processo" */}
      <ProjectSectionTitle title="O processo" />
      
      {/* Subtítulo / Descrição inicial do processo */}
      <Box sx={{ mt: '4px' }}>
        <ProjectDescription text="(projeto conduzido em dupla com um designer sênior do time, com apoio da liderança – as etapas abaixo deixam claro onde cada contribuição específica entrou)" />
      </Box>

      {/* Conteúdo da seção do processo com margem superior de 12px */}
      <Stack spacing="24px" sx={{ mt: '12px', width: '100%' }}>
        <ProjectContentBlock
          title="1. Organização dos insumos de pesquisa"
          paragraphs={[
            'A liderança de design conduziu um cliente oculto completo, percorrendo a jornada real de quem hoje agenda um exame presencialmente – do primeiro contato via WhatsApp até o recebimento do laudo. Dei apoio ao designer sênior do time na estruturação desse material bruto, organizando os achados em padrões acionáveis: fricções, expectativas críticas e momentos de confiança. Esse mapeamento se tornou a base para as decisões de fluxo e microcopy que vieram depois.',
          ]}
        />

        <ProjectContentBlock
          title="2. Benchmarking estratégico"
          paragraphs={[
            'Em dupla com o designer sênior da equipe, analisei aplicativos de laboratórios, clínicas digitais e serviços domiciliares de saúde – com foco em como esses produtos organizam informações sensíveis, apresentam preparo de exames, exibem disponibilidade de horários e constroem confiança num contexto onde o erro tem consequência real.',
          ]}
        />

        <ProjectContentBlock
          title="3. Alinhamentos com produto, negócio e operação"
          paragraphs={[
            'Participei dos ciclos de refinamento com produto e a área de saúde para traduzir regras médicas e operacionais em decisões de design – elegibilidade, preparo de exame, descrição de procedimentos e comportamento esperado em cada etapa. Cada decisão de interface tinha uma regra de negócio validada por trás; nada foi definido só "porque parecia certo".',
          ]}
        />

        <ProjectContentBlock
          title="4. Construção do fluxo e UI"
          paragraphs={[
            'Desenvolvemos, em dupla, o fluxo completo de agendamento: seleção de exames (categorias organizadas e escaneáveis), detalhes do exame (o que é, como funciona, preparo necessário), agendamento (exibindo apenas horários já validados pelo cálculo logístico completo), endereço (confirmação do local de atendimento domiciliar) e pagamento (fechamento seguro e transparente). Todos os componentes foram construídos dentro do Norte Design System – incluindo um novo componente de agendamento, que passou a integrar o sistema como peça reutilizável para futuras features baseadas em serviço.',
          ]}
        />

        <ProjectContentBlock
          paragraphs={['Entregas:']}
          listItems={[
            'Fluxo completo de agendamento domiciliar, ponta a ponta',
            'Novo componente de agendamento incorporado ao Design System Bemol',
            'Documentação de regras de elegibilidade e lógica logística traduzidas para decisões de interface',
          ]}
        />
      </Stack>

      {/* Imagens do projeto: uma acima da outra no mobile e web, margem do topo de 12px e gap de 16px */}
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
          src={imgBenchmarking}
          alt="Benchmarking estratégico"
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
        <Box
          component="img"
          src={imgCliente}
          alt="Cliente oculto"
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </Box>

      {/* Divisória no final das imagens */}
      <ProjectDivider />

      {/* Título da Seção: "Resultado" */}
      <ProjectSectionTitle title="Resultado" />

      {/* Espaçamento de 12px seguido do conteúdo do resultado */}
      <Box sx={{ mt: '12px' }}>
        <ProjectDescription text="Projeto entregue para desenvolvimento, ainda não lançado – os resultados reais serão medidos pós-lançamento. As metas que definem sucesso:" />
        
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
            '✓ Fluxo de agendamento domiciliar 100% digital – inédito no ecossistema Bemol',
            '✓ Complexidade operacional (buffers, elegibilidade, roteirização) abstraída sem comprometer clareza para o usuário',
            '✓ Interface 100% alinhada ao Design System Bemol, com novo componente reutilizável',
            '→ Meta: 75-80% de taxa de conclusão de agendamento',
            '→ Meta: NPS +50 no serviço',
            '→ Meta: 25-35% de adoção do atendimento domiciliar',
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
          alt="Telas de resultado do agendamento (versão mobile)"
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
          alt="Telas de resultado do agendamento (versão desktop)"
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
