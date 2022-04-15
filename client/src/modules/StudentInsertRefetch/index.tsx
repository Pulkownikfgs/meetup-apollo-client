import { Button, Stack, TextField, Typography } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import { useStudentInsertMutation } from '../StudentInsert/gql/StudentInsertMutation.generated';

export const StudentInsertRefetch: FC = () => {
  const [student, setStudent] = useState({
    name: ''
  });

  const handleNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setStudent(student => ({
        ...student,
        name: event.target.value
      })),
    []
  );

  const [updateStudent] = useStudentInsertMutation();
  const handleUpdateClick = useCallback(() => {
    updateStudent({
      variables: {
        student
      },
      refetchQueries: ['StudentsQuery']
    });
  }, [student, updateStudent]);

  return (
    <>
      <Stack spacing={2}>
        <Typography>Insert student</Typography>
        <TextField label='name' value={student.name} onChange={handleNameChange} />
        <Button variant='contained' onClick={handleUpdateClick}>
          Insert
        </Button>
      </Stack>
    </>
  );
};
