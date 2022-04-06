import { IconButton } from '@mui/material';
import Icon from '@mui/icons-material/Cached';
import { FC } from 'react';
import { useApolloClient } from '@apollo/client';

export const CacheReset: FC = () => {
  const client = useApolloClient();

  return (
    <IconButton color='inherit' onClick={() => client.resetStore()}>
      <Icon />
    </IconButton>
  );
};
