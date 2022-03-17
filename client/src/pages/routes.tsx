import { NonNormalised } from './NonNormalised';
import { Normalised } from './Normalised';

export const ROUTES = [
  {
    path: 'non-normalised',
    element: <NonNormalised />,
    title: 'Non-normalised cache'
  },
  {
    path: 'normalised',
    element: <Normalised />,
    title: 'Normalised cache'
  }
];
