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
  // F
  1: {
    objects: [
      {
        type: "box",
        options: {
          width: 12,
          height: 1,
          depth: 5,
          y: 0,
          x: -5,
          z: 0,
          collisionFlags: 2,
          texture: "grass"
        }
      },
      {
        type: "box",
        options: {
          width: 12,
          height: 1,
          depth: 5,
          y: -2,
          x: -17,
          z: 0,
          collisionFlags: 2,
          texture: "grass"
        }
      },
      {
        type: "cylinder",
        options: {
          radius: 6,
          height: 1,
          y: -2,
          x: -29,
          z: 0,
          collisionFlags: 2,
          texture: "grass"
        }
      },

    ],
    bananas: [
      [-7, 1, 0], [-4, 1, 0], [-13, 1, 0], [-29, -1, 4], [-29 ,-1 ,-4], [-33, -1, 0]
    ],
    goal: {
      x: -29,
      y: -1,
      z: 0
    }
  },
  // F
  2: {
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
          x: -7,
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
          x: -3,
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
      x: -10.5,
      y: 1,
      z: 0
    }
  },
  3: {
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
  4: {
    objects: [
      {
        type: "translating-box",
        options: {
          move: "translate",
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
          move: "translate",
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

  },
  5: {
    objects: [
      {
        type: "cylinder",
        options: {
          radius: 3,
          height: 1,
          y: 0,
          x: 0,
          z: 0,
          collisionFlags: 2,
          texture: "ice"
        }
      },
      {
        type: "rotating-cylinder",
        options: {
          move: "rotate",
          radius: 10,
          height: 0.95,
          y: -0.3,
          x: 0,
          z: 0,
          dir: 'y',
          speed: 0.005,
          collisionFlags: 2,
          texture: "ice"
        }
      },
      {
        type: "rotating-cylinder",
        options: {
          move: "rotate",
          radius: 15,
          height: 0.9,
          y: -0.6,
          x: 0,
          z: 0,
          dir: 'y',
          speed: -0.005,
          collisionFlags: 2,
          texture: "ice"
        }
      }
    ],
    bananas: [
      [-7, 1, 0], [-4, 1, 0]
    ],
    goal: {
      x: -16,
      y: 0.2,
      z: 0
    }
  },
  6: {
    objects: [
      {
        type: "box",
        options: {
          width: 7,
          height: 1,
          depth: 7,
          x: 0,
          y: 0,
          z: 0,
          collisionFlags: 2,
          texture: "ice"
        }
      },
      {
        type: "translating-box",
        options: {
          move: 'translate',
          width: 3,
          height: 1,
          depth: 7,
          x: -5,
          y: 0,
          z: 0,
          collisionFlags: 2,
          texture: "ice3",
          dir: 'y',
          speed: 0.02,
          edges: [3, -1]
        }
      },
      {
        type: "translating-box",
        options: {
          move: 'translate',
          width: 3,
          height: 1,
          depth: 7,
          x: -8,
          y: 2,
          z: 0,
          collisionFlags: 2,
          texture: "ice3",
          dir: 'y',
          speed: 0.02,
          edges: [3, -1]
        }
      },
      {
        type: "box",
        options: {
          width: 7,
          height: 1,
          depth: 7,
          x: -15,
          y: 2,
          z: 0,
          collisionFlags: 2,
          texture: "ice",
        }
      },
    ],
    bananas: [
      [-7, 1, 0], [-4, 1, 0], [-14, 3, 0]
    ],
    goal: {
      x: -16.5,
      y: 3,
      z: 0
    }
  },
  7: {
    objects: [
      {
        type: "box",
        options: {
          width: 7,
          height: 1,
          depth: 14,
          y: 0,
          x: 0,
          z: 0,
          collisionFlags: 2,
          texture: "ice"
        }
      },
      // Rotate Left
      {
        type: "rotating-box",
        options: {
          move: "rotate",
          width: 40,
          height: 0.2,
          depth: 1,
          y: 0,
          x: -23.5,
          z: -0.8,
          collisionFlags: 2,
          texture: "ice3",
          dir: 'x',
          speed: -0.00375
        }
      },
      // Rotate Right
      {
        type: "rotating-box",
        options: {
          move: "rotate",
          width: 40,
          height: 0.2,
          depth: 1,
          y: 0,
          x: -23.5,
          z: 0.8,
          collisionFlags: 2,
          texture: "ice3",
          dir: 'x',
          speed: 0.00375
        }
      },
      // End
      {
        type: "box",
        options: {
          width: 7,
          height: 1,
          depth: 14,
          y: -1,
          x: -47,
          z: 0,
          collisionFlags: 2,
          texture: "ice"
        }
      },
    ],
    bananas: [
      [-6, 0.5, 0], [-10, 0.5, 0], [-14, 0.5, 0], [-18, 0.5, 0], [-22, 0.5, 0], [-26, 0.5, 0], [-30, 0.5, 0], [-34, 0.5, 0], [-47, 0.5, 0]
    ],
    goal: {
      x: -49,
      y: 0,
      z: 0
    }
  },
  8: {
    objects: [
      // Start platform
      {
        type: "box",
        options: {
          width: 5,
          height: 1,
          depth: 7,
          y: 0,
          x: 0,
          z: 0,
          collisionFlags: 2,
          texture: "ice"
        }
      },
      {
        type: "box",
        options: {
          width: 5,
          height: 1,
          depth: 1,
          y: 0,
          x: -5,
          z: 0,
          collisionFlags: 2,
          texture: "ice2"
        }
      },
      // Rotate 1
      {
        type: "rotating-box",
        options: {
          move: "rotate",
          width: 10,
          height: 5,
          depth: 5,
          y: -2.5,
          x: -12.5,
          z: 0,
          collisionFlags: 2,
          texture: "ice3",
          dir: 'x',
          speed: 0.002
        }
      },
      {
        type: "box",
        options: {
          width: 5,
          height: 1,
          depth: 1,
          y: 0,
          x: -20,
          z: 0,
          collisionFlags: 2,
          texture: "ice2"
        }
      },
      // Rotate 2
      {
        type: "rotating-box",
        options: {
          move: "rotate",
          width: 10,
          height: 5,
          depth: 5,
          y: -2.5,
          x: -28,
          z: 0,
          collisionFlags: 2,
          texture: "ice3",
          dir: 'x',
          speed: -0.002
        }
      },
      // End
      {
        type: "box",
        options: {
          width: 5,
          height: 1,
          depth: 1,
          y: 0,
          x: -35.5,
          z: 0,
          collisionFlags: 2,
          texture: "ice2"
        }
      },
      {
        type: "box",
        options: {
          width: 5,
          height: 1,
          depth: 7,
          y: 0,
          x: -40.5,
          z: 0,
          collisionFlags: 2,
          texture: "ice"
        }
      },
    ],
    bananas: [
      [-5, 1, 0], [-18, 1, 0], [-21, 1, 0], [-33, 1, 0], [-35, 1, 0]
    ],
    goal: {
      x: -40.5,
      y: 1,
      z: 0
    }
  },
  9: {
    objects: [
      {
        type: "box",
        options: {
          width: 24,
          height: 1,
          depth: 24,
          y: 0,
          x: 0,
          z: 0,
          collisionFlags: 2,
          texture: "space"
        }
      },
      {
        type: "box",
        options: {
          width: 1,
          height: 3.5,
          depth: 24,
          y: 0,
          x: -12,
          z: 0,
          collisionFlags: 2,
          texture: "space"
        }
      },
      {
        type: "box",
        options: {
          width: 1,
          height: 3.5,
          depth: 24,
          y: 0,
          x: 12,
          z: 0,
          collisionFlags: 2,
          texture: "space"
        }
      },
      {
        type: "box",
        options: {
          width: 24,
          height: 3.5,
          depth: 1,
          y: 0,
          x: 0,
          z: -12,
          collisionFlags: 2,
          texture: "space"
        }
      },
      {
        type: "box",
        options: {
          width: 24,
          height: 3.5,
          depth: 1,
          y: 0,
          x: 0,
          z: 12,
          collisionFlags: 2,
          texture: "space"
        }
      },
    ],
    bananas: [
      [-3, 1, 6], [-3, 1, 3], [-3, 1, 0], [-3, 1, -3], [-3, 1, -6], 
      [-6, 1, 6], [-6, 1, 3], [-6, 1, 0], [-6, 1, -3], [-6, 1, -6], 
      [0, 1, 6], [0, 1, 3], [0, 1, -3], [0, 1, -6], 
      [3, 1, 6], [3, 1, 3], [3, 1, 0], [3, 1, -3], [3, 1, -6],
      [6, 1, 6], [6, 1, 3], [6, 1, 0], [6, 1, -3], [6, 1, -6],
    ],
    goal: {
      x: -11,
      y: 1,
      z: 0
    }
  },
  10: {
    objects: [
      //Start boxes
      {
        type: "box",
        options: {
          width: 5,
          height: 1,
          depth: 5,
          y: 0,
          x: 0,
          z: 0,
          collisionFlags: 2,
          texture: "storm2"
        },
        dir: 'z',
        speed: 0.045,
        edges: [12, -12]
      },
      {
        type: "box",
        options: {
          width: 9,
          height: 1,
          depth: 1,
          y: 0,
          x: -7,
          z: 0,
          collisionFlags: 2,
          texture: "storm2"
        },
        dir: 'z',
        speed: 0.045,
        edges: [12, -12]
      },
      // End boxes
      {
        type: "box",
        options: {
          width: 9,
          height: 1,
          depth: 2,
          y: 0,
          x: -34,
          z: 0,
          collisionFlags: 2,
          texture: "storm2"
        },
        dir: 'z',
        speed: 0.045,
        edges: [12, -12]
      },
      {
        type: "box",
        options: {
          width: 5,
          height: 1,
          depth: 5,
          y: 0,
          x: -41,
          z: 0,
          collisionFlags: 2,
          texture: "storm2"
        },
        dir: 'z',
        speed: 0.045,
        edges: [12, -12]
      },
      // Repeating Boxes
      {
        type: "translating-box",
        options: {
          move: "translate",
          width: 2,
          height: 1,
          depth: 9,
          y: 0,
          x: -12.5,
          z: 12,
          collisionFlags: 2,
          texture: "storm2",
          dir: 'z',
          speed: 0.045,
          edges: [12, -12]
        }
      },
      {
        type: "translating-box",
        options: {
          move: "translate",
          width: 2,
          height: 1,
          depth: 9,
          y: 0,
          x: -14.5,
          z: 9,
          collisionFlags: 2,
          texture: "storm2",
          dir: 'z',
          speed: 0.045,
          edges: [12, -12]
        }
      },
      {
        type: "translating-box",
        options: {
          move: "translate",
          width: 2,
          height: 1,
          depth: 9,
          y: 0,
          x: -16.5,
          z: 6,
          collisionFlags: 2,
          texture: "storm2",
          dir: 'z',
          speed: 0.045,
          edges: [12, -12]
        }
      },
      {
        type: "translating-box",
        options: {
          move: "translate",
          width: 2,
          height: 1,
          depth: 9,
          y: 0,
          x: -18.5,
          z: 3,
          collisionFlags: 2,
          texture: "storm2",
          dir: 'z',
          speed: 0.045,
          edges: [12, -12]
        }
      },
      // Middle translating-box
      {
        type: "translating-box",
        options: {
          move: "translate",
          width: 2,
          height: 1,
          depth: 9,
          y: 0,
          x: -20.5,
          z: 0,
          collisionFlags: 2,
          texture: "storm2",
          dir: 'z',
          speed: 0.045,
          edges: [12, -12]
        }
      },
      {
        type: "translating-box",
        options: {
          move: "translate",
          width: 2,
          height: 1,
          depth: 9,
          y: 0,
          x: -22.5,
          z: -3,
          collisionFlags: 2,
          texture: "storm2",
          dir: 'z',
          speed: 0.045,
          edges: [12, -12]
        }
      },
      {
        type: "translating-box",
        options: {
          move: "translate",
          width: 2,
          height: 1,
          depth: 9,
          y: 0,
          x: -24.5,
          z: -6,
          collisionFlags: 2,
          texture: "storm2",
          dir: 'z',
          speed: 0.045,
          edges: [12, -12]
        }
      },
      {
        type: "translating-box",
        options: {
          move: "translate",
          width: 2,
          height: 1,
          depth: 9,
          y: 0,
          x: -26.5,
          z: -9,
          collisionFlags: 2,
          texture: "storm2",
          dir: 'z',
          speed: 0.045,
          edges: [12, -12]
        }
      },
      {
        type: "translating-box",
        options: {
          move: "translate",
          width: 2,
          height: 1,
          depth: 9,
          y: 0,
          x: -28.5,
          z: -12,
          collisionFlags: 2,
          texture: "storm2",
          dir: 'z',
          speed: 0.045,
          edges: [12, -12]
        }
      },
    ],
    bananas: [
      [-8.5, 1, 0], [-12.5, 1, 0], [-16.5, 1, 0], [-20.5, 1, 0], [-24.5, 1, 0], [-35.5, 1, 0], [-37.5, 1, 0],
    ],
    goal: {
      x: -43,
      y: 1,
      z: 0
    }
  },
  11: {
    objects: [
      // Start platform
      {
        type: "box",
        options: {
          width: 7,
          height: 1,
          depth: 7,
          x: 0,
          y: 0,
          z: 0,
          collisionFlags: 2,
          texture: "storm2"
        }
      },
      // Long stretch
      {
        type: "box",
        options: {
          width: 75,
          height: 0.2,
          depth: 0.5,
          y: 0,
          x: -23.5,
          z: 0,
          collisionFlags: 2,
          texture: "grey",
        }
      },
      // Rotate 1
      {
        type: "rotating-box",
        options: {
          move: "rotate",
          width: 1,
          height: 8,
          depth: 2,
          y: 3.3,
          x: -12.5,
          z: 0,
          collisionFlags: 2,
          texture: "storm2",
          dir: 'x',
          speed: 0.006
        }
      },
      // Rotate 2
      {
        type: "rotating-box",
        options: {
          move: "rotate",
          width: 1,
          height: 8,
          depth: 1,
          y: 3.3,
          x: -32.5,
          z: 0,
          collisionFlags: 2,
          texture: "storm2",
          dir: 'x',
          speed: 0.012
        }
      },
      // Rotate 3
      {
        type: "rotating-box",
        options: {
          move: "rotate",
          width: 1,
          height: 8,
          depth: 1,
          y: 3.3,
          x: -33.5,
          z: 0,
          collisionFlags: 2,
          texture: "storm2",
          dir: 'x',
          speed: -0.012
        }
      },
      // Moving 1
      {
        type: "translating-box",
        options: {
          move: "translate",
          width: 0.2,
          height: 1,
          depth: 1,
          x: -50,
          y: 1,
          z: 0,
          collisionFlags: 2,
          texture: "storm2",
          dir: "z",
          speed: 0.005,
          edges: [1.5, -1.5],
          name: "box-1"
        }
      },
      // Moving 2
      {
        type: "translating-box",
        options: {
          move: "translate",
          width: 0.2,
          height: 1,
          depth: 1,
          x: -55,
          y: 1,
          z: 0,
          collisionFlags: 2,
          texture: "storm2",
          dir: "z",
          speed: 0.008,
          edges: [1.5, -1.5],
          name: "box-1"
        }
      },
      // Moving 3
      {
        type: "translating-box",
        options: {
          move: "translate",
          width: 0.2,
          height: 1,
          depth: 1,
          x: -60,
          y: 1,
          z: 0,
          collisionFlags: 2,
          texture: "storm2",
          dir: "z",
          speed: 0.015,
          edges: [1.5, -1.5],
          name: "box-1"
        }
      },
      // End platform
      {
        type: "rotating-box",
        options: {
          move: 'rotate',
          width: 10,
          height: 1,
          depth: 7,
          x: -67,
          y: -0.8,
          z: 0,
          collisionFlags: 2,
          texture: "storm2",
          dir: 'y',
          speed: 0.008
        }
      },
    ],
    bananas: [
      [-4, 1, 0], [-7, 1, 0], [-15, 1, 0], [-19, 1, 0], [-22, 1, 0], [-35, 1, 0], [-38, 1, 0], [-41, 1, 0]
    ],
    goal: {
      x: -72,
      y: 0,
      z: 0
    }
  },
  12: {
    objects: [
      {
        type: "box",
        options: {
          width: 7,
          height: 1,
          depth: 7,
          y: 0,
          x: 0,
          z: 0,
          collisionFlags: 2,
          texture: "storm"
        }
      },
      {
        type: "box",
        options: {
          width: 7,
          height: 0.25,
          depth: 1,
          x: -6.5,
          y: 0.85,
          z: 0,
          zRotation: Math.PI / -16,
          collisionFlags: 2,
          texture: "storm"
        }
      },
      {
        type: "box",
        options: {
          width: 10,
          height: 0.25,
          depth: 4,
          x: -14.7,
          y: 0.55,
          z: 0,
          zRotation: Math.PI / 16,
          collisionFlags: 2,
          texture: "storm"
        }
      },
      {
        type: "box",
        options: {
          width: 5.3,
          height: 0.25,
          depth: 0.3,
          x: -21.9,
          y: -0.9,
          z: 1.5,
          zRotation: Math.PI / 16,
          collisionFlags: 2,
          texture: "grey"
        }
      },
      {
        type: "grey",
        options: {
          width: 5.3,
          height: 0.25,
          depth: 0.3,
          x: -21.9,
          y: -0.9,
          z: -1.5,
          zRotation: Math.PI / 16,
          collisionFlags: 2,
          texture: "storm"
        }
      },
      {
        type: "box",
        options: {
          width: 9,
          height: 1,
          depth: 9,
          y: -1.7,
          x: -29,
          z: 0,
          collisionFlags: 2,
          texture: "storm"
        }
      },
      //Repeat start
      {
        type: "box",
        options: {
          width: 3,
          height: 0.1,
          depth: 3,
          y: -1.25,
          x: -32,
          z: -6,
          collisionFlags: 2,
          texture: "storm2"
        }
      },
      {
        type: "box",
        options: {
          width: 3,
          height: 0.1,
          depth: 3,
          y: -1.25,
          x: -26,
          z: -6,
          collisionFlags: 2,
          texture: "storm2"
        }
      },
      {
        type: "box",
        options: {
          width: 3,
          height: 0.1,
          depth: 3,
          y: -1.25,
          x: -29,
          z: -9,
          collisionFlags: 2,
          texture: "storm2"
        }
      },
      {
        type: "box",
        options: {
          width: 3,
          height: 0.1,
          depth: 3,
          y: -1.25,
          x: -32,
          z: -12,
          collisionFlags: 2,
          texture: "storm2"
        }
      },
      {
        type: "box",
        options: {
          width: 3,
          height: 0.1,
          depth: 3,
          y: -1.25,
          x: -26,
          z: -12,
          collisionFlags: 2,
          texture: "storm2"
        }
      },
      {
        type: "box",
        options: {
          width: 3,
          height: 0.1,
          depth: 3,
          y: -1.25,
          x: -29,
          z: -15,
          collisionFlags: 2,
          texture: "storm2"
        }
      },
      {
        type: "box",
        options: {
          width: 3,
          height: 0.1,
          depth: 3,
          y: -1.25,
          x: -32,
          z: -18,
          collisionFlags: 2,
          texture: "storm2"
        }
      },
      {
        type: "box",
        options: {
          width: 3,
          height: 0.1,
          depth: 3,
          y: -1.25,
          x: -26,
          z: -18,
          collisionFlags: 2,
          texture: "storm2"
        }
      },
      //Repeat end
      {
        type: "box",
        options: {
          width: 9,
          height: 0.3,
          depth: 9,
          y: -1.7,
          x: -29,
          z: -24,
          collisionFlags: 2,
          texture: "storm"
        }
      },
    ],
    bananas: [
      [-4, 1, 0], [-29, -0.7, 0], [-32, -0.7, -6], [-26, -0.7, -6], [-29, -0.7, -9], [-32, -0.7, -12], [-26, -0.7, -12], [-29, -0.7, -15], 
      [-32, -0.7, -18], [-26, -0.7, -18], [-29, -0.7, -22], [-29, -0.7, -24],
    ],
    goal: {
      x: -29,
      y: -1,
      z: -26,
      rotate: true
    }
  },
  13: {
    objects: [
      {
        type: "box",
        options: {
          width: 7,
          height: 1,
          depth: 7,
          x: 0,
          y: 0,
          z: 0,
          collisionFlags: 2,
          texture: "grass"
        }
      }
    ],
    bananas: [
      [-7, 1, 0], [-4, 1, 0]
    ],
    goal: {
      x: 10,
      y: 1,
      z: 0
    }
  },
  
}

/*

0: {
  objects: [
    {
      type: "box",
      options: {
        width: 7,
        height: 1,
        depth: 7,
        x: 0,
        y: 0,
        z: 0,
        collisionFlags: 2,
        texture: "grass"
      }
    }
  ],
  bananas: [
    [-7, 1, 0], [-4, 1, 0]
  ],
  goal: {
    x: -10,
    y: 1,
    z: 0
  }
},

*/

export default obj;