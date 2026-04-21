<template>
  <select v-model.number="activeGameEdition" @change="setEdition()">
    <option value="1">1st Edition</option>
    <option value="2">2nd Edition</option>
    <option value="3">3rd Edition</option>
  </select>
  <select v-model="activeCharacterId" @change="addCharacter()">
    <option
      v-for="(character, index) in availableCharacters"
      :key="index"
      :value="character.id"
    >
      {{ character.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useApplicationStore } from '@/stores/application';
import { onMounted, ref } from 'vue';

import { storeToRefs } from 'pinia';
const store = useApplicationStore();

const { availableCharacters } = storeToRefs(store);
const activeCharacterId = ref<string | undefined>();
const activeGameEdition = ref<1 | 2 | 3>(3);

onMounted(() => {
  activeCharacterId.value = availableCharacters.value[0]?.id;
});

function addCharacter() {
  store.removeCharacters();
  if (activeCharacterId.value != undefined) {
    store.addCharacter(activeCharacterId.value);
  }
}

function setEdition() {
  store.setEdition(activeGameEdition.value);
}
</script>

<style scoped></style>
