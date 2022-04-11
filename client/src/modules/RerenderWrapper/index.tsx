import { Button, Stack } from '@mui/material';
import { ElementType, useState } from 'react';

export interface RerenderWrapperProps<T> {
  component: ElementType;
  props?: T;
}

export const RerenderWrapper = function <T = unknown>({ component: Component, props }: RerenderWrapperProps<T>) {
  const [renderKey, setRenderKey] = useState(0);

  return (
    <Stack spacing={2}>
      <Button onClick={() => setRenderKey(value => value + 1)}>Force rerender</Button>
      <Component key={renderKey} {...props} />
    </Stack>
  );
};
