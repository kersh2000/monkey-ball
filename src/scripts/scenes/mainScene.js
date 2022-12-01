import { ExtendedMesh, Scene3D } from '@enable3d/phaser-extension'
import Move from './functions/ballMovements';
import { THREE } from '@enable3d/phaser-extension';
import setControls from './functions/setControls';
import updateControls from './functions/updateControls';
import Stage from './functions/createStage';

export default class MainScene extends Scene3D {
  constructor() {
    super({ key: 'MainScene' })
    this.cursors;
    this.ball;
    // Initialising score text
    this.scoreText;
    this.instructionsText;
    this.stageText;
    this.timerText;
    this.livesText;
    this.score = 0;
    this.stageNum = 0;
    this.lives = 4;
    this.soundOn = false;
    this.cameraDirection = { face: 'no' }
  }

  init() {
    this.accessThirdDimension();
    this.third.load.preload('grass', '../../../assets/img/grass.jpg');
    this.third.load.preload('goalTimer', "../../../assets/Goal_Green.webp")
  }

  create() {

    // this.third.physics.debug.enable()


    // if (!this.soundOn){
    //   // create an AudioListener and add it to the camera
    //   const listener = new THREE.AudioListener();
    //   this.third.camera.add( listener );

    //   // create a global audio source
    //   const themeSound = new THREE.Audio( listener );

    //   // load a sound and set it as the Audio object's buffer
    //   const audioLoader = new THREE.AudioLoader();
    //   audioLoader.load( "../../../assets/sound/Jungle.wav", function( buffer ) {
    //     themeSound.setBuffer( buffer );
    //     themeSound.setLoop( true );
    //     themeSound.setVolume( 0 );
    //     themeSound.play()
    //   });
    // }
   // this.third.sound.addEventListener("ended", function(e){sound.play();}, false); 

    // creates a nice scene
    this.third.warpSpeed('camera', 'sky');
    this.third.objects = [];

    // adds a sphere with physics
    this.ball = this.third.physics.add.sphere({ radius: 0.5, x: 0, y:2 }, { lambert: { color: 0xff0000, transparent: true, opacity: 0.6 } }) //position of box init+colours

    // Create stage / level
    this.stage = new Stage(this.third, this.ball, this.stageNum);

    this.scoreText = this.add.text(10, 0, `Score: ${this.score}`, { fontSize: "40px", fill: "#000" })
    this.instructionsText = this.add.text(10,0, "\n\nInstructions:  WASD to trigger camera movements  \n\nArrow keys to move ball",{fontSize: "20px", fill: "#000"})
    this.stageText = this.add.text(window.innerWidth - 70, 20, `${this.stageNum + 1}`, { fontSize: "50px", fill: "#000000" })

    //importing keyboard inputs for movement of the monkeyball/character
    this.cursors = setControls(this.input, this.cameraDirection);

    this.ball.body.on.collision( (obj, e) => {
      if (/banana/.test(obj.name)) {
        if (!obj.dead) {
          obj.dead = true;
          obj.visible = false;
          this.score ++;
          this.scoreText.setText(`Score: ${this.score}`); 
        }
      }
    });

    this.ball.body.on.collision( (obj, e) => {
      if (/goal/.test(obj.name)) {
        if (!obj.dead) {
          obj.dead = true;
          this.stageNum ++;
          this.stage.nextLevel();
          this.scene.restart();
          this.stageText.setText(`${this.stageNum + 1}`);
          this.cameraDirection.face = 'no'
        }
      }
    });


    // LIGHTS!!!
    this.third.lights.hemisphereLight({ intensity: 1})

    this.third.directional = this.third.lights.directionalLight({ intensity: 0.5 })
    this.third.directional.position.set(-30, 50, 30)

    this.third.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.third.directional.shadow.mapSize.width = 10000;
    this.third.directional.shadow.mapSize.height = 10000;

    const d = 100;

    this.third.directional.shadow.camera.left = - d;
    this.third.directional.shadow.camera.right = d;
    this.third.directional.shadow.camera.top = d;
    this.third.directional.shadow.camera.bottom = - d;

    this.third.directional.shadow.camera.far = 35000;
    this.third.directional.shadow.bias = -0;
    // LIGHTS!!!

  }

  update() {

    const pre = { ...this.cameraDirection }
    // //this.third.box is the stage - this is what makes it tilt
    // this.third.box.rotation.x += 0.001;
    // this.third.box.body.needUpdate = true;

    this.third.bananas.forEach( banana => {
      banana.rotation.y += 0.01;
      banana.body.needUpdate = true;
    })

    new Move(this.cursors, this.ball.body, this.third.camera, this.ball, this.cameraDirection);
    // const pos = { x: this.ball.matrixWorld.elements[12], y: this.ball.matrixWorld.elements[13], z: this.ball.matrixWorld.elements[14] }
    // this.third.camera.lookAt(pos.x, pos.y + 3, pos.z)
    // new Rotate(this.cursors, this.ball.body, this.third.scene);

    if (this.ball.body.velocity.x === 0 && this.ball.body.velocity.z === 0) {
      this.ball.body.setAngularVelocity(0, 0, 0);
    }

    if (this.ball.matrixWorld.elements[13] < -20){
      this.cameraDirection.face = 'no'
      this.scene.restart();
    }

    this.third.objects.forEach( (obj) => {
      const pos = { x: obj.box.matrixWorld.elements[12], y: obj.box.matrixWorld.elements[13], z: obj.box.matrixWorld.elements[14] }
      obj.box.position[obj.meta.dir] += obj.meta.speed * obj.factor;
      if (pos[obj.meta.dir] > obj.meta.edges[0]) {
        obj.factor = -1;
      } else if (pos[obj.meta.dir] < obj.meta.edges[1]) {
        obj.factor = 1;
      }
      // if (obj.meta.name === "box-2") {
      //   console.log(`${pos.z} > ${obj.meta.edges[0]}`);
      //   console.log(`${pos.z} < ${obj.meta.edges[1]}`);
      // }
      obj.box.body.needUpdate = true;
    });

    this.soundOn = true;
    if (pre.face !== this.cameraDirection.face) {
      this.cursors = updateControls(this.input, this.cameraDirection.face);
      console.log(JSON.stringify(
        { x: this.ball.matrixWorld.elements[12],
         y: this.ball.matrixWorld.elements[13],
         z: this.ball.matrixWorld.elements[14] }
         , null, 2))
    }

  }
}




