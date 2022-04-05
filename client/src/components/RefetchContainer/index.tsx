import { Button, Stack } from '@mui/material';
import { FC } from 'react';

export interface RefetchContainerProps {
  onRefetchClick?: () => void;
  buttonTitle?: string;
}

export const RefetchContainer: FC<RefetchContainerProps> = ({ buttonTitle = 'Refetch', onRefetchClick, children }) => {
  return (
    <Stack spacing={2}>
      <Button variant='contained' onClick={onRefetchClick}>
        {buttonTitle}
      </Button>
      {children}
    </Stack>
  );
};
