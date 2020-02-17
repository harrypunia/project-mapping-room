import * as $ from 'three';

class Camera {
  constructor(fov) {
    this.mesh = new $.PerspectiveCamera(fov, window.innerWidth/ window.innerHeight, 0.01, 1000);
  }

  init() {
    this.mesh.position.z = 230;
  }
}

export default Camera;