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
        fontWeight: 600,
        fontSize: { xs: '18px', md: '24px' },
        color: 'rgba(24, 27, 26, 1)',
        lineHeight: 1.4,
      }}
    >
      {title}
    </Typography>
  );
};
