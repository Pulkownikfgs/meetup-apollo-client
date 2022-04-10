import { TypedTypePolicies } from '@/gql/apollo-helpers';

export const typePolicies: TypedTypePolicies = {
  Query: {
    merge: true,
    fields: {
      tasks_feed: {
        keyArgs: [],
        read: (existing, options) => {
          const { limit, offset } = options.args?.pagination ?? { limit: 0, offset: 0 };
          return existing && existing.slice(offset, offset + limit);
        },
        merge(existing, incoming, options) {
          const { offset } = options.args?.pagination ?? { offset: 0 };

          const merged = existing ? existing.slice(0) : [];
          for (let i = 0; i < incoming.length; ++i) {
            merged[offset + i] = incoming[i];
          }

          return merged;
        }
      }
    }
  }
};
