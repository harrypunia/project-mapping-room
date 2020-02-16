import * as $ from 'three';

class Camera {
  constructor(fov) {
    this.mesh = new $.PerspectiveCamera(fov, window.innerWidth/ window.innerHeight, 0.01, 10);
  }

  init() {
    this.mesh.position.z = 1;
  }
}

export default Camera;