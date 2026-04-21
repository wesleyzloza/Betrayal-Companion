import type { Digit } from './digit';

export interface CharacterTrait {
  /**
   * An array containing the trait values.
   */
  values: [0, Digit, Digit, Digit, Digit, Digit, Digit, Digit, Digit];

  /**
   * The default health points (HP). This is the index of the character's
   * starting trait value.
   */
  hp: Digit;
}
