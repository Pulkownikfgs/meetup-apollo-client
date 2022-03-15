import {Context} from '../context';
import {StudentResolvers, TaskResolvers} from '../generated/graphql';
import {
  getTaskAnswersByStudentId,
  getTaskAnswersByTaskId,
  TaskAnswerRow,
} from '../store/answers';

type TaskAnswersResolvers = TaskResolvers<Context>['answers'];
type StudentTaskAnswersResolvers = StudentResolvers<Context>['task_answers'];

const rowTransformer = ({
  id,
  timestamp,
  id_student,
  id_task,
  ...rest
}: TaskAnswerRow) => ({
  id: String(id),
  timestamp: timestamp.toISOString(),
  id_student: String(id_student),
  id_task: String(id_task),
  ...rest,
});

export const answers: TaskAnswersResolvers = (parent, args, context) => {
  const {client} = context;
  const {id: id_task} = parent;

  return getTaskAnswersByTaskId(client, Number(id_task)).then((rows) => {
    return rows.map((row) => rowTransformer(row));
  });
};

export const studentTaskAnswers: StudentTaskAnswersResolvers = (
  parent,
  args,
  context,
) => {
  const {client} = context;
  const {id: id_student} = parent;

  return getTaskAnswersByStudentId(client, Number(id_student)).then((rows) => {
    return rows.map((row) => rowTransformer(row));
  });
};
