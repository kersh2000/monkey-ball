export default function setControls(input, face) {
  console.log("channge!")
  let cursor = {
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

  if (face === 'back') {
    cursor.up = input.keyboard.addKey('down');
    cursor.down = input.keyboard.addKey('up');
    cursor.right = input.keyboard.addKey('left');
    cursor.left = input.keyboard.addKey('right');
  } else if (face === 'right') {
    cursor.up = input.keyboard.addKey('left');
    cursor.down = input.keyboard.addKey('right');
    cursor.right = input.keyboard.addKey('up');
    cursor.left = input.keyboard.addKey('down');
  } else if (face === 'left') {
    cursor.up = input.keyboard.addKey('right');
    cursor.down = input.keyboard.addKey('left');
    cursor.right = input.keyboard.addKey('down');
    cursor.left = input.keyboard.addKey('up');
  } else {
    cursor.up = input.keyboard.addKey('up');
    cursor.down = input.keyboard.addKey('down');
    cursor.right = input.keyboard.addKey('right');
    cursor.left = input.keyboard.addKey('left');
  }

  return cursor;
}