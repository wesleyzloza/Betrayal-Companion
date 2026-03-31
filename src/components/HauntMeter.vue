<template>
  <div class="haunt-meter">
    <ol>
      <li class="haunt-level" v-for="(level, index) in hauntLevels" :key="index">
        <label @click="setHauntLevel(index)">
          {{ level }}
          <input name="haunt-level visually-hidden"
            class="visually-hidden"
            type="radio"
            :value="level"
            :checked="index === activeHauntLevel"/>
        </label>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useApplicationStore } from '@/stores/application';
import { storeToRefs } from 'pinia';
const store = useApplicationStore();
const { setHauntLevel } = store;
const activeHauntLevel = storeToRefs(store).hauntLevel;
const hauntLevels = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
</script>

<style scoped>
.haunt-meter {
  background: var(--surface-background);
  font-size: 0.75rem;
}

.haunt-meter-label {
  box-shadow: inset 0px 1px 1px #444, inset 0px -1px 1px #222;
  border-block-end: 1px solid #111;
  font-size: 0.
}

ol {
  display: flex;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  overflow: auto;
}

li {
  flex: 1 0 48px;
  align-items: center;
  display: grid;
  max-width: 64px;
  place-items: stretch;
}

label {
  display: grid;
  cursor: pointer;
  padding-block: 0.5lh;
  place-items: center;

  &:hover {
    background: var(--surface-background--hover);
  }

  &:active {
    background: var(--surface-background--pressed);
  }

  &:has(:checked) {
    background: rgb(0, 119, 119);
  }

  & > * {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
}

input[type="radio"] {
  opacity: 0;
  pointer-events: none;
  position: fixed;
}

.visually-hidden:not(:focus):not(:active) {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0); /* Legacy property for Internet Explorer */
  clip-path: inset(50%);
  white-space: nowrap;
}
</style>
