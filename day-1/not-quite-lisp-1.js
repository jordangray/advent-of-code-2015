// http://adventofcode.com/day/1

// Find the terminal floor for a set of directions.
const find_floor = dirs => dirs.length - 2 * dirs.split(')').length + 2


/* EXPLANATION

closing_brackets = dirs.split(')').length - 1               // (1)

opening_brackets = dirs.length - closing_brackets           // (2)

floor = opening_brackets - closing_brackets
      = dirs.length - closing_brackets - closing_brackets   // Substitute (2)
      = dirs.length - 2 * closing_brackets                  // Simplify
      = dirs.length - 2 * (dirs.split(')').length - 1)      // Substitute (1)
      = dirs.length - 2 * dirs.split(')').length + 2        // Expand
*/
