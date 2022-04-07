import {Client} from 'pg';

export interface StudentRow {
  id: number;
  name: string;
}

export interface StudentUpdateRow {
  id: number;
  name?: string | null;
}

export const getStudents = (client: Client) =>
  client
    .query<StudentRow>('select id, name from students order by id')
    .then(({rows}) => rows);

export const getStudentById = (client: Client, id: number) =>
  client
    .query<StudentRow>('select id, name from students where id = $1', [id])
    .then(({rows}) => rows[0]);

export const updateStudent = (client: Client, {id, name}: StudentUpdateRow) =>
  client
    .query<StudentRow>(
      'update students set name = coalesce($2, name) where id = $1 returning id, name',
      [id, name],
    )
    .then(({rows}) => rows[0]);
