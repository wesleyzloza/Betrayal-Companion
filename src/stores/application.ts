import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { characters as oldCharacters } from '@/data/characters';
import { characters as newCharacters } from '@/data/characters-third-edition';

//const characterIds = characters.map(char => char.id);

export const useApplicationStore = defineStore('application', {
  state: () => ({
    hauntLevel: useStorage<number>('hauntLevel', 0),
    characterIds: useStorage<string[]>('characterIds', []),
    edition: useStorage<1 | 2 | 3>('edition', 3),
  }),
  getters: {
    availableCharacters: (state) => {
      return state.edition === 3 ? newCharacters : oldCharacters;
    },
    activeCharacters: (state) => {
      const characterCollection =
        state.edition === 3 ? newCharacters : oldCharacters;
      return state.characterIds
        .map((id) =>
          characterCollection.find((character) => character.id === id),
        )
        .filter((character) => character != null);
    },
  },
  actions: {
    setEdition(edition: 1 | 2 | 3) {
      this.edition = edition;
      this.characterIds = [];
    },
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
