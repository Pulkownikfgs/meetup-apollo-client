import { ApolloClient, InMemoryCache } from '@apollo/client';
import { typePolicies } from './cache/typePolicies';
import { links } from './links';

export const client = new ApolloClient({
  link: links,
  cache: new InMemoryCache({ typePolicies })
});
