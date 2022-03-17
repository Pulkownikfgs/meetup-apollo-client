import { FC } from 'react';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { TasksNonNormalised } from './TasksNonNormalised';
import { StudentsNonNormalised } from './StudentsNonNormalised';

export const NonNormalised: FC = () => {
  return (
    <Container>
      <Grid container spacing={2} alignItems='stretch'>
        <Grid item xs={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <TasksNonNormalised />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <StudentsNonNormalised />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
