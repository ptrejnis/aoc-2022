const results = await Deno.readTextFile('./input.txt');

export const result = () => console.log('res: ', results);

result();
