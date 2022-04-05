import {Context} from '../context';
import {Resolvers} from '../generated/graphql';

import {students, student, studentByParentId, updateStudent} from './students';
import {tasks, task, taskByParent} from './tasks';
import {answers, studentTaskAnswers, taskAnswerByParentId} from './answers';
import {comments} from './comments';

export const resolvers: Resolvers<Context> = {
  Query: {
    students,
    student,
    tasks,
    task,
  },
  Mutation: {
    updateStudent,
  },
  Task: {
    answers,
  },
  Student: {
    task_answers: studentTaskAnswers,
  },
  TaskAnswer: {
    student: studentByParentId,
    task: taskByParent,
    comments,
  },
  TaskAnswerComment: {
    student: studentByParentId,
    task_answer: taskAnswerByParentId,
  },
};
