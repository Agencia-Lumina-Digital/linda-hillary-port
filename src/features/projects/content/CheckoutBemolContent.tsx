import { Box } from '@mui/material';
import { Tag } from '../../../components/atoms/Tag/Tag';
import { ProjectTitle } from '../../../components/atoms/ProjectTitle/ProjectTitle';
import { ProjectDescription } from '../../../components/atoms/ProjectDescription/ProjectDescription';
import { ProjectInfoCard } from '../../../components/atoms/ProjectInfoCard/ProjectInfoCard';
import { ProjectDivider } from '../../../components/atoms/ProjectDivider/ProjectDivider';
import { ProjectSectionTitle } from '../../../components/atoms/ProjectSectionTitle/ProjectSectionTitle';
import { ProjectContentBlock } from '../../../components/atoms/ProjectContentBlock/ProjectContentBlock';

// Importação das imagens do projeto
import imgMapeamentoDesktop from '../../../theme/assets/projects/CheckoutBemolContent/mapeamento-desktop.png';
import imgMapeamentoMobile from '../../../theme/assets/projects/CheckoutBemolContent/mapeamento-mobile.png';
import imgSegundoMapeamentoDesktop from '../../../theme/assets/projects/CheckoutBemolContent/segundo-mapeamento-desktop.png';
import imgSegundoMapeamentoMobile from '../../../theme/assets/projects/CheckoutBemolContent/segundo-mapeamento-mobile.png';
import imgCenarioEntregaDesktop from '../../../theme/assets/projects/CheckoutBemolContent/cenario-entrega-desktop.png';
import imgCenarioEntregaMobile from '../../../theme/assets/projects/CheckoutBemolContent/cenario-entrega-mobile.png';
import imgCenarioRetiradaDesktop from '../../../theme/assets/projects/CheckoutBemolContent/cenario-retirada-desktop.png';
import imgCenarioRetiradaMobile from '../../../theme/assets/projects/CheckoutBemolContent/cenario-retirada-mobile.png';

