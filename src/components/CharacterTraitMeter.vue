<template>
  <div class="character-trait-meter">
    <fieldset>
      <legend>{{ label }}</legend>
      <ol class="meter">
        <li
          v-for="(value, index) in trait.values"
          :key="index"
          :class="{ 'meter-item--default': trait.hp === index }"
        >
          <label class="input">
            <img
              v-if="index === 0"
              alt="Skull icon."
              src="/images/skull.svg"
              height="16"
              width="16"
            />
            <template v-else>
              {{ value }}
            </template>
            <input
              type="radio"
              :name="meterName"
              :checked="index === trait.hp"
              @input="hpCurrentValue = toDigitOrDefault(index)"
            />
          </label>
        </li>
      </ol>
      <label class="output__adj">
        <abbr title="Adjustment">Adj.</abbr>&nbsp;
        <output
          :class="{ positive: hpAdjustment > 0, negative: hpAdjustment < 0 }"
        >
          {{ hpAdjustmentText }}
        </output>
      </label>
      <label class="output__hp">
        <abbr title="Health Points">HP</abbr>&nbsp;
        <output>{{ hpCurrentValue }}</output>
      </label>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import type { CharacterTrait } from '@/types/character-trait';
import type { Digit } from '@/types/digit';
import { computed, ref } from 'vue';

const props = defineProps<{
  characterId: string;
  label: string;
  trait: CharacterTrait;
}>();

const meterName = computed(() => `${props.characterId}-${props.label}`);
const hpDefaultValue = ref(props.trait.hp);
const hpCurrentValue = ref(props.trait.hp);
const hpAdjustment = computed(
  () => hpCurrentValue.value - hpDefaultValue.value,
);
const hpAdjustmentText = computed(
  () => `${hpAdjustment.value > 0 ? '+' : ''}${hpAdjustment.value}`,
);

function toDigitOrDefault(value: number): Digit {
  return value >= 0 && value <= 9 ? value as Digit : 0;
}
</script>

<style scoped>
.meter {
  background: #333;
  border-radius: 4px;
}

@supports (corner-shape: squircle) {
  .meter {
    corner-shape: squircle;
    border-radius: 0.5rem;
  }
}

fieldset {
  border: none;
  display: grid;
  gap: 0.5lh;
  grid-template-areas: 'label adj hp' 'meter meter meter';
  grid-template-columns: 1fr repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  margin: 0.5lh 0 0 0;
  padding: 0;
}

legend {
  float: inline-start;
  grid-area: label;
}

ol,
li {
  margin: 0;
  padding: 0;
}

ol {
  display: grid;
  grid-area: meter;
  grid-auto-flow: column;
  list-style: none;
  height: 36px;
}

label {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  place-content: center;
  cursor: pointer;
  display: block;
  text-align: center;
  height: 100%;

  &:focus-within {
    outline: 2px solid rgb(194, 71, 0);
    outline-offset: 1px;
    border-radius: 4px;
  }

  &:has(input:checked) {
    background: #111;
  }

  input[type='radio'] {
    opacity: 0;
    pointer-events: none;
    position: fixed;
  }
}

.output__adj {
  grid-area: adj;
}

.output__hp {
  grid-area: hp;
}

.meter-item--default {
  color: greenyellow;
  font-weight: bold;
}

.positive {
  color: greenyellow;
}

.negative {
  color: red;
}
</style>
