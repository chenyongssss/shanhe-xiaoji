create extension if not exists "pgcrypto";

create table if not exists public.maps (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null default '山河小记',
  state jsonb not null default '{}'::jsonb,
  visibility text not null default 'private' check (visibility in ('private', 'unlisted', 'public')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.map_members (
  map_id uuid not null references public.maps(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('owner', 'editor', 'viewer')),
  invited_by uuid references auth.users(id) on delete set null,
  accepted_at timestamptz,
  created_at timestamptz not null default now(),
  primary key (map_id, user_id)
);

create table if not exists public.share_links (
  id uuid primary key default gen_random_uuid(),
  map_id uuid not null references public.maps(id) on delete cascade,
  token text not null unique,
  permission text not null default 'view' check (permission in ('view', 'comment', 'edit')),
  allow_photos boolean not null default false,
  allow_private_notes boolean not null default false,
  expires_at timestamptz,
  revoked_at timestamptz,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.maps enable row level security;
alter table public.map_members enable row level security;
alter table public.share_links enable row level security;

create policy "owners can manage maps"
  on public.maps
  for all
  using (owner_id = auth.uid())
  with check (owner_id = auth.uid());

create policy "members can read maps"
  on public.maps
  for select
  using (
    owner_id = auth.uid()
    or exists (
      select 1
      from public.map_members
      where map_members.map_id = maps.id
        and map_members.user_id = auth.uid()
    )
  );

create policy "editors can update maps"
  on public.maps
  for update
  using (
    owner_id = auth.uid()
    or exists (
      select 1
      from public.map_members
      where map_members.map_id = maps.id
        and map_members.user_id = auth.uid()
        and map_members.role in ('owner', 'editor')
    )
  );

create policy "members can read memberships"
  on public.map_members
  for select
  using (
    user_id = auth.uid()
    or exists (
      select 1
      from public.maps
      where maps.id = map_members.map_id
        and maps.owner_id = auth.uid()
    )
  );

create policy "owners can manage share links"
  on public.share_links
  for all
  using (
    exists (
      select 1
      from public.maps
      where maps.id = share_links.map_id
        and maps.owner_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.maps
      where maps.id = share_links.map_id
        and maps.owner_id = auth.uid()
    )
  );
