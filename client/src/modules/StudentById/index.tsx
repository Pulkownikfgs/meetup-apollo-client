import { JsonTree } from '@/components/JsonTree';
import { IconButton, Stack, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { FC, useCallback, useState } from 'react';

import { useStudentByIdQuery } from './gql/StudentByIdQuery.generated';

export const StudentById: FC = () => {
  const [fieldValue, setFieldValue] = useState('');
  const [studentId, setStudentId] = useState('');
  const { data, error } = useStudentByIdQuery({ variables: { studentId }, skip: !studentId });

  const handleValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setFieldValue(event.target.value),
    []
  );

  const handleCommit = useCallback(() => {
    setStudentId(fieldValue);
  }, [fieldValue]);

  return (
    <Stack spacing={2}>
      <Typography>Student by id</Typography>
      <Stack direction='row' alignItems='center' spacing={2}>
        <TextField label='Student id' value={fieldValue} onChange={handleValueChange} />
        <IconButton onClick={handleCommit}>
          <SendIcon />
        </IconButton>
      </Stack>
      {error && <Typography>{error.message}</Typography>}
      {data && <JsonTree value={data} />}
    </Stack>
  );
};
