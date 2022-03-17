import { FC } from 'react';

import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';

import { ROUTES } from './routes';

export const Pages: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {ROUTES.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};
