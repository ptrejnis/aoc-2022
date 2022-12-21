import { readFile } from '../utils/read-file.ts';

const input = await readFile('src/day-1/input.txt');
const CHUNK_SEPARATOR = '\n\n';
const NUMS_SEPARATOR = '\n';
const sumKcals = (x: string): number =>
  x.split(NUMS_SEPARATOR).reduce((curr: string, acc: string) => parseInt(curr, 10) + parseInt(acc, 10), 0);
const portions = input.split(CHUNK_SEPARATOR).map(sumKcals);
const result = Math.max(...portions);

console.log(result);
