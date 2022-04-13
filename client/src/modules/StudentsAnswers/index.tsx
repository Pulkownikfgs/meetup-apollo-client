import { FC } from 'react';

import { useStudentsAnswersQuery } from './gql/StudentsAnswersQuery.generated';
import { JsonTree } from '@/components/JsonTree';

export const StudentsAnswers: FC = () => {
  const { data } = useStudentsAnswersQuery();

  return <JsonTree value={data} />;
};
