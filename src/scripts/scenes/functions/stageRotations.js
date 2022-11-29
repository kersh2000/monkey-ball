export default class Rotate {

  constructor (keys, ball, scene) {
    const moving = ((keys.left.isDown) || (keys.right.isDown) || (keys.up.isDown) || (keys.down.isDown)) || ((ball.velocity.x > 0.001) || (ball.velocity.y > 0.001) || (ball.velocity.z > 0.001));
    if (moving) {
      this.addVel(keys, scene);
    }
  }

  addVel(keys, scene) {

    if (keys.left.isDown) {
      scene.rotateX(0.0025);
    } else if (keys.right.isDown) {
      const vel = (ball.velocity.x + 0.025 < 2) ? ball.velocity.x + 0.025 : 2;
      ball.setVelocityX(vel);   
    }
    
    if (keys.up.isDown) {
      const vel = (ball.velocity.z - 0.025 > -2) ? ball.velocity.z - 0.025 : -2;
      ball.setVelocityZ(vel);
    } else if (keys.down.isDown) {
      const vel = (ball.velocity.z + 0.025 < 2) ? ball.velocity.z + 0.025 : 2;
      ball.setVelocityZ(vel);
    }
    
    if (!((keys.left.isDown) || (keys.right.isDown) || (keys.up.isDown) || (keys.down.isDown))) {

    }

    // console.log(camera.position);

  }

}