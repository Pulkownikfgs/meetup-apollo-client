create table task_answer_comments (
    id integer primary key generated always as identity,
    id_task_answer integer not null references task_answers on delete cascade,
    id_student integer not null references students on delete cascade,
    timestamp timestamp not null default current_timestamp,
    text text not null
);

