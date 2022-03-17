import { FC } from 'react';

import { styled } from '@mui/material/styles';

export interface ToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const ToggleStyled = styled('span')<Omit<ToggleProps, 'onChange'>>(({ value }) => ({
  cursor: 'pointer',
  display: 'inline-block',
  ...(!value && {
    transform: 'rotate(-90deg)'
  })
}));

export const Toggle: FC<ToggleProps> = ({ value, onChange }) => {
  return (
    <ToggleStyled value={value} onClick={() => onChange(!value)}>
      ▼
    </ToggleStyled>
  );
};
