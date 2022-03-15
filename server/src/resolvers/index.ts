import {Context} from '../context';
import {Resolvers} from '../generated/graphql';

import {students, taskStudent} from './students';
import {answerTask, tasks} from './tasks';
import {answers, studentTaskAnswers} from './answers';

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
    student: taskStudent,
    task: answerTask,
  },
};