export const CheckoutBemolContent = () => {
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
        {['UXCam', 'E-commerce', 'Design System', 'Figma'].map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </Box>

      {/* Espaçamento de 8px (mobile) e 10px (desktop) seguido do título */}
      <Box sx={{ mt: { xs: '8px', md: '10px' } }}>
        <ProjectTitle title="Quebra de Pacotes – Checkout Bemol" />
      </Box>

      {/* Espaçamento de 8px (mobile) e 10px (desktop) seguido da descrição */}
      <Box sx={{ mt: { xs: '8px', md: '10px' } }}>
        <ProjectDescription text="Tornar visível, no checkout, uma complexidade logística que o backend já resolvia – múltiplas origens de expedição (Centro de Distribuição, lojas físicas, embarcações) – sem transformar essa complexidade em ansiedade para o cliente." />
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
          text="Mais de 10 combinações reais de modalidade de entrega mapeadas e traduzidas em uma experiência única"
        />
        <ProjectInfoCard
          title="2"
          text="Solução pensada mobile-first, alinhada ao contexto logístico amazônico (rios, distâncias, embarcações)"
        />
        <ProjectInfoCard
          title="3"
          text="Projeto em desenvolvimento, com escopo adaptado em tempo real a uma mudança de direção do negócio"
        />
      </Box>

      {/* Divisória com espaçamento de 16px (mobile) e 32px (desktop) */}
      <ProjectDivider />

      {/* Título da Seção: "O desafio" */}
      <ProjectSectionTitle title="O desafio" />

      {/* Espaçamento de 12px seguido da descrição do desafio */}
      <Box sx={{ mt: '12px' }}>
        <ProjectDescription text="A Amazônia desafia qualquer padrão tradicional de e-commerce: em um território onde rios substituem estradas e centenas de cidades dependem de embarcações para receber encomendas, a experiência de compra precisa acompanhar uma logística que muda conforme a geografia. O backend da Bemol já lidava com essa complexidade – cada pedido podia ser dividido em múltiplos pacotes com origens distintas (CD, lojas físicas, embarcação), cada um com prazo real baseado em estoque, rota e localização. O checkout, porém, não mostrava nada disso: era um scroll único que misturava retirada, entrega e embarcação sem hierarquia, exibindo um prazo genérico de uma &quot;darkstore&quot; fictícia em vez do prazo real de cada pacote. O resultado: clientes que recebiam parte da compra primeiro e acreditavam ter sido enganados, gerando uma onda de reclamações. O problema não era a operação – era a interface escondendo uma lógica que já existia." />
      </Box>

      {/* Divisória com espaçamento de 16px (mobile) e 32px (desktop) */}
      <ProjectDivider />

      {/* Título da Seção: "O processo" */}
      <ProjectSectionTitle title="O processo" />

      {/* Box contendo os blocos do processo com gap de 24px */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', mt: '12px' }}>
        <ProjectContentBlock
          title="1. Observando a experiência real pelo olhar do usuário"
          paragraphs={[
            'Antes de desenhar qualquer tela, mergulhei no checkout via UXCam. Vi usuários tentando rolar com o scroll travando, passando quatro ou cinco vezes pelo mesmo bloco de entrega, abandonando a jornada por confusão, e reclamando que "faltava um produto" quando, na verdade, apenas o prazo daquele item era diferente. Ficou claro que o problema era estrutural, não superficial.',
          ]}
        />
        <ProjectContentBlock
          title="2. Benchmark com referências saudáveis"
          paragraphs={[
            'Em dupla com o designer sênior do time, analisei como players maduros de e-commerce – Amazon, Mercado Livre, Carrefour e Americanas – lidam com complexidade no checkout. A lição foi direta: quando existe complexidade, existe orientação. Quase todos dividem o checkout em etapas claras – não por estética, mas para reduzir carga cognitiva e reforçar previsibilidade.',
          ]}
        />
        <ProjectContentBlock
          title="3. Entendendo o que o cliente não via"
          paragraphs={[
            'O mapeamento das combinações de entrega foi levantado pelo time de produto em conjunto com logística, e chegou até mim como insumo: a Bemol opera mais de 10 combinações diferentes – retirada com ou sem quebra, entrega com ou sem quebra, retirada + entrega no mesmo pedido, embarcação combinada com outras modalidades, exceções por CEP, loja e cobertura. A partir desse levantamento, entrei com algumas perguntas: onde exatamente existiam restrições de combinação – por exemplo, se um pacote via embarcação poderia quebrar com outro pacote também via embarcação, ou se havia limites de coexistência entre modalidades. Essas dúvidas ajudaram a definir com precisão o que a interface precisava (e não precisava) representar. Para o cliente, até então, tudo aparecia como um único caminho linear.',
          ]}
        />
        <ProjectContentBlock
          title="4. A proposta inicial: checkout em etapas"
          paragraphs={[
            'Com base em tudo isso, eu e o designer sênior do time propusemos – e alinhamos com produto e engenharia – migrar de um scroll único para um fluxo guiado: Carrinho → Entrega → Pagamento → Resumo → Confirmação. A lógica: etapas reduzem sobrecarga mental, dão espaço para explicar a quebra de pacotes de forma natural, tornam o processo previsível e preparam a superfície para o Norte Design System. Foi a decisão mais criteriosa do projeto até aquele ponto – construída a partir do comportamento real do usuário e da lógica real do sistema, não de preferência estética.',
          ]}
        />
        <ProjectContentBlock
          title="5. Adaptação a uma mudança de escopo"
          paragraphs={[
            'Antes da implementação, uma decisão de negócio – motivada por prazo, e externa ao time de design – definiu manter o checkout como página única, em vez de dividido em etapas. Em vez de insistir na solução original, adaptei a proposta ao novo escopo: o princípio central do projeto (tornar visível o que já acontecia no backend, sem adicionar complexidade percebida) permaneceu o mesmo, mas a forma mudou. Na direção atual, a quebra de pacotes é detectada dinamicamente a partir do CEP informado pelo cliente – o sistema já sinaliza, ainda no carrinho, quais itens terão entregas separadas e com quais prazos, sem exigir uma nova arquitetura de páginas.',
          ]}
        />
        <ProjectContentBlock
          title="6. Redesenho da comunicação de entrega"
          paragraphs={[
            'Independentemente do formato (etapas ou página única), o coração do problema continuava o mesmo: comunicar a quebra de pacotes com clareza, transparência e hierarquia visual, sem gerar ansiedade. Criei componentes novos, reorganizei blocos de informação e introduzi micro-explicações no momento certo – antes que a dúvida aparecesse, não depois.',
          ]}
        />
        <ProjectContentBlock
          listTitle="Entregas:"
          listItems={[
            'Detecção dinâmica de quebra de pacotes a partir do CEP, exibida desde o carrinho',
            'Componentes de comunicação de prazo e origem por pacote',
            'Suporte a modalidades combinadas (ex: retirada em loja + entrega domiciliar no mesmo pedido)',
            'Ajustes de carrinho e pagamento para sustentar a nova comunicação (hierarquia, linguagem, redução de ruído visual)',
          ]}
        />

        {/* Primeira Imagem: Mapeamento da jornada atual */}
        <Box sx={{ width: '100%' }}>
          <Box
            component="img"
            src={imgMapeamentoMobile}
            alt="Mapeamento da jornada atual - MOBILE"
            sx={{
              width: '100%',
              height: 'auto',
              display: { xs: 'block', md: 'none' },
            }}
          />
          <Box
            component="img"
            src={imgMapeamentoDesktop}
            alt="Mapeamento da jornada atual - DESKTOP"
            sx={{
              width: '100%',
              height: 'auto',
              display: { xs: 'none', md: 'block' },
            }}
          />
        </Box>

        {/* Segunda Imagem: Segundo mapeamento */}
        <Box sx={{ width: '100%' }}>
          <Box
            component="img"
            src={imgSegundoMapeamentoMobile}
            alt="Segundo mapeamento - MOBILE"
            sx={{
              width: '100%',
              height: 'auto',
              display: { xs: 'block', md: 'none' },
            }}
          />
          <Box
            component="img"
            src={imgSegundoMapeamentoDesktop}
            alt="Segundo mapeamento - DESKTOP"
            sx={{
              width: '100%',
              height: 'auto',
              display: { xs: 'none', md: 'block' },
            }}
          />
        </Box>
      </Box>

      {/* Divisória após as imagens */}
      <ProjectDivider />

      {/* Título da Seção: "Resultado" */}
      <ProjectSectionTitle title="Resultado" />

      {/* Espaçamento de 12px seguido do conteúdo do resultado */}
      <Box sx={{ mt: '12px' }}>
        <ProjectContentBlock
          paragraphs={[
            'O projeto ainda está em desenvolvimento junto ao time técnico — não há métricas reais ainda. As metas de negócio que vão validar a solução quando estiver no ar:',
          ]}
          listItems={[
            '→ Redução de fricção e ansiedade na jornada de compra, com quebra de pacotes transparente desde o carrinho',
            '→ Viabilização de modalidades antes impossíveis (retirada + entrega no mesmo pedido)',
            '→ Melhora no percentual de pedidos entregues dentro do prazo (OTIF)',
            '→ Redução na taxa de cancelamento por divergência de prazo ou estoque',
            '→ Base arquitetural para expansão futura do modelo logístico da Bemol',
          ]}
        />

        {/* Box contendo as imagens com gap de 24px */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', mt: '24px' }}>
          {/* Cenário de Entrega com Quebra de Pacotes */}
          <Box sx={{ width: '100%' }}>
            <Box
              component="img"
              src={imgCenarioEntregaMobile}
              alt="Cenário de Entrega com Quebra de Pacotes - MOBILE"
              sx={{
                width: '100%',
                height: 'auto',
                display: { xs: 'block', md: 'none' },
              }}
            />
            <Box
              component="img"
              src={imgCenarioEntregaDesktop}
              alt="Cenário de Entrega com Quebra de Pacotes - DESKTOP"
              sx={{
                width: '100%',
                height: 'auto',
                display: { xs: 'none', md: 'block' },
              }}
            />
          </Box>

          {/* Cenário de Retirada com Quebra de Pacotes */}
          <Box sx={{ width: '100%' }}>
            <Box
              component="img"
              src={imgCenarioRetiradaMobile}
              alt="Cenário de Retirada com Quebra de Pacotes - MOBILE"
              sx={{
                width: '100%',
                height: 'auto',
                display: { xs: 'block', md: 'none' },
              }}
            />
            <Box
              component="img"
              src={imgCenarioRetiradaDesktop}
              alt="Cenário de Retirada com Quebra de Pacotes - DESKTOP"
              sx={{
                width: '100%',
                height: 'auto',
                display: { xs: 'none', md: 'block' },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
