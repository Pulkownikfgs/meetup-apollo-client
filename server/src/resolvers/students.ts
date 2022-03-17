import {Context} from '../context';
import {QueryResolvers, ResolversTypes, Resolver} from '../generated/graphql';
import {idsToString} from '../utils/idsToString';
import {getStudentById, getStudents} from '../store/students';

type StudentsResolver = QueryResolvers<Context>['students'];
type StudentByIdResolver = Resolver<
  ResolversTypes['Student'],
  {id_student: string},
  Context
>;

type StudentResolver = QueryResolvers<Context>['student'];

export const students: StudentsResolver = (parent, args, context) => {
  const {client} = context;

  return getStudents(client).then((rows) => {
    return idsToString(rows);
  });
};

export const studentByParentId: StudentByIdResolver = (
  parent,
  args,
  context,
) => {
  const {client} = context;
  const {id_student} = parent;

  return getStudentById(client, Number(id_student)).then(({id, name}) => ({
    id: String(id),
    name,
  }));
};

export const student: StudentResolver = (parent, args, context) => {
  const {client} = context;
  const {id} = args;

  return getStudentById(client, Number(id)).then(({id, name}) => ({
    id: String(id),
    name,
  }));
};
