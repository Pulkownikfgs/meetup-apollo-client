import { FC, useCallback } from 'react';

import { useTasksRefetchQuery } from './gql/TasksRefetchQuery.generated';
import { JsonTree } from '@/components/JsonTree';
import { RefetchContainer } from '@/components/RefetchContainer';

export const TasksRefetch: FC = () => {
  const { data, refetch } = useTasksRefetchQuery();

  const handleClick = useCallback(() => refetch(), [refetch]);

  return (
    <RefetchContainer onRefetchClick={handleClick}>
      <JsonTree value={data} />
    </RefetchContainer>
  );
};
