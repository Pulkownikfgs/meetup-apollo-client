import { FC } from 'react';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Students } from '@/modules/Students';
import { Stack } from '@mui/material';
import { StudentInsert } from '@/modules/StudentInsert';
import { StudentDelete } from '@/modules/StudentDelete';

export const CacheUpdateExplicit: FC = () => {
  return (
    <Container>
      <Grid container spacing={2} alignItems='stretch'>
        <Grid item xs={6}>
          <Stack spacing={2}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <StudentInsert />
            </Paper>
            <Paper sx={{ p: 2, height: '100%' }}>
              <StudentDelete />
            </Paper>
          </Stack>
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
