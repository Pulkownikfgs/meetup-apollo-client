import { FC } from 'react';

import { useStudentsNonNormalisedQuery } from './gql/StudentsNonNormalisedQuery.generated';
import { JsonTree } from '@/components/JsonTree';

export const StudentsNonNormalised: FC = () => {
  const { data } = useStudentsNonNormalisedQuery();

  return <JsonTree value={data} />;
};
