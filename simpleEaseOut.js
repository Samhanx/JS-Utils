export function simpleEaseOut(start, end = 0, rate = 2, cb) {
  if (start === end) return
  if (!window.requestAnimationFrame) {
    requestAnimationFrame = function(fn) {
      setTimeout(fn, 17)
    }
  }

  const step = () => {
    start = start + (end - start) / rate
    if (Math.abs(start - end) < 1) {
      cb(end, true)
      return
    }
    cb(start, false)
    requestAnimationFrame(step)
  }
  step() 
}
