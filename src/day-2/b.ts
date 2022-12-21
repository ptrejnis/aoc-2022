import { readFile } from '../utils/read-file.ts';
import { fromMap } from '../utils/from-map.ts';

const input = await readFile('src/day-2/input.txt');
const CHUNK_SEPARATOR = '\n';
const pointsMap = new Map([
    ['CY', 3 + 3],
    ['AY', 3 + 1],
    ['BY', 3 + 2],
    ['AX', 3],
    ['BX', 1],
    ['CX', 2],
    ['BZ', 6 + 3],
    ['CZ', 6 + 1],
    ['AZ', 6 + 2],
]);
const points = input.split(CHUNK_SEPARATOR).map((v) => fromMap(pointsMap, v.split(' ').join('')));
const pointsSum = points.reduce((curr, next) => curr + next, 0);

console.log(pointsSum);