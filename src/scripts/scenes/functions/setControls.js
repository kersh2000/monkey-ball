export default function setControls(input) {
  const cursor = {
    up: input.keyboard.addKey('up'),
    down: input.keyboard.addKey('down'),
    right: input.keyboard.addKey('right'),
    left: input.keyboard.addKey('left'),
    a: input.keyboard.addKey('a'),
    w: input.keyboard.addKey('w'),
    d: input.keyboard.addKey('d'),
    s: input.keyboard.addKey('s'),
    space: input.keyboard.addKey(32)
  }
  return cursor;
}