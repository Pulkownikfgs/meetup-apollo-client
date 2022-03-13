import {ApolloServer} from 'apollo-server';

import {schema} from './schema';
import {resolvers} from './resolvers';
import {context} from './context';

const server = new ApolloServer({typeDefs: schema, resolvers, context});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
