import {Context} from '../context';
import {StudentResolvers, TaskResolvers} from '../generated/graphql';
import {idsToString} from '../utils/idsToString';

interface TaskAnswerRow {
  id: number;
  content: string;
  timestamp: Date;
}

export const answers: TaskResolvers<Context>['answers'] = (
  parent,
  args,
  context,
) => {
  const {client} = context;
  const {id: id_task} = parent;

  return client
    .query<TaskAnswerRow>(
      'select id, content, timestamp from task_answers WHERE id_task = $1',
      [id_task],
    )
    .then((res) => {
      return idsToString(res.rows).map(({timestamp, ...rest}) => ({
        timestamp: timestamp.toISOString(),
        ...rest,
      }));
    });
};

export const studentTaskAnswers: StudentResolvers<Context>['task_answers'] = (
  parent,
  args,
  context,
) => {
  const {client} = context;
  const {id: id_student} = parent;

  return client
    .query<TaskAnswerRow>(
      'select id, content, timestamp from task_answers WHERE id_student = $1',
      [id_student],
    )
    .then((res) => {
      return idsToString(res.rows).map(({timestamp, ...rest}) => ({
        timestamp: timestamp.toISOString(),
        ...rest,
      }));
    });
};
