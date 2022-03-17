import { FC } from 'react';

import { ApolloProvider as ApolloProviderRaw } from '@apollo/client';
import { client } from './client';

export const ApolloProvider: FC = ({ children }) => {
  return <ApolloProviderRaw client={client}>{children}</ApolloProviderRaw>;
};
