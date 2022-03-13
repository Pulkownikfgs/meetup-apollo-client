create table students (
    id integer primary key generated always as identity,
    name text not null
);