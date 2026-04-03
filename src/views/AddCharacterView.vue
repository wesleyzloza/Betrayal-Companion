<template>
  <div v-for="(accent, index) in characterAccents" :key="index">
    <button v-for="(character, i) in charactersByAccent[accent]" :key="i" >
      {{ character.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { characters } from '@/data/characters';
const charactersByAccent = Object.groupBy(characters, character => character.accent);
const characterAccents = Object.keys(charactersByAccent) as typeof charactersByAccent;
</script>

<style scoped>

</style>
