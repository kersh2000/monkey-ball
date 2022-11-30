import obj from '../stages';
import { ExtendedMesh, THREE } from '@enable3d/phaser-extension';

export default class Stage {

  constructor(third, ball, level) {
    this.third = third;
    this.ball = ball;
    this.stages = this.getAllStages();
    this.numOfStages = Object.keys(this.stages).length;
    console.log(this.numOfStages);
    this.stageNum = level;

    if (this.stageNum < this.numOfStages) {
      const stage = this.fetchStage();
      this.loadStage(stage);
    } else {
      this.winScreen();
    }

  }

  getAllStages() {
    return obj;
  }

  fetchStage() {
    return this.stages[this.stageNum];
  }

  loadStage(stage) {
    const objects = stage.objects;
    const bananas = stage.bananas;
    const goal = stage.goal;

    const textures = {
      "grass": new THREE.TextureLoader().load('../../../assets/img/grass.jpg')
    }

    objects.forEach( (object, index) => {

      console.log(object);
      const options = object.options;

      if (object.type.includes("box")) {
        const geometry = new THREE.BoxGeometry(options.width, options.height, options.depth);
        const material = new THREE.MeshStandardMaterial({ map: textures[options.texture] });
        const box = new ExtendedMesh(geometry, material);
        box.position.set(options.x, options.y, options.z);
        this.third.physics.add.existing(box, { collisionFlags: options.collisionFlags });
        box.receiveShadow = true;
        box.rotation.x = options.xRotation || 0;
        box.rotation.y = options.yRotation || 0;
        box.rotation.z = options.zRotation || 0;
        this.third.scene.add(box);
        box.body.needUpdate = true;

        if (object.type.includes("translating")) {
          this.third.objects.push({
            box: box,
            meta: options,
            factor: 1
          });
        }

      }

    });

    this.third.bananas = [];

    bananas.forEach( (pos, index) => {
      const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
      const material = new THREE.MeshStandardMaterial({ color: '#2F005F' })
      const banana = new ExtendedMesh(geometry, material);
      banana.position.set(pos[0], pos[1], pos[2]);
      this.third.physics.add.existing(banana, { collisionFlags: 6 });
      banana.castShadow = true;
      banana.name = `banana`;
      banana.dead = false;
      banana.rotateY(Math.random() * Math.PI * 2);
      banana.body.needUpdate = true;
      this.third.bananas.push(banana);
      this.third.scene.add(banana);
    });

    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.6);
    const material = new THREE.MeshStandardMaterial({ color: '#000000' });
    const goalBox = new ExtendedMesh(geometry, material);
    goalBox.position.set(goal.x, goal.y, goal.z);
    this.third.physics.add.existing(goalBox, { collisionFlags: 6 });
    this.third.scene.add(goalBox);
    goalBox.name = 'goal';
    goalBox.dead = false;
    if (goal.rotate) {
      goalBox.rotateY(Math.PI / 2);
      goalBox.body.needUpdate = true;
    }
    this.third.goal = goalBox;
  }

  nextLevel() {
    //Animations
    console.log(`next`);
  }

  winScreen() {
    //Win / end screen
    console.log("You won!")
  }

}