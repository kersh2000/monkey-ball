import { THREE } from "@enable3d/phaser-extension";

export default class Move {

  constructor (keys, ball, camera, orBall) {
    const moving = ((keys.left.isDown) || (keys.right.isDown) || (keys.up.isDown) || (keys.down.isDown)) || ((ball.velocity.x > 0.001) || (ball.velocity.y > 0.001) || (ball.velocity.z > 0.001));
    if (moving) {
      this.addVel(keys, ball);
    }
    const pos = this.rotate(keys, ball);
    this.camera(orBall, camera, pos);
  }

  addVel(keys, ball) {

    if (keys.up.isDown) {
      const vel = (ball.velocity.x - 0.025 > -2) ? ball.velocity.x - 0.025 : -2;
      ball.setVelocityX(vel);
    } else if (keys.down.isDown) {
      const vel = (ball.velocity.x + 0.025 < 2) ? ball.velocity.x + 0.025 : 2;
      ball.setVelocityX(vel);   
    }
    
    if (keys.right.isDown) {
      const vel = (ball.velocity.z - 0.025 > -2) ? ball.velocity.z - 0.025 : -2;
      ball.setVelocityZ(vel);
    } else if (keys.left.isDown) {
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
      if (Math.abs(y) < 0.3) {
        ball.setVelocityY(0);
      }
    }
  }

  rotate(keys, ball) {

    const zoomFactor = 2;
    let pos = {};

    if (keys.a.isDown) {
      pos.x = 0;
      pos.z = -2.5 * zoomFactor;
    } else if (keys.d.isDown) {
      pos.x = 0;
      pos.z = 2.5 * zoomFactor;
    } else if (keys.s.isDown) {
      pos.x = -2.5 * zoomFactor;
      pos.z = 0;
    } else {
      pos.x = 2.5 * zoomFactor;
      pos.z = 0;
    }

    return pos;

  }

  camera(ball, camera, adj) {
    const pos = { x: ball.matrixWorld.elements[12], y: ball.matrixWorld.elements[13], z: ball.matrixWorld.elements[14] }
    camera.position.set(pos.x + adj.x, pos.y + 1.75, pos.z + adj.z);
    camera.lookAt(new THREE.Vector3( pos.x, pos.y + 0.5, pos.z));
  }

}