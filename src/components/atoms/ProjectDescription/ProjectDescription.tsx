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
        fontSize: '16px',
        lineHeight: 1.4,
      }}
    >
      {text}
    </Typography>
  );
};
