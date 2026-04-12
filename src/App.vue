<script setup lang="ts">
import CharacterMenuVue from '@/components/CharacterMenu.vue';
// import { Icon } from "@iconify/vue";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
        <img
          alt="Application logo."
          src="/images/logo.svg"
          height="24"
          width="24"
        />
      </RouterLink>
      <!--
      <RouterLink to="/about">
        <Icon icon="cuida:info-outline" width="24" height="24" />
      </RouterLink>
      -->
    </nav>
    <!--
    <label for="audio-enabled">Audio Enabled</label>
    <input id="audio-enabled" name="audio-enabled" type="checkbox" checked>
    <label for="game-edition">Game Edition</label>
    -->
    <div class="options">
      <select id="game-edition" name="game-edition" value="2">
        <option value="1">1st Edition</option>
        <option value="2">2nd Edition</option>
      </select>
      <CharacterMenuVue />
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  align-items: center;
  border-block-end: 1px solid var(--accent-color);
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}

.options {
  display: flex;
  gap: 0.5rem;
}
</style>
