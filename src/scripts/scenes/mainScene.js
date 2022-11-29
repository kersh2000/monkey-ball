import { Scene3D } from '@enable3d/phaser-extension'
import Move from './functions/ballMovements';
import Rotate from './functions/stageRotations';
import { ThirdPersonControls, THREE } from '@enable3d/phaser-extension';

export default class MainScene extends Scene3D {
  constructor() {
    super({ key: 'MainScene' })
    this.cursors;
    this.ball;
  }

  init() {
    this.accessThirdDimension();
    this.third.load.preload('grass', '../../../assets/img/grass.jpg');
  }

  create() {

    this.third.physics.debug.enable()
    //importing keyboard inputs for movement of the monkeyball/character
    this.cursors = {
      up: this.input.keyboard.addKey('up'),
      down: this.input.keyboard.addKey('down'),
      right: this.input.keyboard.addKey('right'),
      left: this.input.keyboard.addKey('left'),
      a: this.input.keyboard.addKey('a'),
      w: this.input.keyboard.addKey('w'),
      d: this.input.keyboard.addKey('d'),
      s: this.input.keyboard.addKey('s'),
      space: this.input.keyboard.addKey(32)
    }
    // creates a nice scene
    this.third.warpSpeed('light', 'camera', 'sky');


    this.third.load.texture('grass').then(grass => {
      grass.wrapS = grass.wrapT = 1000 // RepeatWrapping
      grass.offset.set(0, 0)
      grass.repeat.set(2, 2)

      // BUG: To add shadows to your ground, set transparent = true
      this.third.physics.add.ground({
        width: 20,
        height: 20,
        y: 1
      },
      {
        phong: {
          map: grass
        }
      })
    })

    // adds a sphere with physics
    this.ball = this.third.physics.add.sphere({ radius: 0.5, x: 0, y:2 }, { lambert: { color: 0xff0000, transparent: true, opacity: 0.5 } }) //position of box init+colours

    // this.cameras.main.startFollow(this.ball);

    new Move(this.cursors, this.ball.body, this.third.camera, this.ball);

  }

  update() {

    new Move(this.cursors, this.ball.body, this.third.camera, this.ball);
    // const pos = { x: this.ball.matrixWorld.elements[12], y: this.ball.matrixWorld.elements[13], z: this.ball.matrixWorld.elements[14] }
    // this.third.camera.lookAt(pos.x, pos.y + 3, pos.z)
    // new Rotate(this.cursors, this.ball.body, this.third.scene);

    if (this.ball.body.velocity.x === 0 && this.ball.body.velocity.z === 0) {
      this.ball.body.setAngularVelocity(0, 0, 0);
    }

  }
}
