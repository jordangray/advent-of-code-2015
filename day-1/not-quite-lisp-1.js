// http://adventofcode.com/day/1

// Find the terminal floor for a set of directions.
const find_floor = directions =>
  [...directions].reduce((floor, dir) => floor + dir === '(' ? 1 : -1, 0)

// Alternative solution with filter.
const find_floor_alt = directions =>
  directions.length - 2 * [...directions].filter(dir => d === ')').length
