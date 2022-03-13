create table tasks (
    id integer primary key generated always as identity,
    title text not null,
    description text not null
);