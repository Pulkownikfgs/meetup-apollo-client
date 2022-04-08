import { Stack, Typography, TablePagination, List, ListItem, ListItemText } from '@mui/material';
import { FC, useCallback, useState } from 'react';

import { useTasksPaginatedQuery } from './gql/TasksPaginatedQuery.generated';

export const TasksPaginated: FC = () => {
  const [offset, setOffset] = useState(0);
  const limit = 3;
  const page = Math.floor(offset / limit);

  const { data } = useTasksPaginatedQuery({ variables: { offset, limit } });
  const count = data?.tasks_pages?.pagination.total ?? 0;
  const tasks = data?.tasks_pages?.tasks ?? [];

  const handlePageChange = useCallback((_, page) => setOffset(page * limit), []);

  return (
    <Stack spacing={2}>
      <Typography>Tasks pagination</Typography>
      {data && (
        <>
          <List>
            {tasks.map(({ id, title, description }) => (
              <ListItem key={id}>
                <ListItemText primary={title} secondary={description} />
              </ListItem>
            ))}
          </List>
          <TablePagination
            component='div'
            count={count}
            page={page}
            onPageChange={handlePageChange}
            rowsPerPage={limit}
            rowsPerPageOptions={[limit]}
          />
        </>
      )}
    </Stack>
  );
};
