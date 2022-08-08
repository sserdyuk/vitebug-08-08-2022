<script lang="ts" context="module">
  import type { LoadEvent, LoadOutput } from '@sveltejs/kit/types/internal';

  export async function load({ _session }: LoadEvent): Promise<LoadOutput> {
    return { stuff: { api: 'nothing' } };
  }
</script>

<script lang="ts">
  import '../app.css';
</script>

<slot />

<style>
  :root {
    --primary-color: 342 100% 62%;
    --secondary-color: 242 76% 13%;

    --surface-base: 0 0% 100%;
    --surface-100: 0 0% 96%;
    --surface-200: 0 0% 88%;
    --surface-300: 0 0% 80%;

    --text-base: 0 0% 42%;
    --text-muted: 0 0% 72%;
  }
</style>
