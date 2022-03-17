import { FC } from 'react';

import { useTasksQuery } from './gql/TasksQuery.generated';
import { JsonTree } from '@/components/JsonTree';

export const Tasks: FC = () => {
  const { data } = useTasksQuery();

  return <JsonTree value={data} />;
};
