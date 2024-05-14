# PickPal
PickPal is a web app meant to help people make decisions, try new ideas and review the decisions made.

## Dependencies
- Bun: https://bun.sh/docs/installation
- Supabase CLI: https://supabase.com/docs/guides/cli/getting-started?queryGroups=platform&platform=npx#installing-the-supabase-cli
- Docker: https://download.docker.com/

## Startup

1. Run ```supabase start``` in the project root.

2. Create a .env.local file in the project root directory with the following keys.
    ```.env
    NEXT_PUBLIC_SUPABASE_URL=<the_supabase_project_url>
    NEXT_PUBLIC_SUPABASE_ANON_KEY=<the_supabase_anon_key>
    ```

3. Run ```bun --env-file=../.env.local run dev``` in the /web directory

