import { FC } from 'react';

import { useStudentsQuery } from './gql/StudentsQuery.generated';
import { JsonTree } from '@/components/JsonTree';

export const Students: FC = () => {
  const { data } = useStudentsQuery();

  return <JsonTree value={data} />;
};
