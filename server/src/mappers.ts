import {TaskAnswer, TaskAnswerComment} from './generated/graphql';

export interface TaskAnswerType extends Omit<TaskAnswer, 'student' | 'task'> {
  id_student: string;
  id_task: string;
}

export interface TaskAnswerCommentType
  extends Omit<TaskAnswerComment, 'student' | 'task_answer'> {
  id_student: string;
  id_task_answer: string;
}
