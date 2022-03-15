import {TaskAnswer, Student} from './generated/graphql';

export interface TaskAnswerType extends Omit<TaskAnswer, 'student' | 'task'> {
  id_student: string;
  id_task: string;
}
