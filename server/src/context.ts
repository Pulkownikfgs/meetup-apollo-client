import {Client} from 'pg';
import {client} from './utils/connection';

export interface Context {
  client: Client;
}

export const context: Context = {
  client,
};
