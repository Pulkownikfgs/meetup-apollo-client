delete from students;
delete from tasks;
delete from task_answers;
delete from task_answer_comments;

alter sequence students_id_seq restart with 1;
alter sequence tasks_id_seq restart with 1;
alter sequence task_answers_id_seq restart with 1;
alter sequence task_answer_comments_id_seq restart with 1;

insert into students (name) values ('ivan testovich');
insert into students (name) values ('test petrovich');
insert into tasks (title, description) values ('test title', 'test desc');
insert into tasks (title, description) values ('second task', 'another desc');
insert into task_answers (id_task, id_student, content) values (1, 1, 'test content');
insert into task_answers (id_task, id_student, content) values (2, 1, 'test content by ivan testovich');
insert into task_answers (id_task, id_student, content) values (2, 2, 'test content by test petrovich');
insert into task_answer_comments (id_task_answer, id_student, text) values (1, 1, 'comment text by ivan testovich');
insert into task_answer_comments (id_task_answer, id_student, text) values (1, 2, 'comment text by test petrovich');
insert into task_answer_comments (id_task_answer, id_student, text) values (3, 1, 'comment text by ivan testovich');