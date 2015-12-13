// http://adventofcode.com/day/2

// Determine how much ribbon is needed
const ribbon = (boxes) =>
  boxes
    .split('\n')
    .reduce((total, box) => {
      const [l, w, h] = new Uint16Array(box.split('x'))
      const [lw, lh, wh] = [l + w, l + h, w + h]
      
      return total + l * w * h + 2 * Math.min(lw, lh, wh)
    }, 0)
