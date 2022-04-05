import { FC } from 'react';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Students } from '@/modules/Students';
import { StudentUpdate } from '@/modules/StudentUpdate';
import { TasksRefetch } from '@/modules/TasksRefetch';

export const IndirectUpdate: FC = () => {
  return (
    <Container>
      <Grid container spacing={2} alignItems='stretch'>
        <Grid item xs={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <StudentUpdate />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <TasksRefetch />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Students />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
