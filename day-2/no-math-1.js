// http://adventofcode.com/day/2

// Determine how much wrapping paper is needed
const wrapping_paper = (boxes) =>
  boxes
    .split('\n')
    .reduce((total, box) => {
      const [l, w, h] = new Uint16Array(box.split('x'))
      const [lw, lh, wh] = [l * w, l * h, w * h]
      
      return total + 2 * (lw + lh + wh) + Math.min(lw, lh, wh)
    }, 0)
