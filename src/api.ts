import { ROOMS } from './data/rooms';
import { OMENS } from './data/omens';
import { haunt_info_1ed } from './data/haunts-first-edition';
import { haunt_info_2ed } from './data/haunts-second-edition';
import { hauntMatrix1stEdition } from './data/haunt-matrix-first-edition';
import { hauntMatrix2ndEdition } from './data/haunt-matrix-second-edition'
import type { Haunt } from '@/types/haunt';

export type Omen = typeof OMENS[number];
export type Room = typeof ROOMS[number];

export function getHaunt(room: Room, omen: Omen, edition: "1" | "2"): Haunt | undefined {
  const hauntNumber = getHauntNumber(room, omen, edition);
  const haunts = edition === '1' ? haunt_info_1ed : haunt_info_2ed;
  const haunt = haunts.find(haunt => haunt.hauntNumber === hauntNumber);
  return haunt;
}

function getHauntNumber(room: Room, omen: Omen, edition: "1" | "2"): number | undefined {
  const rowIndex = ROOMS.indexOf(room);
  const columnIndex = OMENS.indexOf(omen);
  const matrix = edition === "1" ? hauntMatrix1stEdition : hauntMatrix2ndEdition;
  const columns = matrix[rowIndex];
  return columns != undefined ? columns[columnIndex] : undefined;
}
