import { Typography } from '@mui/material';
import { tokens } from '../../../theme/tokens';

interface ProjectDescriptionProps {
  text: string;
}

export const ProjectDescription = ({ text }: ProjectDescriptionProps) => {
  return (
    <Typography
      sx={{
        fontFamily: tokens.typography.fontFamily.body,
        color: tokens.colors.text.secondary,
        fontWeight: tokens.typography.fontWeight.regular,
        fontSize: { xs: '14px', md: '16px' },
        lineHeight: 1.6,
      }}
    >
      {text}
    </Typography>
  );
};
