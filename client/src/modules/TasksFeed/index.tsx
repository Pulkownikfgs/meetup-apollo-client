import { Stack, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { FC, useCallback, useMemo, useState } from 'react';
import { useTasksFeedQuery } from './gql/TasksFeedQuery.generated';

export const TasksFeed: FC = () => {
  const [limit, setLimit] = useState(3);

  const { data, fetchMore } = useTasksFeedQuery({ variables: { offset: 0, limit } });
  const tasks = useMemo(() => data?.tasks_feed ?? [], [data]);

  const handleFetchMore = useCallback(() => {
    const currentLength = tasks.length;
    fetchMore({ variables: { offset: currentLength, limit: 3 } }).then(fetchMoreResult => {
      setLimit(value => value + fetchMoreResult.data.tasks_feed.length);
    });
  }, [fetchMore, tasks]);

  return (
    <Stack spacing={2}>
      <Typography>Tasks feed</Typography>
      {data && (
        <>
          <List>
            {tasks.map(({ id, title, description }) => (
              <ListItem key={id}>
                <ListItemText primary={title} secondary={description} />
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Button onClick={handleFetchMore}>Fetch more</Button>
    </Stack>
  );
};
