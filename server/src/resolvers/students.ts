import {Context} from '../context';
import {QueryResolvers} from '../generated/graphql';
import {idsToString} from '../utils/idsToString';

interface StudentRow {
  id: number;
  name: string;
}

export const students: QueryResolvers<Context>['students'] = (
  parent,
  args,
  context,
) => {
  const {client} = context;

  return client.query<StudentRow>('select * from students').then((res) => {
    return idsToString(res.rows);
  });
};
