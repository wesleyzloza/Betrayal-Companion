<template>
  <select v-model="activeCharacterId" @change="addCharacter()">
    <option
      v-for="(character, index) in allCharacters"
      :key="index"
      :value="character.id"
    >
      {{ character.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { characters as allCharacters } from '@/data/characters';
import { useApplicationStore } from '@/stores/application';
import { onMounted, ref } from 'vue';

import { storeToRefs } from 'pinia';
const store = useApplicationStore();
const { characters } = storeToRefs(store);
const activeCharacterId = ref<string | undefined>();

onMounted(() => {
  activeCharacterId.value = characters.value[0]?.id;
});

function addCharacter() {
  store.removeCharacters();
  if (activeCharacterId.value != undefined) {
    store.addCharacter(activeCharacterId.value);
  }
}
</script>

<style scoped></style>
