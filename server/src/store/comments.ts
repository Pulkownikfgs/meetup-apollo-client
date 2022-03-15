import {Client} from 'pg';

export interface CommentRow {
  id: number;
  id_task_answer: number;
  id_student: number;
  text: string;
  timestamp: Date;
}

export const getAnswerCommentsByAnswerId = (
  client: Client,
  id_task_answer: number,
) =>
  client
    .query<CommentRow>(
      'select id, id_task_answer, id_student, text, timestamp from task_answer_comments where id_task_answer = $1',
      [id_task_answer],
    )
    .then(({rows}) => rows);
