import {Context} from '../context';
import {QueryResolvers, TaskAnswerResolvers} from '../generated/graphql';
import {getTasks, getTaskById} from '../store/tasks';
import {idsToString} from '../utils/idsToString';

type TasksResolver = QueryResolvers<Context>['tasks'];
type AnswerTaskResolver = TaskAnswerResolvers<Context>['task'];

export const tasks: TasksResolver = (parent, args, context) => {
  const {client} = context;

  return getTasks(client).then((rows) => {
    return idsToString(rows);
  });
};

export const answerTask: AnswerTaskResolver = (parent, args, context) => {
  const {client} = context;
  const {id_task} = parent;

  return getTaskById(client, Number(id_task)).then(({id, ...rest}) => ({
    id: String(id),
    ...rest,
  }));
};
