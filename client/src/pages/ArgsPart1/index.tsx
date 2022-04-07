import { FC } from 'react';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { StudentById } from '@/modules/StudentById';
import { TaskById } from '@/modules/TaskById';

export const ArgsPart1: FC = () => {
  return (
    <Container>
      <Grid container spacing={2} alignItems='stretch'>
        <Grid item xs={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <StudentById />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <TaskById />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
