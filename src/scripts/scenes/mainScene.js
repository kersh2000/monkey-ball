import { Scene3D } from '@enable3d/phaser-extension'
import Move from './functions/ballMovements';
import Rotate from './functions/stageRotations';

export default class MainScene extends Scene3D {
  constructor() {
    super({ key: 'MainScene' })
    this.cursors;
    this.ball;
  }

  init() {
    this.accessThirdDimension()
  }

  create() {
    //importing keyboard inputs for movement of the monkeyball/character
    this.cursors = this.input.keyboard.createCursorKeys()
    // creates a nice scene
    this.third.warpSpeed()
    this.third.camera.position.set(0, 12, 12);

    // adds a sphere with physics
    this.ball = this.third.physics.add.sphere({ radius: 0.5, x: 0, y:2 }, { lambert: { color: 0xff0000, transparent: true, opacity: 0.5 } }) //position of box init+colours

    // this.cameras.main.startFollow(this.ball);

  }

  update() {

    new Move(this.cursors, this.ball.body, this.third.camera);
    // new Rotate(this.cursors, this.ball.body, this.third.scene);

  }
}
