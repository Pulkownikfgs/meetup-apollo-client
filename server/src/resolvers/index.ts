import {Context} from '../context';
import {Resolvers} from '../generated/graphql';

import {students, studentByParentId, student} from './students';
import {tasks, taskById} from './tasks';
import {answers, studentTaskAnswers, taskAnswerById} from './answers';
import {comments} from './comments';

export const resolvers: Resolvers<Context> = {
  Query: {
    students,
    student,
    tasks,
  },
  Task: {
    answers,
  },
  Student: {
    task_answers: studentTaskAnswers,
  },
  TaskAnswer: {
    student: studentByParentId,
    task: taskById,
    comments,
  },
  TaskAnswerComment: {
    student: studentByParentId,
    task_answer: taskAnswerById,
  },
};
