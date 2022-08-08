<script type="ts">
  import { CheckIcon } from '@rgossiaux/svelte-heroicons/outline';
  import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
  } from '@rgossiaux/svelte-headlessui';

  const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ];

  let selectedPerson = people[0];

  import FilterModal from './FilterModal.svelte';
</script>

<div class="text-lg">Explore component rendered</div>
<Listbox value={selectedPerson} on:change={(e) => (selectedPerson = e.detail)}>
  <ListboxButton>{selectedPerson.name}</ListboxButton>
  <ListboxOptions>
    {#each people as person (person.id)}
      <ListboxOption value={person} disabled={person.unavailable}>
        {person.name}
      </ListboxOption>
    {/each}
  </ListboxOptions>
</Listbox>
<CheckIcon class="w-8" />

<FilterModal />
