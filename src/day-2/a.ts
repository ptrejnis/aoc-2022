import { readFile } from '../utils/read-file.ts';
import { fromMap } from '../utils/from-map.ts';

const input = await readFile('src/day-2/input.txt');
const CHUNK_SEPARATOR = '\n';
const pointsMap = new Map([
  ['CX', 6 + 1],
  ['AX', 3 + 1],
  ['BX', 1],
  ['AY', 6 + 2],
  ['BY', 3 + 2],
  ['CY', 2],
  ['BZ', 6 + 3],
  ['CZ', 3 + 3],
  ['AZ', 3],
]);
const points = input.split(CHUNK_SEPARATOR).map((v) => fromMap(pointsMap, v.split(' ').join('')));
const pointsSum = (): number => points.reduce((curr, next) => curr + next, 0);

console.log(pointsSum());
