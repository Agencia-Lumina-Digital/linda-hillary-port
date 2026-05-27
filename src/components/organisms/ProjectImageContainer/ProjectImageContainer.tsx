import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Tag } from '../../atoms/Tag/Tag';
import { tokens } from '../../../theme/tokens';

interface ProjectImageContainerProps {
  children?: ReactNode;
  tags: string[];
}

export const ProjectImageContainer = ({ children, tags }: ProjectImageContainerProps) => {
  return (
    <Box
      sx={{
        borderRadius: `${tokens.borderRadius.xl}px`,
        backgroundColor: tokens.colors.background.canvas,
        border: `1px solid ${tokens.colors.border.default}`,
        overflow: 'hidden',
        width: '100%',
        mb: '32px',
      }}
    >
      {/* Área superior para a imagem/conteúdo visual */}
      {children && (
        <Box
          sx={{
            p: { xs: '16px', md: '24px' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderBottom: `1px solid ${tokens.colors.border.default}`,
          }}
        >
          {children}
        </Box>
      )}

      {/* Barra inferior contendo as badges/tags */}
      <Box
        sx={{
          p: { xs: '16px 20px', md: '20px 24px' },
          backgroundColor: tokens.colors.background.canvas,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: { xs: '8px', md: '12px' },
          alignItems: 'center',
        }}
      >
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </Box>
    </Box>
  );
};
