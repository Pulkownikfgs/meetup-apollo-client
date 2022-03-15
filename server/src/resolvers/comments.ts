import {Context} from '../context';
import {TaskAnswerResolvers} from '../generated/graphql';
import {getAnswerCommentsByAnswerId} from '../store/comments';

type AnswerCommentsResolvers = TaskAnswerResolvers<Context>['comments'];

export const comments: AnswerCommentsResolvers = (parent, args, context) => {
  const {client} = context;
  const {id: id_task_answer} = parent;

  return getAnswerCommentsByAnswerId(client, Number(id_task_answer)).then(
    (rows) =>
      rows.map(({id, id_student, id_task_answer, text, timestamp}) => ({
        id: String(id),
        id_student: String(id_student),
        id_task_answer: String(id_task_answer),
        text,
        timestamp: timestamp.toISOString(),
      })),
  );
};
