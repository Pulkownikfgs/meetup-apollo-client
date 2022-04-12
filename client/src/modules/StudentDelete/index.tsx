import { Button, Stack, TextField, Typography } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import { useStudentDeleteMutation } from './gql/StudentDeleteMutation.generated';

export const StudentDelete: FC = () => {
  const [id, setId] = useState('1');

  const handleIdChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => setId(event.target.value), []);

  const [deleteStudent] = useStudentDeleteMutation();
  const handleDeleteClick = useCallback(() => {
    deleteStudent({
      variables: {
        id
      },
      update: (cache, result) => {
        const student = result.data?.deleteStudent;
        if (!student) {
          return;
        }

        cache.evict({ id: cache.identify(student) });
        cache.gc();
      }
    });
  }, [id, deleteStudent]);

  return (
    <>
      <Stack spacing={2}>
        <Typography>Delete student</Typography>
        <TextField label='id' value={id} onChange={handleIdChange} />
        <Button variant='contained' onClick={handleDeleteClick}>
          Delete
        </Button>
      </Stack>
    </>
  );
};
