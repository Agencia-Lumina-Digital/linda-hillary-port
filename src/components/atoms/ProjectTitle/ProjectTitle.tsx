import { Typography } from '@mui/material';
import { tokens } from '../../../theme/tokens';

interface ProjectTitleProps {
  title: string;
}

export const ProjectTitle = ({ title }: ProjectTitleProps) => {
  return (
    <Typography
      variant="h2"
      sx={{
        fontFamily: tokens.typography.fontFamily.display,
        color: tokens.colors.text.brand,
        fontSize: { xs: tokens.typography.fontSize[26], md: tokens.typography.fontSize[38] },
        fontWeight: tokens.typography.fontWeight.medium,
        lineHeight: 1.2,
      }}
    >
      {title}
    </Typography>
  );
};
