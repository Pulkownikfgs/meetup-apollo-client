import {Context} from '../context';
import {Resolvers} from '../generated/graphql';

import {
  students,
  student,
  studentByParentId,
  updateStudent,
  insertStudent,
  deleteStudent,
} from './students';
import {tasks, tasksPages, task, taskByParent, tasksFeed} from './tasks';
import {answers, studentTaskAnswers, taskAnswerByParentId} from './answers';
import {comments} from './comments';

export const resolvers: Resolvers<Context> = {
  Query: {
    students,
    student,
    tasks,
    tasks_pages: tasksPages,
    tasks_feed: tasksFeed,
    task,
  },
  Mutation: {
    updateStudent,
    insertStudent,
    deleteStudent,
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
