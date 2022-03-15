import {Client} from 'pg';

export interface TaskRow {
  id: number;
  title: string;
  description: string;
}

export const getTasks = (client: Client) =>
  client
    .query<TaskRow>('select id, title, description from tasks')
    .then(({rows}) => rows);

export const getTaskById = (client: Client, id: number) =>
  client
    .query<TaskRow>('select id, title, description from tasks where id = $1', [
      id,
    ])
    .then(({rows}) => rows[0]);
