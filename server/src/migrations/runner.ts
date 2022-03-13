import {migrate} from 'postgres-migrations';

import {client} from '../utils/connection';

async function runner() {
  try {
    await migrate({client}, __dirname);
  } finally {
    await client.end();
  }
}

runner();
