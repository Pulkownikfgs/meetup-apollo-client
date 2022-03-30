import {Client} from 'pg';
import {env} from 'process';

import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  host: env.POSTGRES_HOST,
  port: Number(env.POSTGRES_PORT),
  database: env.POSTGRES_DB,
  password: env.POSTGRES_PASSWORD,
  user: env.POSTGRES_USER,
});

client.connect();

export {client};
