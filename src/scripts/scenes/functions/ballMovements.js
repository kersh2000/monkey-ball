import { THREE } from "@enable3d/phaser-extension";

export default class Move {

  constructor (keys, ball, camera, orBall, dir) {
    const moving = ((keys.left.isDown) || (keys.right.isDown) || (keys.up.isDown) || (keys.down.isDown)) || ((ball.velocity.x > 0.001) || (ball.velocity.y > 0.001) || (ball.velocity.z > 0.001));
    if (keys.space.isDown) {
      ball.applyForceY(0.1);
    }
    const pos = this.rotate(keys, ball, dir);
    if (moving) {
      this.addVel(keys, ball);
    }
    this.camera(orBall, camera, pos);
  }

  addVel(keys, ball) {

    const maxVel = 15;

    if (keys.up.isDown) {
      // const vel = (ball.velocity.x - 0.025 > -2) ? ball.velocity.x - 0.025 : -2;
      // forwards/backward
      if (ball.velocity.x > 0) {
        ball.applyForceX(-0.07);
      }else if (ball.velocity.x > -maxVel) {
        ball.applyForceX(-0.03);
      }
    } else if (keys.down.isDown) {
      // const vel = (ball.velocity.x + 0.025 < 2) ? ball.velocity.x + 0.025 : 2;
      if (ball.velocity.x < 0) {
        ball.applyForceX(0.07);
      }else if (ball.velocity.x < maxVel) {
        ball.applyForceX(0.03);
      }
    }
    
    if (keys.right.isDown) {
      // const vel = (ball.velocity.z - 0.025 > -2) ? ball.velocity.z - 0.025 : -2;
      if (ball.velocity.z > 0) {
        ball.applyForceZ(-0.07)
      } else if (ball.velocity.z > -maxVel) {
        ball.applyForceZ(-0.03);
      }
    } else if (keys.left.isDown) {
      // const vel = (ball.velocity.z + 0.025 < 2) ? ball.velocity.z + 0.025 : 2;
      if (ball.velocity.z < 0) {
        ball.applyForceZ(0.07)
      } else if (ball.velocity.z < maxVel) {
        ball.applyForceZ(0.03);
      }
    }
    
    // Making ball move
    if (!((keys.left.isDown) || (keys.right.isDown) || (keys.up.isDown) || (keys.down.isDown))) {
      const { x, y, z } = ball.velocity;

      // if (Math.abs(x) < 0.3) {
      //   ball.setVelocityX(0);
      // }
      // if (Math.abs(z) < 0.3) {
      //   ball.setVelocityZ(0);
      // }
      // if (Math.abs(y) < 0.3) {
      //   ball.setVelocityY(0);
      // }
    }
  }

  rotate(keys, ball, dir) {

    const zoomFactor = 3;
    let pos = {};

    if (keys.a.isDown || dir.face === 'left') {
      pos.x = 0;
      pos.z = -2.5 * zoomFactor;
      dir.face = 'left';
    }
    
    if (keys.d.isDown || dir.face === 'right') {
      pos.x = 0;
      pos.z = 2.5 * zoomFactor;
      dir.face = 'right';
    }
    
    if (keys.s.isDown || dir.face === 'back') {
      pos.x = -2.5 * zoomFactor;
      pos.z = 0;
      dir.face = 'back';
    }
    
    if (keys.w.isDown || dir.face === 'front') {
      pos.x = 2.5 * zoomFactor;
      pos.z = 0;
      dir.face = 'front';
    }

    if (dir.face === 'no') {
      pos.x = 2.5 * zoomFactor;
      pos.z = 0;
      dir.face = 'front';
    }

    return pos;

  }

  camera(ball, camera, adj) {
    const pos = { x: ball.matrixWorld.elements[12], y: ball.matrixWorld.elements[13], z: ball.matrixWorld.elements[14] }
    camera.position.set(pos.x + adj.x, pos.y + 2.5, pos.z + adj.z);
    camera.lookAt(new THREE.Vector3( pos.x, pos.y + 0.5, pos.z));
  }

}