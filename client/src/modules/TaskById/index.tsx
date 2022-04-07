import { JsonTree } from '@/components/JsonTree';
import { IconButton, Stack, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { FC, useCallback, useState } from 'react';

import { useTaskByIdQuery } from './gql/TaskByIdQuery.generated';

export const TaskById: FC = () => {
  const [fieldValue, setFieldValue] = useState('');
  const [taskId, setTaskId] = useState('');
  const { data, error } = useTaskByIdQuery({ variables: { taskId }, skip: !taskId });

  const handleValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setFieldValue(event.target.value),
    []
  );

  const handleCommit = useCallback(() => {
    setTaskId(fieldValue);
  }, [fieldValue]);

  return (
    <Stack spacing={2}>
      <Typography>Task by id</Typography>
      <Stack direction='row' alignItems='center' spacing={2}>
        <TextField label='Task id' value={fieldValue} onChange={handleValueChange} />
        <IconButton onClick={handleCommit}>
          <SendIcon />
        </IconButton>
      </Stack>
      {error && <Typography>{error.message}</Typography>}
      {data && <JsonTree value={data} />}
    </Stack>
  );
};
