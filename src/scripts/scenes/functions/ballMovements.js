import { THREE } from "@enable3d/phaser-extension";

export default class Move {

  constructor (keys, ball, camera) {
    const moving = ((keys.left.isDown) || (keys.right.isDown) || (keys.up.isDown) || (keys.down.isDown)) || ((ball.velocity.x > 0.001) || (ball.velocity.y > 0.001) || (ball.velocity.z > 0.001));
    if (moving) {
      this.addVel(keys, ball, camera);
    } 
  }

  addVel(keys, ball, camera) {

    const cords = Object.assign({}, ball.position);

    if (keys.left.isDown) {
      const vel = (ball.velocity.x - 0.025 > -2) ? ball.velocity.x - 0.025 : -2;
      ball.setVelocityX(vel);
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
      const { x, y, z } = ball.velocity;

      if (Math.abs(x) < 0.3) {
        ball.setVelocityX(0);
      }
      if (Math.abs(z) < 0.3) {
        ball.setVelocityZ(0);
      }
    }

    camera.position.add(new THREE.Vector3((ball.position.x - cords.x), (ball.position.y - cords.y), (ball.position.z - cords.z)));

    // console.log(camera.position);

  }

}