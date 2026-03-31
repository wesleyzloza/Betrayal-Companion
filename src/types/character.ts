import type { CharacterTraits } from './character-traits';

/**
 * An object containing the character properties.
 */
export interface Character {
  /**
   * The character's unique identifier.
   */
  id: string;

  /**
   * Character Name
   */
  name: string;

  /**
   * The accent color associated with the character.
   */
  accent: 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'white';

  /**
   * Age
   */
  age: number;

  /**
   * Height (X'6")
   */
  height: string;

  /**
   * Weight in pounds [lbs].
   */
  weight: string;

  /**
   * A comma separated list containing the character's hobbies.
   */
  hobbies: string;

  /**
   * The month and day
   */
  birthday: string;

  /**
   *
   */
  description: string;

  /**
   * An object containing the character's physical and mental traits.
   */
  traits: CharacterTraits;
}
