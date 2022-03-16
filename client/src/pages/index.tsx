import { FC } from 'react';

import { Routes, Route } from 'react-router-dom';
import { NonNormalised } from './1-non-normalised';
import { Home } from './Home';

export const Pages: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='1-non-normalised' element={<NonNormalised />} />
    </Routes>
  );
};
