import { Box, Stack, Typography } from '@mui/material';
import { tokens } from '../../theme/tokens';
import grafismoHero from '../../theme/assets/grafismo-rios-hero.png';
import lindaImage from '../../theme/assets/linda-image.png';

export const About = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        backgroundColor: tokens.colors.background.elevated, // Fundo branco (#FFFFFF)
        mx: { xs: '-24px', md: 'calc(-50vw + 50%)' }, // Sangramento lateral total
        px: { xs: '24px', md: 'calc(50vw - 50%)' }, // Alinhamento interno
        borderBottom: `1px solid ${tokens.colors.border.default}`,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: '48px', md: '80px' }, // Espaçamento fixo limpo sem padding ou margens negativas
          width: '100%',
        }}
      >
        {/* Coluna Esquerda: Imagem com Grafismo Invertido */}
        <Box 
          sx={{ 
            position: 'relative', 
            width: { xs: '100%', md: '400px' }, 
            flexShrink: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Grafismo de fundo (Posicionamento absoluto para ficar atrás, invertido horizontalmente) */}
          <Box
            component="img"
            src={grafismoHero}
            alt=""
            sx={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translate(-50%, -50%) scaleX(-1)', // Inverte horizontalmente e centraliza
              width: '150%',
              maxWidth: 'none',
              zIndex: 1,
              pointerEvents: 'none',
              clipPath: { xs: 'none', md: 'inset(0 0 0 27%)' } // Espelha o corte lateral do hero
            }}
          />

          {/* Imagem de perfil (Dimensões idênticas à seção hero) */}
          <Box sx={{ position: 'relative', zIndex: 2, width: '100%' }}>
            <Box
              component="img"
              src={lindaImage}
              alt="Linda Souza"
              sx={{
                width: '100%',
                height: { xs: 'auto', md: '440px' },
                objectFit: 'cover',
                display: 'block',
                borderRadius: `${tokens.borderRadius.md}px`,
              }}
            />
          </Box>
        </Box>

        {/* Coluna Direita: Conteúdo Textual */}
        <Box sx={{ flexGrow: 1, minWidth: 0, width: '100%' }}>
          <Stack spacing={5}>
            {/* Tagline / Eyebrow */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: 24, height: '1.5px', backgroundColor: tokens.colors.background.brand }} />
              <Typography
                sx={{
                  color: tokens.colors.text.accent,
                  fontWeight: tokens.typography.fontWeight.medium,
                  fontSize: tokens.typography.fontSize[11]
                }}
              >
                Sobre mim
              </Typography>
            </Box>

            {/* Título e Subtítulo */}
            <Stack spacing={1}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: tokens.typography.fontFamily.display,
                  color: tokens.colors.text.brand,
                  fontSize: { xs: tokens.typography.fontSize[26], md: tokens.typography.fontSize[38] },
                  fontWeight: tokens.typography.fontWeight.light,
                  lineHeight: 1.1,
                }}
              >
                Linda Souza
              </Typography>
              <Typography
                sx={{
                  fontFamily: tokens.typography.fontFamily.body,
                  color: tokens.colors.text.secondary,
                  fontSize: { xs: tokens.typography.fontSize[14], md: tokens.typography.fontSize[16] },
                  fontWeight: tokens.typography.fontWeight.regular,
                }}
              >
                Product Designer
              </Typography>
            </Stack>

            {/* Parágrafos de texto */}
            <Stack spacing={3}>
              <Typography
                sx={{
                  color: tokens.colors.text.secondary,
                  fontSize: { xs: tokens.typography.fontSize[14], md: tokens.typography.fontSize[16] },
                  fontWeight: tokens.typography.fontWeight.regular,
                  lineHeight: 1.6,
                }}
              >
                Comecei editando fotos na loja da minha família em Maués e logo percebi que queria unir criatividade com tecnologia para impactar pessoas de verdade. Migrei da Ciência da Computação para o Product Design — justamente para tornar o digital mais humano.
              </Typography>
              <Typography
                sx={{
                  color: tokens.colors.text.secondary,
                  fontSize: { xs: tokens.typography.fontSize[14], md: tokens.typography.fontSize[16] },
                  fontWeight: tokens.typography.fontWeight.regular,
                  lineHeight: 1.6,
                }}
              >
                Nos últimos 3 anos na Bemol Digital, evoluí de estagiária a Designer Júnior construindo o Design System da maior varejista do Norte do Brasil. Aprendi que consistência não acontece por acaso — ela é resultado de colaboração, documentação e disciplina.
              </Typography>
              <Typography
                sx={{
                  color: tokens.colors.text.secondary,
                  fontSize: { xs: tokens.typography.fontSize[14], md: tokens.typography.fontSize[16] },
                  fontWeight: tokens.typography.fontWeight.regular,
                  lineHeight: 1.6,
                }}
              >
                Sou de Manaus — e a Amazônia me ensinou que os melhores sistemas parecem simples na superfície, mas têm profundidade e inteligência em cada detalhe. É assim que penso design.
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
