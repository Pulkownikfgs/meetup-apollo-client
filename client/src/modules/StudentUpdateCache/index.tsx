import { Button, Stack, TextField, Typography } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import { useStudentUpdateCacheMutation } from './gql/StudentUpdateCacheMutation.generated';

export const StudentUpdateCache: FC = () => {
  const [student, setStudent] = useState({
    id: '1',
    name: ''
  });

  const handleIdChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setStudent(student => ({
        ...student,
        id: event.target.value
      })),
    []
  );

  const handleNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setStudent(student => ({
        ...student,
        name: event.target.value
      })),
    []
  );

  const [updateStudent] = useStudentUpdateCacheMutation();
  const handleUpdateClick = useCallback(() => {
    updateStudent({
      variables: {
        student
      }
    });
  }, [student, updateStudent]);

  return (
    <>
      <Stack spacing={2}>
        <Typography>Update student</Typography>
        <TextField label='id' value={student.id} onChange={handleIdChange} />
        <TextField label='name' value={student.name} onChange={handleNameChange} />
        <Button variant='contained' onClick={handleUpdateClick}>
          Update
        </Button>
      </Stack>
    </>
  );
};
