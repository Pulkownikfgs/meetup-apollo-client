import {Client} from 'pg';

export interface TaskRow {
  id: number;
  title: string;
  description: string;
}
export interface TasksPaginated {
  tasks: TaskRow[];
  total: number;
}

export const getTasks = (client: Client) =>
  client
    .query<TaskRow>('select id, title, description from tasks')
    .then(({rows}) => rows);

export const getTasksPaginated = (
  client: Client,
  offset: number,
  limit: number,
) =>
  Promise.all([
    client.query<TaskRow>(
      'select id, title, description from tasks order by id limit $1 offset $2',
      [limit, offset],
    ),
    client.query<{total: number}>('select count(*) AS total from tasks '),
  ]).then<TasksPaginated>(([{rows: taskRows}, {rows: countRows}]) => ({
    tasks: taskRows,
    total: countRows[0].total,
  }));

export const getTaskById = (client: Client, id: number) =>
  client
    .query<TaskRow>('select id, title, description from tasks where id = $1', [
      id,
    ])
    .then(({rows}) => rows[0]);
