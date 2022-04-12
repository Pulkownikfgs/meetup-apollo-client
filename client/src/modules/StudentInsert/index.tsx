import { gql, Reference } from '@apollo/client';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import { useStudentInsertMutation } from './gql/StudentInsertMutation.generated';

export const StudentInsert: FC = () => {
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
      update: (cache, result) => {
        cache.modify({
          fields: {
            students: (existing: Reference[]) => {
              const newStudentRef = cache.writeFragment({
                data: result.data?.insertStudent,
                fragment: gql`
                  fragment NewStudent on Student {
                    id
                    name
                  }
                `
              });

              return [...existing, newStudentRef];
            }
          }
        });
      }
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
