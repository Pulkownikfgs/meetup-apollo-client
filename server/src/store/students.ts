import {Client} from 'pg';

export interface StudentRow {
  id: number;
  name: string;
}

export const getStudents = (client: Client) =>
  client
    .query<StudentRow>('select id, name from students')
    .then(({rows}) => rows);

export const getStudentById = (client: Client, id: number) =>
  client
    .query<StudentRow>('select id, name from students where id = $1', [id])
    .then(({rows}) => rows[0]);
