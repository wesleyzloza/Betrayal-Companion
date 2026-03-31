<script setup lang="ts">
import CharacterMenuVue from '@/components/CharacterMenu.vue';
import { Icon } from "@iconify/vue";

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
        <img alt="Application logo." src="/images/logo.svg" height="24" width="24"/>
      </RouterLink>
      <RouterLink to="/about">
        <Icon icon="cuida:info-outline" width="24" height="24" />
      </RouterLink>
    </nav>
    <label for="audio-enabled">Audio Enabled</label>
    <input id="audio-enabled" name="audio-enabled" type="checkbox" checked>
    <label for="game-edition">Game Edition</label>
    <select id="game-edition" name="game-edition" value="2">
      <option value="1">1st Edition</option>
      <option value="2">2nd Edition</option>
    </select>
    <CharacterMenuVue/>
  </header>
  <main>
   <RouterView />
  </main>
</template>

<style scoped>

header {
  background: #333;
  border-block-end: 1px solid black;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
}

</style>

