import {Context} from '../context';
import {Resolvers} from '../generated/graphql';

import {students} from './students';
import {tasks} from './tasks';
import {answers} from './answers';

export const resolvers: Resolvers<Context> = {
  Query: {
    students,
    tasks,
  },
  Task: {
    answers,
  },
};
