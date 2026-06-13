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
      {/* Título: peso bold, tamanho 14px, cor secondary */}
      {title && (
        <Typography
          sx={{
            fontFamily: tokens.typography.fontFamily.body,
            fontWeight: 'bold', // 700/bold conforme solicitado
            fontSize: '14px',
            color: tokens.colors.text.secondary,
            mb: '8px',
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>
      )}

      {/* Conteúdo: peso regular, tamanho 14px, cor secondary */}
      {paragraphs &&
        paragraphs.map((p, idx) => (
          <Typography
            key={idx}
            sx={{
              fontFamily: tokens.typography.fontFamily.body,
              fontWeight: tokens.typography.fontWeight.regular, // regular (400)
              fontSize: '14px',
              color: tokens.colors.text.secondary,
              lineHeight: 1.6,
              mb: idx === paragraphs.length - 1 && !listTitle && !listItems ? 0 : '12px',
            }}
          >
            {p}
          </Typography>
        ))}

      {/* Título de lista (ex: Achados principais): peso regular, tamanho 14px, cor secondary */}
      {listTitle && (
        <Typography
          sx={{
            fontFamily: tokens.typography.fontFamily.body,
            fontWeight: tokens.typography.fontWeight.regular,
            fontSize: '14px',
            color: tokens.colors.text.secondary,
            lineHeight: 1.6,
            mb: '6px',
          }}
        >
          {listTitle}
        </Typography>
      )}

      {/* Itens pontuados: peso regular, tamanho 14px, cor secondary */}
      {listItems && (
        <Box
          component="ul"
          sx={{
            m: 0,
            pl: '20px',
            color: tokens.colors.text.secondary,
          }}
        >
          {listItems.map((item, idx) => (
            <Box
              component="li"
              key={idx}
              sx={{
                fontFamily: tokens.typography.fontFamily.body,
                fontWeight: tokens.typography.fontWeight.regular,
                fontSize: '14px',
                color: tokens.colors.text.secondary,
                lineHeight: 1.6,
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
