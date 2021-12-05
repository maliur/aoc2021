import {readFileSync} from 'fs';

export const getInputFromFile = (day: number): string => {
  return readFileSync(`./day-${day}.txt`, 'utf8');
}
