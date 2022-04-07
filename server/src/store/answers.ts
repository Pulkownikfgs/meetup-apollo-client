import {Client} from 'pg';

export interface TaskAnswerRow {
  id: number;
  id_task: number;
  id_student: number;
  content: string;
  timestamp: Date;
}

export const getTaskAnswersByTaskId = (client: Client, id_task: number) =>
  client
    .query<TaskAnswerRow>(
      'select id, id_task, id_student, content, timestamp from task_answers WHERE id_task = $1 order by id',
      [id_task],
    )
    .then(({rows}) => rows);

export const getTaskAnswersByStudentId = (client: Client, id_student: number) =>
  client
    .query<TaskAnswerRow>(
      'select id, id_task, id_student, content, timestamp from task_answers WHERE id_student = $1 order by id',
      [id_student],
    )
    .then(({rows}) => rows);

export const getTaskAnswerById = (client: Client, id: number) =>
  client
    .query<TaskAnswerRow>(
      'select id, id_task, id_student, content, timestamp from task_answers WHERE id = $1',
      [id],
    )
    .then(({rows}) => rows[0]);
