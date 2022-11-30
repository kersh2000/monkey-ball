const obj = {
  0: {
    // objects contains the physical bodies which make up the stage
    objects: [
      {
        // type is needed to state the physical properties of the object
        type: "box",
        // options contains the dimensions
        options: {
          width: 12,
          height: 1,
          depth: 5,
          y: 0,
          x: -5,
          z: 0,
          collisionFlags: 2,
          // textutre contains the texture of the body / object
          texture: "grass"
        }
      }
    ],
    bananas: [
      // how many banannas go here, each banana is an array containing its position: [x, y, z]
      [-7, 1, 0], [-4, 1, 0]
    ],
    goal: {
      // goal co-ordinates
      x: -10,
      y: 1,
      z: 0
    }
  },
  1: {
    objects: [
      {
        type: "box",
        options: {
          width: 12,
          height: 1,
          depth: 1,
          y: 0,
          x: -5,
          z: -1,
          collisionFlags: 2,
          texture: "grass"
        }
      },
      {
        type: "box",
        options: {
          width: 12,
          height: 1,
          depth: 1,
          y: 0,
          x: -5,
          z: 1,
          collisionFlags: 2,
          texture: "grass"
        }
      },
      {
        type: "box",
        options: {
          width: 2,
          height: 1,
          depth: 1,
          y: 0,
          x: 0,
          z: 0,
          collisionFlags: 2,
          texture: "grass"
        }
      },
      {
        type: "box",
        options: {
          width: 2,
          height: 1,
          depth: 1,
          y: 0,
          x: -10,
          z: 0,
          collisionFlags: 2,
          texture: "grass"
        }
      }
    ],
    bananas: [
      [-4, 1, -1], [-4, 1, 1], [-7, 1, -1], [-7, 1, 1], [-1, 1, -1], [-1, 1, 1], 
    ],
    goal: {
      x: -11,
      y: 1,
      z: 0
    }
  },
  2: {
    objects: [
      {
        type: "box",
        options: {
          width: 8,
          height: 1,
          depth: 12,
          x: -2,
          y: 0,
          z: 4,
          collisionFlags: 2,
          texture: "grass"
        }
      },
      {
        type: "box",
        options: {
          width: 10,
          height: 0.25,
          depth: 4,
          x: -10,
          y: 2,
          z: 2,
          zRotation: Math.PI / -8,
          collisionFlags: 2,
          texture: "grass"
        }
      },
      {
        type: "box",
        options: {
          width: 4,
          height: 1,
          depth: 8,
          x: -16.57,
          y: 3.52,
          z: 4,
          collisionFlags: 2,
          texture: "grass"
        }
      }
    ],
    bananas: [
      [-4.5, 1, 2], [-10, 3, 2], [ -14.5, 4.52, 2], [-12.25, 3.76, 2], [-7.75, 2.24, 2], [-5.5, 1.48, 2]
    ],
    goal: {
      x: -16.57,
      y: 4.52,
      z: 6,
      rotate: true
    }
  },
  3: {
    objects: [
      {
        type: "translating-box",
        options: {
          width: 8,
          height: 1,
          depth: 1,
          y: 0,
          x: -5,
          z: -1,
          collisionFlags: 2,
          texture: "grass",
          dir: "z",
          speed: 0.01,
          edges: [1.5, -1.5],
          name: "box-1"
        }
      },
      {
        type: "translating-box",
        options: {
          width: 8,
          height: 1,
          depth: 1,
          y: 0,
          x: -5,
          z: 1,
          collisionFlags: 2,
          texture: "grass",
          dir: "z",
          speed: 0.01,
          edges: [1.5, -1.5],
          name: "box-2"
        }
      },
      {
        type: "box",
        options: {
          width: 2,
          height: 1,
          depth: 1,
          y: 0,
          x: 0,
          z: 0,
          collisionFlags: 2,
          texture: "grass"
        }
      },
      {
        type: "box",
        options: {
          width: 2,
          height: 1,
          depth: 1,
          y: 0,
          x: -10,
          z: 0,
          collisionFlags: 2,
          texture: "grass"
        }
      }
    ],
    bananas: [
      [-4, 1, -1], [-4, 1, 1], [-7, 1, -1], [-7, 1, 1], [-1, 1, -1], [-1, 1, 1], 
    ],
    goal: {
      x: -11,
      y: 1,
      z: 0
    }

  }
}

export default obj;