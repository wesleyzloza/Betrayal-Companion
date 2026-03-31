/**
 * An object containing the properties of a haunt.
 */
export interface Haunt {
  /**
   * The haunt number/identifier.
   */
  hauntNumber: number;

  /**
   * The haunt title.
   */
  title: string;

  /**
   * The name of the traitor(s) or the condition that identifies the traitor.
   */
  traitor: string;

  /**
   * Secrets of Survival - the instructions for the remaining characters.
   * @description The value of this property can contain HTML to emphasize or
   * bold a region of text.
   */
  secretsOfSurvival: string;

  /**
   * Traitor's Tome - the instructions needed for the {@link Haunt.traitor | traitor(s)}.
   * @description The value of this property can contain HTML to emphasize or
   * bold a region text.
   */
  traitorsTome: string;
}
