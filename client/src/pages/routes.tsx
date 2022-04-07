import { ArgsPart1 } from './ArgsPart1';
import { IndirectUpdate } from './IndirectUpdate';
import { MultipleQueries } from './MultipleQueries';
import { NonNormalised } from './NonNormalised';
import { Normalised } from './Normalised';
import { ObserverUsage } from './ObserverUsage';

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
  },
  {
    path: 'multiple_queries',
    element: <MultipleQueries />,
    title: 'Multiple queries'
  },
  {
    path: 'indirect_update',
    element: <IndirectUpdate />,
    title: 'Indirect update'
  },
  {
    path: 'observer_usage',
    element: <ObserverUsage />,
    title: 'Observer usage'
  },
  {
    path: 'args_part_1',
    element: <ArgsPart1 />,
    title: 'Args: part 1'
  }
];
