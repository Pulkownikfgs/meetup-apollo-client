import {Context} from '../context';
import {Resolvers} from '../generated/graphql';

import {students} from './students';

export const resolvers: Resolvers<Context> = {
  Query: {
    students,
  },
};
