import { Typography } from '@mui/material';
import { tokens } from '../../../theme/tokens';

interface ProjectDescriptionProps {
  text: string;
}

export const ProjectDescription = ({ text }: ProjectDescriptionProps) => {
  return (
    <Typography
      sx={{
        fontFamily: tokens.typography.fontFamily.display,
        color: 'rgba(74, 79, 78, 1)',
        fontWeight: 400,
        fontSize: { xs: '16px', md: '18px' },
        lineHeight: { xs: 1.4, md: 1.6 },
      }}
    >
      {text}
    </Typography>
  );
};
