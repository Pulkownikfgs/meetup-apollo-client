import {Client} from 'pg';

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'meetup_db',
  password: 'postgres',
  user: 'postgres',
});

client.connect();

export {client};
