import { FC } from 'react';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Tasks } from './Tasks';
import { Students } from './Students';

export const Normalised: FC = () => {
  return (
    <Container>
      <Grid container spacing={2} alignItems='stretch'>
        <Grid item xs={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Tasks />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Students />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
