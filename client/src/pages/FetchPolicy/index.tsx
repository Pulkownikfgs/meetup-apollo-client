import { FC, useCallback } from 'react';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { RerenderWrapper } from '@/modules/RerenderWrapper';
import { StudentsFetchPolicy } from '@/modules/StudentsFetchPolicy';
import { Tab, Tabs } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const POLICIES = ['cache-first', 'cache-only', 'cache-and-network', 'network-only', 'no-cache', 'standby'];

export const FetchPolicy: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const fetchPolicy = searchParams.get('policy') ?? 'cache-first';

  const setFetchPolicy = useCallback(
    (_, policy: string) => {
      setSearchParams({ policy });
    },
    [setSearchParams]
  );

  return (
    <Container>
      <Grid container spacing={2} direction='column' alignItems={'flex-start'}>
        <Grid item xs={6}>
          <Tabs value={fetchPolicy} onChange={setFetchPolicy}>
            {POLICIES.map(item => (
              <Tab key={item} label={item} value={item} />
            ))}
          </Tabs>
        </Grid>
        <Grid item xs={6} alignSelf='stretch'>
          <Paper sx={{ p: 2, height: '100%' }}>
            <RerenderWrapper key={fetchPolicy} component={StudentsFetchPolicy} props={{ fetchPolicy }} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
