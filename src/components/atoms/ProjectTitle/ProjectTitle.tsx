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
        color: 'rgba(15, 91, 82, 1)',
        fontSize: { xs: '24px', md: '36px' },
        fontWeight: 600,
        lineHeight: 1.4,
      }}
    >
      {title}
    </Typography>
  );
};
