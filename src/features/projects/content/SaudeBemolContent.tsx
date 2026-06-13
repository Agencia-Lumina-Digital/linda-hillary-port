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
          flexDirection: 'row',
          gap: { xs: '12px', md: '16px' },
          mt: { xs: '16px', md: '32px' },
          width: '100%',
        }}
      >
        <ProjectInfoCard
          title="Nova frente estratégica"
          text="Primeiro serviço de saúde digital da Bemol, dentro do app principal"
        />
        <ProjectInfoCard
          title="Complexidade mascarada"
          text="Buffers logísticos, elegibilidade e regras médicas invisíveis ao usuário final"
        />
        <ProjectInfoCard
          title="Metas definidas"
          text="75–80% de taxa de conclusão e NPS +50 como critérios de sucesso pós-lançamento"
        />
      </Box>

      {/* Divisória com espaçamento de 16px (mobile) e 32px (desktop) */}
      <ProjectDivider />

      {/* Título da Seção: "O desafio" */}
      <ProjectSectionTitle title="O desafio" />

      {/* Espaçamento de 12px seguido do conteúdo do desafio */}
      <Box sx={{ mt: '12px' }}>
        <ProjectDescription text="A Bemol Farma opera mais de 42 unidades físicas e já oferecia exames laboratoriais e vacinação com presença consolidada na região. O desafio era levar essa confiança para o digital — sem simplificar a complexidade operacional do modelo domiciliar." />
      </Box>

      <Box sx={{ mt: '16px' }}>
        <ProjectDescription text="Restrições que o design precisava absorver:" />
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
          'Agendamento exclusivo para maiores de idade',
          'Atendimento 100% domiciliar — sem opção presencial',
          'Equipes móveis com deslocamento via Uber',
          'Buffers obrigatórios de 60 minutos entre atendimentos',
          'Toda essa lógica deveria ser invisível para o usuário',
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

      {/* Divisória no final */}
      <ProjectDivider />

      {/* Título da Seção: "O processo" */}
      <ProjectSectionTitle title="O processo" />

      {/* Conteúdo da seção do processo com margem superior de 12px */}
      <Stack spacing="24px" sx={{ mt: '12px', width: '100%' }}>
        <ProjectContentBlock
          title="1. Organização dos insumos de pesquisa"
          paragraphs={[
            'Estruturei os materiais de entrada e saída do cliente oculto conduzido pela liderança de design — que percorreu a jornada real de agendamento presencial, do primeiro contato via WhatsApp até o recebimento do laudo. Organizei os achados em padrões acionáveis: fricções, expectativas críticas e momentos de confiança. Esse mapeamento foi a base para todas as decisões de fluxo e microcopy.',
          ]}
        />

        <ProjectContentBlock
          title="2. Benchmarking estratégico"
          paragraphs={[
            'Em dupla com o designer sênior da equipe, analisei apps de laboratórios, clínicas digitais e serviços domiciliares de saúde. Foco em: organização de informações sensíveis, apresentação de preparo de exames, exibição de disponibilidade de horários e padrões de comunicação que transmitem confiança em contexto de saúde.',
          ]}
        />

        <ProjectContentBlock
          title="3. Alinhamentos com produto, negócio e operação"
          paragraphs={[
            'Participei dos ciclos de refinamento com produto e área de saúde para traduzir regras médicas e operacionais em decisões de design — elegibilidade, preparo, descrição dos exames e comportamento esperado em cada etapa. Cada decisão de interface tinha uma regra de negócio correspondente validada.',
          ]}
        />

        <ProjectContentBlock
          title="4. Construção do fluxo e UI"
          paragraphs={['Desenvolvemos em dupla o fluxo completo de agendamento:']}
          listItems={[
            'Seleção de exames — categorias organizadas, objetivas e escaneáveis',
            'Detalhes do exame — o que é, como funciona e preparo necessário',
            'Agendamento — apenas horários válidos após cálculo logístico completo',
            'Endereço — confirmação do local para atendimento domiciliar',
            'Pagamento — fechamento seguro e transparente',
          ]}
        />

        <Typography
          sx={{
            fontFamily: tokens.typography.fontFamily.body,
            fontWeight: tokens.typography.fontWeight.regular,
            fontSize: '14px',
            color: tokens.colors.text.secondary,
            lineHeight: 1.6,
            mt: '4px', // Alinhado ao topo
          }}
        >
          Todos os componentes construídos dentro do Design System Bemol. Foco em transmitir confiança, previsibilidade e humanização — requisitos não negociáveis em serviços de saúde.
        </Typography>
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
        <ProjectDescription text="Projeto entregue para desenvolvimento, ainda não lançado. Os resultados serão medidos pós-lançamento com base nas metas definidas:" />
        
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
            '✓ Fluxo de agendamento domiciliar 100% digital — inédito no ecossistema Bemol',
            '✓ Complexidade operacional abstraída sem comprometer clareza para o usuário',
            '✓ Interface alinhada ao Design System Bemol',
            '✓ Meta: 75–80% de taxa de conclusão de agendamento',
            '✓ Meta: NPS +50 no serviço',
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
