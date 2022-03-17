import { FC } from 'react';

import { useTasksNonNormalisedQuery } from './gql/TasksNonNormalisedQuery.generated';
import { JsonTree } from '@/components/JsonTree';

export const TasksNonNormalised: FC = () => {
  const { data } = useTasksNonNormalisedQuery();

  return <JsonTree value={data} />;
};
