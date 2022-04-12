import { ArgsPart1 } from './ArgsPart1';
import { ArgsPart2 } from './ArgsPart2';
import { CacheUpdate } from './CacheUpdate';
import { FetchPolicy } from './FetchPolicy';
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
  },
  {
    path: 'args_part_2',
    element: <ArgsPart2 />,
    title: 'Args: part 2'
  },
  {
    path: 'fetch_policy',
    element: <FetchPolicy />,
    title: 'Fetch policy'
  },
  {
    path: 'cache_update',
    element: <CacheUpdate />,
    title: 'Cache update (implicit)'
  }
];
