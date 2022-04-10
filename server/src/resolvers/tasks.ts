import {Context} from '../context';
import {QueryResolvers, ResolversTypes, Resolver} from '../generated/graphql';
import {getTasks, getTaskById, getTasksPaginated} from '../store/tasks';
import {idsToString} from '../utils/idsToString';

type TasksResolver = QueryResolvers<Context>['tasks'];
type TaskResolver = QueryResolvers<Context>['task'];
type TaskByIdResolver = Resolver<
  ResolversTypes['Task'],
  {id_task: string},
  Context
>;

type TasksPaginatedResolver = QueryResolvers<Context>['tasks_pages'];
type TasksFeedResolver = QueryResolvers<Context>['tasks_feed'];

export const tasks: TasksResolver = (parent, args, context) => {
  const {client} = context;

  return getTasks(client).then((rows) => {
    return idsToString(rows);
  });
};

export const tasksPages: TasksPaginatedResolver = (parent, args, context) => {
  const {client} = context;
  const {
    pagination: {limit, offset},
  } = args;

  return getTasksPaginated(client, offset, limit).then(({tasks, total}) => {
    return {
      pagination: {
        limit,
        offset,
        total,
      },
      tasks: idsToString(tasks),
    };
  });
};

export const tasksFeed: TasksFeedResolver = (parent, args, context) => {
  const {client} = context;
  const {
    pagination: {limit, offset},
  } = args;

  return getTasksPaginated(client, offset, limit).then(({tasks, total}) => {
    return idsToString(tasks);
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
