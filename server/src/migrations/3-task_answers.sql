create table task_answers (
    id integer primary key generated always as identity,
    id_task integer not null references tasks on delete cascade,
    id_student integer not null references students on delete cascade,
    content text not null,
    timestamp timestamp not null default current_timestamp
);

