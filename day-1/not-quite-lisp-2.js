// http://adventofcode.com/day/1

// Determine at which character Santa will enter the basement.
function basement_at(directions) {
  let floor = 0
  for (let [idx, dir] of [...directions].entries()) {
    floor += dir === '(' ? 1 : -1
    if (floor === -1) return idx + 1
  }
  return -1 // Basements are scary anyway
}

// Less efficient one-liner solution. (Expanded for clarity.)
const basement_at_v2 = directions =>
  [...directions].reduce((floors, dir, i) =>
                           [...floors, floors[i] + dir === '(' ? 1 : -1]
                         , [0])
                 .indexOf(-1)
