import {Context} from '../context';
import {QueryResolvers} from '../generated/graphql';
import {idsToString} from '../utils/idsToString';

interface TaskRow {
  id: number;
  title: string;
  description: string;
}

export const tasks: QueryResolvers<Context>['tasks'] = (
  parent,
  args,
  context,
) => {
  const {client} = context;

  return client.query<TaskRow>('select * from tasks').then((res) => {
    return idsToString(res.rows);
  });
};
