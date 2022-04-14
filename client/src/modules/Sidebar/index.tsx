import { FC } from 'react';

import List from '@mui/material/List';
import { ListItemLink } from './ListItemLink';
import { ROUTES } from '@/pages/routes';

export const Sidebar: FC = () => {
  return (
    <List>
      {ROUTES.map(({ path, title }, index) => (
        <ListItemLink key={path} to={path} primary={`${index + 1}. ${title}`} />
      ))}
    </List>
  );
};
