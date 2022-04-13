import { FC, useState } from 'react';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Students } from '@/modules/Students';
import { StudentsAnswers } from '@/modules/StudentsAnswers';
import { Button } from '@mui/material';

export const CacheHit: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <Grid container spacing={2} alignItems='stretch'>
        <Grid item xs={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <StudentsAnswers />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            {visible ? <Students /> : <Button onClick={() => setVisible(true)}>Show</Button>}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
