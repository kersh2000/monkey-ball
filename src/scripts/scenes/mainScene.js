import { Scene3D } from '@enable3d/phaser-extension'
import Move from './functions/ballMovements';
import Rotate from './functions/stageRotations';
import { ThirdPersonControls, THREE } from '@enable3d/phaser-extension';

export default class MainScene extends Scene3D {
  constructor() {
    super({ key: 'MainScene' })
    this.cursors;
    this.ball;
    // Initialising score text
    this.scoreText;
    this.instructionsText
    this.timerText

  }

  init() {
    this.accessThirdDimension();
    this.third.load.preload('grass', '../../../assets/img/grass.jpg');
    this.third.load.preload('map', '../../../assets/heightmap/map1.png');
    this.third.load.preload('goalTimer', "../../../assets/Goal_Green_no_shad.png")
  }

  create() {
    this.scoreText = this.add.text(10, 0, "Score: ", { fontSize: "40px", fill: "#000" })
    this.instructionsText = this.add.text(10,0, "\n\nInstructions:  WASD to trigger camera movements  \n\nArrow keys to move ball",{fontSize: "20px", fill: "#000"})

    //this.goalTimer = this.add.image(0,200, 'goalTimer')



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

    // const grass = this.third.load.texture('grass').then(grass => {
    //   grass.wrapS = THREE.RepeatWrapping;
    //   grass.wrapT = THREE.RepeatWrapping;
    //   grass.repeat.set(4, 4);
    // });
  
    // this.third.load.texture('map').then(heightmap => {
    //   const mesh = this.third.heightMap.add(heightmap)
    //   if (mesh) {
    //     // add custom material or a texture
    //     mesh.material = new THREE.MeshPhongMaterial({ map: grass })

    //     // we position, scale, rotate etc. the mesh before adding physics to it
    //     mesh.scale.set(2, 2, 2)

    //     // @ts-ignore
    //     this.third.physics.add.existing(mesh, { mass: 0, collisionFlags: 1 })
    //   }
    // });


    this.third.load.texture('grass').then(grass => {
      grass.wrapS = grass.wrapT = 1000 // RepeatWrapping
      grass.offset.set(0, 0)
      grass.repeat.set(40, 40)
      
      this.third.physics.add.ground({
        width: 6,
        height: 3,
        y: 0,
        x: -2
      },
      {
        phong: {
          map: grass
        }
      })

      // Makes extra platforms that are connected
      this.third.physics.add.ground({
        width: 2,
        height: 12,
        y: 0,
        x: -6
      },
      {
        phong: {
          map: grass
        }
      })

      this.third.physics.add.ground({
        width: 6,
        height: 6,
        y: -3,
        x: -8,
        z: -10
      },{
        phong: {
          map: grass
        }
      })

      this.third.physics.add.ground({
        width: 10,
        height: 0.2,
        y: 0,
        x: -10,
        z: 1
      },{
        phong: {
          map: grass
        }
      })

      this.third.physics.add.ground({
        width: 5,
        height: 5,
        y: 0,
        x: -17.5,
        z: 1
      },{
        phong: {
          map: grass
        }
      })

      // Like above - just experimenting widh different platforms
      this.third.physics.add.ground({
        width: 1,
        height: 60,
        y: -3, //Up (+) and Down (-)
        x: -8, //Forward (+) and Backwards (-)
        z: -10 //Left (+) and Right (-)
      },{
        phong: {
          map: grass
        }
      })
    })

    

    // Makes platform tilt to left/right
    this.third.scene.rotateX(0.0);

    // adds a sphere with physics
    this.ball = this.third.physics.add.sphere({ radius: 0.5, x: 0, y:2 }, { lambert: { color: 0xff0000, transparent: true, opacity: 0.6 } }) //position of box init+colours

    this.third.lights.directionalLight({intensity: 0});
    this.third.lights.hemisphereLight({intensity: 0});

  }

  update() {

    new Move(this.cursors, this.ball.body, this.third.camera, this.ball);
    // const pos = { x: this.ball.matrixWorld.elements[12], y: this.ball.matrixWorld.elements[13], z: this.ball.matrixWorld.elements[14] }
    // this.third.camera.lookAt(pos.x, pos.y + 3, pos.z)
    // new Rotate(this.cursors, this.ball.body, this.third.scene);

    if (this.ball.body.velocity.x === 0 && this.ball.body.velocity.z === 0) {
      this.ball.body.setAngularVelocity(0, 0, 0);
    }

    if (this.ball.matrixWorld.elements[13] < -20){
      this.scene.restart();
    }

  }
}
