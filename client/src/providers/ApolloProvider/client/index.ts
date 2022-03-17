import { ApolloClient, InMemoryCache } from '@apollo/client';
import { links } from './links';

export const client = new ApolloClient({
  link: links,
  cache: new InMemoryCache()
});
