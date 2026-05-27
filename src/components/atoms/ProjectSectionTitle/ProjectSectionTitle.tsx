import { Typography } from '@mui/material';
import { tokens } from '../../../theme/tokens';

interface ProjectSectionTitleProps {
  title: string;
}

export const ProjectSectionTitle = ({ title }: ProjectSectionTitleProps) => {
  return (
    <Typography
      variant="h3"
      sx={{
        fontFamily: tokens.typography.fontFamily.display,
        fontWeight: tokens.typography.fontWeight.regular, // regular (400)
        fontSize: `${tokens.typography.fontSize[26]}px`, // 26px para ambos os formatos
        color: tokens.colors.text.brand,
        lineHeight: 1.2,
      }}
    >
      {title}
    </Typography>
  );
};
