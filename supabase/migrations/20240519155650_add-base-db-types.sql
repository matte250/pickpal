create schema if not exists app;

grant usage on schema app to service_role;
grant all privileges on all tables in schema app to service_role;

create table if not exists app.sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  location geography(POINT) not null,
  created_at timestamp with time zone default now()
);

create table if not exists app.places (
  id serial primary key,
  name text not null,
  location geography(POINT) not null,
  image_urls text[] default '{}' not null
);

