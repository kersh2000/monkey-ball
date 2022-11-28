import { Scene3D } from '@enable3d/phaser-extension'

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

    // // adds a box
    // this.third.add.box({ x: 1, y: 2 })

    // adds a sphere with physics
    this.ball = this.third.physics.add.sphere({ radius: 0.5, x: 0, y:2 }, { lambert: { color: 0xff0000, transparent: true, opacity: 0.5 } })//position of box init+colours

    this.cameras.main.startFollow(this.ball);

  }

  update() {

    this.ball.body.transform();
    this.ball.body.refresh();
    if (this.cursors.left.isDown) {
      this.ball.translateX(-10);
    } else if (this.cursors.right.isDown) {
      this.ball.translateY(100);
      console.log(this.ball.position);
      this.ball.body.needUpdate = true;
      this.ball.body.transform();
      this.ball.body.refresh();
    }

  }
}
