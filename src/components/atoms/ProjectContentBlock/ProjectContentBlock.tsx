import React from 'react';
import { Box, Typography } from '@mui/material';
import { tokens } from '../../../theme/tokens';

interface ProjectContentBlockProps {
  title?: string;
  paragraphs?: string[];
  listTitle?: string;
  listItems?: React.ReactNode[];
}

export const ProjectContentBlock = ({
  title,
  paragraphs,
  listTitle,
  listItems,
}: ProjectContentBlockProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {/* Título: peso bold */}
      {title && (
        <Typography
          sx={{
            fontFamily: tokens.typography.fontFamily.display,
            fontWeight: 'bold', // ou 700
            fontSize: { xs: '14px', md: '16px' },
            color: 'rgba(74, 79, 78, 1)',
            mb: '8px',
            lineHeight: 1.4,
          }}
        >
          {title}
        </Typography>
      )}

      {/* Conteúdo: peso regular */}
      {paragraphs &&
        paragraphs.map((p, idx) => (
          <Typography
            key={idx}
            sx={{
              fontFamily: tokens.typography.fontFamily.display,
              fontWeight: 400,
              fontSize: { xs: '14px', md: '16px' },
              color: 'rgba(74, 79, 78, 1)',
              lineHeight: 1.4,
              mb: idx === paragraphs.length - 1 && !listTitle && !listItems ? 0 : '8px',
            }}
          >
            {p}
          </Typography>
        ))}

      {/* Título de lista (ex: Achados principais) */}
      {listTitle && (
        <Typography
          sx={{
            fontFamily: tokens.typography.fontFamily.display,
            fontWeight: 400,
            fontSize: { xs: '14px', md: '16px' },
            color: 'rgba(74, 79, 78, 1)',
            lineHeight: 1.4,
            mb: '8px',
          }}
        >
          {listTitle}
        </Typography>
      )}

      {/* Itens pontuados */}
      {listItems && (
        <Box
          component="ul"
          sx={{
            m: 0,
            pl: '24px',
            color: 'rgba(74, 79, 78, 1)',
          }}
        >
          {listItems.map((item, idx) => (
            <Box
              component="li"
              key={idx}
              sx={{
                fontFamily: tokens.typography.fontFamily.display,
                fontWeight: 400,
                fontSize: { xs: '14px', md: '16px' },
                color: 'rgba(74, 79, 78, 1)',
                lineHeight: 1.4,
                mb: idx === listItems.length - 1 ? 0 : '4px',
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
