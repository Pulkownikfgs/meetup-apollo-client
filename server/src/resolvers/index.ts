import {Context} from '../context';
import {Resolvers} from '../generated/graphql';

import {students} from './students';
import {tasks} from './tasks';

export const resolvers: Resolvers<Context> = {
  Query: {
    students,
    tasks,
  },
};
