import {Client} from 'pg';
import {exit} from 'process';
import {env} from './utils/env';

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

(async () => {
  while (true) {
    try {
      const client = new Client(env);
      await client.connect();
      console.log('pg is up');
      exit(0);
    } catch (_) {
      console.log('waiting for pg...');
      await sleep(1000);
    }
  }
})();
