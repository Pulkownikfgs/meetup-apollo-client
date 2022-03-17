import {Context} from '../context';
import {QueryResolvers, ResolversTypes, Resolver} from '../generated/graphql';
import {getTasks, getTaskById} from '../store/tasks';
import {idsToString} from '../utils/idsToString';

type TasksResolver = QueryResolvers<Context>['tasks'];
type TaskResolver = QueryResolvers<Context>['task'];
type TaskByIdResolver = Resolver<
  ResolversTypes['Task'],
  {id_task: string},
  Context
>;

export const tasks: TasksResolver = (parent, args, context) => {
  const {client} = context;

  return getTasks(client).then((rows) => {
    return idsToString(rows);
  });
};

export const task: TaskResolver = (parent, args, context) => {
  const {client} = context;
  const {id} = args;

  return getTaskById(client, Number(id)).then(({id, ...rest}) => ({
    id: String(id),
    ...rest,
  }));
};

export const taskByParent: TaskByIdResolver = (parent, args, context) => {
  const {client} = context;
  const {id_task} = parent;

  return getTaskById(client, Number(id_task)).then(({id, ...rest}) => ({
    id: String(id),
    ...rest,
  }));
};
