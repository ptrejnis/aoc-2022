const input = await Deno.readTextFile('./input.txt');
const CHUNK_SEPARATOR = '\n\n';
const NUMS_SEPARATOR = '\n';
const sumKcals = (x) => x
    .split(NUMS_SEPARATOR)
    .reduce((curr, acc) => parseInt(curr, 10) + parseInt(acc, 10), 0);
const portions = input.split(CHUNK_SEPARATOR).map(sumKcals);
export const result = Math.max(...portions);

console.log(result);
