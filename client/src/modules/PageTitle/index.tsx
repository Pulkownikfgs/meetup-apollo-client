import { ROUTES } from '@/pages/routes';
import { Typography } from '@mui/material';
import { FC, useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

export const PageTitle: FC = () => {
  const { pathname } = useLocation();
  const currentTitle = useMemo(() => ROUTES.find(({ path }) => matchPath(path, pathname)), [pathname]);

  return (
    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
      {currentTitle?.title ?? ''}
    </Typography>
  );
};
