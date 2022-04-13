import { ArgsPart1 } from './ArgsPart1';
import { Pagination } from './Pagination';
import { CacheUpdate } from './CacheUpdate';
import { CacheUpdateExplicit } from './CacheUpdateExplicit';
import { FetchPolicy } from './FetchPolicy';
import { IndirectUpdate } from './IndirectUpdate';
import { MultipleQueries } from './MultipleQueries';
import { NonNormalised } from './NonNormalised';
import { Normalised } from './Normalised';
import { ObserverUsage } from './ObserverUsage';
import { CacheHit } from './CacheHit';
import { CacheMiss } from './CacheMiss';

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
    path: 'cache_hit',
    element: <CacheHit />,
    title: 'Cache hit'
  },
  {
    path: 'cache_miss',
    element: <CacheMiss />,
    title: 'Cache miss'
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
    path: 'args',
    element: <ArgsPart1 />,
    title: 'Args'
  },
  {
    path: 'pagination',
    element: <Pagination />,
    title: 'Pagination'
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
  },
  {
    path: 'cache_update_explicit',
    element: <CacheUpdateExplicit />,
    title: 'Cache update (explicit)'
  }
];
