<template>
  <div class="character-card" :class="cardAccentClass">
    <div class="character-photo-container">
      <img
        :alt="`Profile photo of ${character.name}.`"
        :src="`images/${character.id}.png`"
        height="96"
        width="96"
      />
    </div>
    <dl class="character-properties">
      <div>
        <dt class="visually-hidden">Character Name</dt>
        <dd class="character-name">{{ character.name }}</dd>
      </div>
      <div>
        <dt>Age</dt>
        <dd>{{ character.age }}</dd>
      </div>
      <div>
        <dt>Height</dt>
        <dd>{{ character.height }}</dd>
      </div>
      <div>
        <dt>Weight</dt>
        <dd>{{ character.weight }}</dd>
      </div>
      <div>
        <dt>Hobbies</dt>
        <dd>{{ character.hobbies }}</dd>
      </div>
      <div>
        <dt>Birthday</dt>
        <dd>{{ character.birthday }}</dd>
      </div>
    </dl>
    <p class="character-description" v-html="character.description"></p>
    <form>
      <CharacterTraitMeter
        :character-id="character.id"
        label="Speed"
        :trait="character.traits.speed"
      />
      <CharacterTraitMeter
        :character-id="character.id"
        label="Might"
        :trait="character.traits.might"
      />
      <CharacterTraitMeter
        :character-id="character.id"
        label="Sanity"
        :trait="character.traits.sanity"
      />
      <CharacterTraitMeter
        :character-id="character.id"
        label="Knowledge"
        :trait="character.traits.knowledge"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import type { Character } from '@/types/character';
import { computed } from 'vue';
import CharacterTraitMeter from './CharacterTraitMeter.vue';

const props = defineProps<{ character: Character }>();
const cardAccentClass = computed(
  () => `character-card--${props.character.accent}`,
);
</script>

<style scoped>
.character-card {
  --accent-color: transparent;
  aspect-ratio: 3 / 4;
  background: #222;
  border-radius: 8px;
  box-shadow:
    0px 0px 1px rgba(3, 7, 18, 0.1),
    0px 1px 4px rgba(3, 7, 18, 0.2),
    0px 1px 9px rgba(3, 7, 18, 0.3),
    0px 3px 15px rgba(3, 7, 18, 0.4),
    0px 4px 24px rgba(3, 7, 18, 0.5),
    inset 0px -1px 0px rgba(0, 0, 0, 0.5),
    inset 0px 1px 0px rgba(255, 255, 255, 0.25),
    inset 0px 0px 0px 0.5rem var(--accent-color);
  box-sizing: border-box;
  font-size: 0.75rem;
  overflow: clip;
  padding: 1.5rem;
  width: 320px;
  /* height: 400px; */
}

@supports (corner-shape: squircle) {
  .character-card {
    corner-shape: squircle;
    border-radius: 1rem;
  }
}

.character-card--blue {
  --accent-color: #2d6281;
}

.character-card--green {
  --accent-color: rgb(34, 159, 34);
}

.character-card--red {
  --accent-color: #b3234b;
}

.character-card--yellow {
  --accent-color: gold;
}

.character-card--purple {
  --accent-color: violet;
}

.character-card--white {
  --accent-color: silver;
}

.character-photo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.character-properties {
  dt,
  dd {
    display: inline;
    margin: 0;
    padding: 0;
  }

  dt {
    font-weight: 500;

    &::after {
      content: ': ';
    }
  }
}

.character-name {
  font-size: 1.2em;
  font-weight: bold;
  letter-spacing: 0.06ch;
  margin-block-end: 2lh;
}

.character-description {
  display: -webkit-box;
  line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

button[type='reset'] {
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: block;
  margin-block-start: 1lh;
  padding-block: 0.5lh;
  width: 100%;
}
</style>
