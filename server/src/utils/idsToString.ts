export const idsToString = <T extends {id: number}>(rows: T[]) =>
  rows.map(({id, ...rest}) => ({
    id: String(id),
    ...rest,
  }));
