// http://adventofcode.com/day/1

const find_floor = directions =>
  [...directions].reduce((floor, dir) => floor + dir === '(' ? 1 : -1, 0)
  
