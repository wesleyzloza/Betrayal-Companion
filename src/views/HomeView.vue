<template>
  <div class="home">
    <!--
    <div>
      <HauntMeter/>
    </div>
    -->
    <div class="card-container">
      <CharacterCard
        :character
        v-for="character in characters"
        :key="character.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CharacterCard from '@/components/CharacterCard.vue';
// import HauntMeter from '@/components/HauntMeter.vue';
import { useApplicationStore } from '@/stores/application';
import { storeToRefs } from 'pinia';
const store = useApplicationStore();
const { activeCharacters: characters } = storeToRefs(store);
</script>

<style scoped>
.card-container {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 1rem;
  justify-content: center;
  padding: 1rem;
  width: 100%;
}
</style>
