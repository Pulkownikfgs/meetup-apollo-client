import {Context} from '../context';
import {Resolvers} from '../generated/graphql';

import {students, studentById} from './students';
import {tasks, taskById} from './tasks';
import {answers, studentTaskAnswers, taskAnswerById} from './answers';
import {comments} from './comments';

export const resolvers: Resolvers<Context> = {
  Query: {
    students,
    tasks,
  },
  Task: {
    answers,
  },
  Student: {
    task_answers: studentTaskAnswers,
  },
  TaskAnswer: {
    student: studentById,
    task: taskById,
    comments,
  },
  TaskAnswerComment: {
    student: studentById,
    task_answer: taskAnswerById,
  },
};
