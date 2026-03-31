<template>
  <button v-for="(character, index) in characters" :key="index" @click="addCharacter(character.id)">
    {{ character.name }}
  </button>
</template>

<script setup lang="ts">
import { characters } from '@/data/characters';
import { useApplicationStore } from '@/stores/application';
const { addCharacter } = useApplicationStore();
</script>

<style scoped></style>