// // **************************************************************************************************************************************************

 /*

import { ExtendedMesh, Scene3D } from '@enable3d/phaser-extension'
import Move from './functions/ballMovements';
import Rotate from './functions/stageRotations';
import { ThirdPersonControls, THREE } from '@enable3d/phaser-extension';
import { CubeReflectionMapping, CustomBlending } from 'three';

const stages = [
  {}
];

export default class MainScene extends Scene3D {
  constructor() {
    super({ key: 'MainScene' })
    this.cursors;
    this.ball;
    // Initialising score text
    this.scoreText;
    this.instructionsText
    this.timerText
    this.score = 0;
  }

  init() {
    this.accessThirdDimension();
    this.third.load.preload('grass', '../../../assets/img/grass.jpg');
    this.third.load.preload('map', '../../../assets/heightmap/map1.png');
    this.third.load.preload('goalTimer', "../../../assets/Goal_Green.webp")
    this.third.load.preload('mapTest', "../../../assets/heightmap/mapTest.png")
  }

  create() {
    this.scoreText = this.add.text(10, 0, `Score: ${this.score}`, { fontSize: "40px", fill: "#000" })
    this.instructionsText = this.add.text(10,0, "\n\nInstructions:  WASD to trigger camera movements  \n\nArrow keys to move ball",{fontSize: "20px", fill: "#000"})

    // var loader = new THREE.TextureLoader();
    // var material = new THREE.MeshLambertMaterial({
    //   map: loader.load("https://s3.amazonaws.com/duhaime/blog/tsne-webgl/assets/cat.jpg")
    // });

    // var geometry = new THREE.PlaneGeometry(10, 10*.75);

    // // combine our image geometry and material into a mesh
    // var mesh = new THREE.Mesh(geometry, material);

    // // set the position of the image mesh in the x,y,z dimensions
    // mesh.position.set(0,0,0)

    // // add the image to the scene
    // this.third.scene.add(mesh);

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
    this.third.warpSpeed('camera', 'sky');

    this.third.load.texture('grass').then(grass => {
      grass.wrapS = grass.wrapT = 1000 // RepeatWrapping
      grass.offset.set(0, 0)
      grass.repeat.set(40, 40)
      
      this.third.physics.add.box({
        width: 6,
        height: 1,
        depth: 3,
        y: 0,
        x: -2,
        collisionFlags: 2
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
    this.goal = this.third.physics.add.box({ width: 1, height: 0.1, depth: 1 , x: -17, z: 1, y: 0.1}, { lambert: { color: 0xff00ff } })

    this.third.lights.hemisphereLight({ intensity: 1})

    this.third.directional = this.third.lights.directionalLight({ intensity: 0.5 })
    this.third.directional.position.set(-30, 50, 30)

    this.third.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.third.directional.shadow.mapSize.width = 10000;
    this.third.directional.shadow.mapSize.height = 10000;

    const d = 100;
    const r = 0.2543;

    this.third.directional.shadow.camera.left = - d;
    this.third.directional.shadow.camera.right = d;
    this.third.directional.shadow.camera.top = d;
    this.third.directional.shadow.camera.bottom = - d;

    this.third.directional.shadow.camera.far = 35000;
    this.third.directional.shadow.bias = - 0;

    const curve = new THREE.Shape()
    curve.arc(0, 0, 4, 0, Math.PI, false)
    curve.arc(4, 0, 3, Math.PI, 2 * Math.PI, true)
    this.curve2 = this.third.physics.add.extrude({
      y: 3,
      x: -7,
      shape: curve,
      curveSegments: 10,
      collisionFlags: 2,
    })

    
    this.curve2.body.setCollisionFlags(2);


    const grass = new THREE.TextureLoader().load('../../../assets/img/grass.jpg');


    const geometry2 = new THREE.SphereGeometry(0.8, 16, 16)
    const material2 = new THREE.MeshStandardMaterial({ map: grass })
    this.cube = new ExtendedMesh(geometry2, material2)
    this.cube.position.set(-6, 1, 0)
    this.third.scene.add(this.cube)
    // add physics to an existing object
    this.third.physics.add.existing(this.cube, {collisionFlags: 2})

    this.bounce = -0.01;

  }

  update() {

    if (this.cube.position.z > 2) {
      this.bounce = -0.01;
    } else if (this.cube.position.z < -2) {
      this.bounce = 0.01;
    }

    this.cube.position.z += this.bounce;
    this.cube.body.needUpdate = true;

    this.curve2.rotation.x += 0.01;
    this.curve2.body.needUpdate = true;
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

*/