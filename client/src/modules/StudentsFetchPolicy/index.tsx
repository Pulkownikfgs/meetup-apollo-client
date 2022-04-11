import { FC } from 'react';

import { JsonTree } from '@/components/JsonTree';
import { useStudentsQuery } from '../Students/gql/StudentsQuery.generated';
import { WatchQueryFetchPolicy } from '@apollo/client';
import { CircularProgress, Stack, Typography } from '@mui/material';

export interface StudentsFetchPolicyProps {
  fetchPolicy?: WatchQueryFetchPolicy;
}

export const StudentsFetchPolicy: FC<StudentsFetchPolicyProps> = ({ fetchPolicy = 'cache-first' }) => {
  const { data, loading, error } = useStudentsQuery({ fetchPolicy });

  return (
    <Stack spacing={2}>
      <Typography>fetchPolicy = {fetchPolicy}</Typography>
      {loading && <CircularProgress />}
      {error && <Typography>{error}</Typography>}
      <JsonTree value={data} />
    </Stack>
  );
};
