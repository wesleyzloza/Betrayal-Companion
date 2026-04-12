import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { characters } from '@/data/characters';

//const characterIds = characters.map(char => char.id);

export const useApplicationStore = defineStore('application', {
  state: () => ({
    hauntLevel: useStorage<number>('hauntLevel', 0),
    characterIds: useStorage<string[]>('characterIds', []),
    edition: useStorage<1 | 2>('edition', 2),
  }),
  getters: {
    characters: (state) => {
      return state.characterIds
        .map((id) => characters.find((character) => character.id === id))
        .filter((character) => character != null);
    },
  },
  actions: {
    setHauntLevel(level: number) {
      this.hauntLevel = level;
    },
    addCharacter(id: string) {
      const exists = this.characterIds.includes(id);
      if (!exists) this.characterIds.push(id);
    },
    removeCharacter(id: string) {
      const index = this.characterIds.indexOf(id);
      if (index !== -1) this.characterIds.splice(index, 1);
    },
    removeCharacters() {
      this.characterIds = [];
    },
  },
});

/*
  const character = ref<Character | null>(null);
  const edition = useStorage<1 | 2>('edition', 1);

  function setEdition(ed: 1 | 2) {
    edition.value = ed;
  }

  return { character, edition, setEdition }
  */
