import {readFileSync} from 'fs';
import {join} from 'path';
import {exit} from 'process';
import {client} from '../utils/connection';

const seedQuery = readFileSync(join(__dirname, '1-reset.sql')).toString();

client.query(seedQuery).then(() => {
  console.log('seeded');
  exit(0);
});
