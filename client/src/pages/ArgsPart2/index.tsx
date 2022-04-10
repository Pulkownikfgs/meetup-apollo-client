import { FC } from 'react';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { TasksFeed } from '@/modules/TasksFeed';

export const ArgsPart2: FC = () => {
  return (
    <Container>
      <Grid container spacing={2} alignItems='stretch'>
        <Grid item xs={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <TasksFeed />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
