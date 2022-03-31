import {Client} from 'pg';
import {env as config} from './env';

const client = new Client(config);

client.connect();

export {client};
