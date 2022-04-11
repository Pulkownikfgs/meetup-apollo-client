import {context, Context} from '../context';
import {
  QueryResolvers,
  ResolversTypes,
  Resolver,
  MutationResolvers,
} from '../generated/graphql';
import {idsToString} from '../utils/idsToString';
import {
  getStudentById,
  getStudents,
  updateStudent as updateStudentStore,
  insertStudent as insertStudentStore,
  deleteStudent as deleteStudentStore,
} from '../store/students';

type StudentsResolver = QueryResolvers<Context>['students'];
type StudentByIdResolver = Resolver<
  ResolversTypes['Student'],
  {id_student: string},
  Context
>;

type StudentResolver = QueryResolvers<Context>['student'];
type UpdateStudentResover = MutationResolvers<Context>['updateStudent'];
type InsertStudentResolver = MutationResolvers<Context>['insertStudent'];
type DeleteStudentResolver = MutationResolvers<Context>['deleteStudent'];

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

export const updateStudent: UpdateStudentResover = (parent, args, context) => {
  const {client} = context;
  const {student} = args;
  const {id, ...rest} = student;

  return updateStudentStore(client, {id: Number(id), ...rest}).then(
    ({id, name}) => ({
      id: String(id),
      name,
    }),
  );
};

export const insertStudent: InsertStudentResolver = (parent, args, context) => {
  const {client} = context;
  const {student} = args;
  const {name} = student;

  return insertStudentStore(client, name).then(({id, name}) => ({
    id: String(id),
    name,
  }));
};

export const deleteStudent: DeleteStudentResolver = (parent, args, context) => {
  const {client} = context;
  const {id} = args;

  return deleteStudentStore(client, Number(id)).then((id) =>
    id ? String(id) : null,
  );
};
