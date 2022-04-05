import { FC, useEffect, useState } from 'react';

import { StudentsObserverQuery, StudentsObserverQueryDocument } from './gql/StudentsObserverQuery.generated';
import { JsonTree } from '@/components/JsonTree';
import { useApolloClient } from '@apollo/client';

export const StudentsObserver: FC = () => {
  const client = useApolloClient();

  const [data, setData] = useState<StudentsObserverQuery | {}>({});

  useEffect(() => {
    const observable = client.watchQuery<StudentsObserverQuery>({ query: StudentsObserverQueryDocument });

    const subscription = observable.subscribe(({ data }) => {
      setData(data);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [client]);

  return <JsonTree value={data} />;
};
