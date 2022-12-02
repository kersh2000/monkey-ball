import { THREE } from '@enable3d/phaser-extension';

export default class Sound {

  constructor(camera) {
    this.camera = camera;

    // create an AudioListener and add it to the camera
    this.listener = new THREE.AudioListener();
    this.camera.add( this.listener );

    this.jungleAudio = this.jungle();
    this.bananaAudio = this.banana();
    this.goalAudio = this.goal();
  }

  jungle() {

    return this.create('Jungle', 0.02, true);

  }

  ice() {

    return this.create('Arctic', 0.02, true);

  }

  bonus() {

    return this.create('Bonus', 0.02, true);

  }

  storm() {

    return this.create('Storm', 0.02, true);

  }

  banana() {

    return this.create('banana1', 0.01, false);


  }

  goal() {

    return this.create('realGoal', 0.02, false);

  }

  create(fileName, volume, loop) {
    const sound = new THREE.Audio( this.listener );
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(`../../../assets/sound/${fileName}.wav`, function( buffer ) {
      sound.setBuffer(buffer);
      sound.setLoop(loop);
      sound.setVolume(volume);
      sound.isPlaying = false;
    });

    return sound;
  }

  newSong(level) {
    if (level === 0) {
      this.jungleAudio = this.jungle();
    } else if (level === 5) {
      this.jungleAudio = this.ice();
    } else if (level === 9) {
      this.jungleAudio = this.bonus();
    } else if (level === 10) {
      this.jungleAudio = this.storm();
    }
  }

}