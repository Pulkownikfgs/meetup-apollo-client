import { FC } from 'react';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Students } from '@/modules/Students';
import { Stack } from '@mui/material';
import { StudentInsertRefetch } from '@/modules/StudentInsertRefetch';
import { StudentDeleteRefetch } from '@/modules/StudentDeleteRefetch';
import { TaskById } from '@/modules/TaskById';

export const CacheUpdateRefetch: FC = () => {
  return (
    <Container>
      <Grid container spacing={2} alignItems='stretch'>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <StudentInsertRefetch />
            </Paper>
            <Paper sx={{ p: 2, height: '100%' }}>
              <StudentDeleteRefetch />
            </Paper>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Students />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <TaskById />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
