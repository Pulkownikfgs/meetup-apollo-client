import { from } from '@apollo/client';

import { httpLink } from './http';

export const links = from([httpLink]);
