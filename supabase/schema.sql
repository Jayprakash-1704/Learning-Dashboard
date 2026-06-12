create extension if not exists "pgcrypto";

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress between 0 and 100),
  icon_name text not null,
  created_at timestamptz not null default now()
);

insert into public.courses (title, progress, icon_name)
values
  ('Advanced React Patterns', 82, 'brain'),
  ('Design Systems for Interfaces', 64, 'sparkles'),
  ('Data Structures in TypeScript', 49, 'code-2'),
  ('Product Analytics Foundations', 91, 'line-chart')
on conflict do nothing;