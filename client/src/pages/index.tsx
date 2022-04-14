import { FC } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { ROUTES } from './routes';

export const Pages: FC = () => {
  return (
    <Routes>
      {ROUTES.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path='/' element={<Navigate to='/non-normalised' replace />} />
    </Routes>
  );
};
