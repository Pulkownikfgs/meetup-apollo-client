import { HttpLink } from '@apollo/client';

export const httpLink = new HttpLink({
  uri: ({ operationName }): string => {
    return `api/?operation=${operationName}`;
  }
});
